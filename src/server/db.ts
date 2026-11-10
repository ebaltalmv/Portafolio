import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import {
  portfolioDatabaseSchema,
  portfolioEntrySchema,
  evidenceSlotSchema,
  type PortfolioDatabase,
  type PortfolioEntry,
  type ProfileData,
  type SectionKey,
  type EvidenceCategory,
  type EvidenceSlot,
  type UploadedEvidence,
} from './schemas';
import { createInitialSeedDatabase } from './seed';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE_PATH = path.join(DATA_DIR, 'portfolio.json');
export const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');

function ensureDirectoriesSync(): void {
  if (!fsSync.existsSync(DATA_DIR)) {
    fsSync.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fsSync.existsSync(UPLOADS_DIR)) {
    fsSync.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
}

export function sanitizeSlug(raw: string): string {
  return raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function sanitizeFileName(rawName: string): string {
  const ext = path.extname(rawName).toLowerCase();
  const base = path
    .basename(rawName, path.extname(rawName))
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 32);

  return `${base || 'archivo'}${ext || ''}`;
}

export function detectMediaKind(mimeType: string, fileName: string): 'image' | 'pdf' | 'video' | 'document' {
  const lowerMime = (mimeType || '').toLowerCase();
  const ext = path.extname(fileName).toLowerCase();

  if (lowerMime.startsWith('image/') || ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'].includes(ext)) {
    return 'image';
  }
  if (lowerMime === 'application/pdf' || ext === '.pdf') {
    return 'pdf';
  }
  if (lowerMime.startsWith('video/') || ['.mp4', '.webm', '.mov', '.m4v'].includes(ext)) {
    return 'video';
  }
  return 'document';
}

export function inferMimeType(fileName: string, fallback = 'application/octet-stream'): string {
  const ext = path.extname(fileName).toLowerCase();
  const map: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.avif': 'image/avif',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.sql': 'text/plain; charset=utf-8',
    '.py': 'text/plain; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.md': 'text/markdown; charset=utf-8',
    '.json': 'application/json',
    '.zip': 'application/zip',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  };
  return map[ext] || fallback;
}

export async function getDatabase(): Promise<PortfolioDatabase> {
  ensureDirectoriesSync();

  try {
    const raw = await fs.readFile(DB_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    return portfolioDatabaseSchema.parse(parsed);
  } catch {
    const initial = createInitialSeedDatabase();
    await saveDatabase(initial);
    return initial;
  }
}

export async function saveDatabase(db: PortfolioDatabase): Promise<void> {
  ensureDirectoriesSync();
  db.lastUpdated = new Date().toISOString();
  const validated = portfolioDatabaseSchema.parse(db);
  const tempPath = `${DB_FILE_PATH}.${randomUUID()}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(validated, null, 2), 'utf-8');
  await fs.rename(tempPath, DB_FILE_PATH);
}

export async function getProfile(): Promise<ProfileData> {
  const db = await getDatabase();
  return db.profile;
}

export async function updateProfile(updates: Partial<ProfileData>): Promise<ProfileData> {
  const db = await getDatabase();
  db.profile = {
    ...db.profile,
    ...updates,
  };
  await saveDatabase(db);
  return db.profile;
}

export async function saveProfileCv(buffer: Buffer, originalName: string): Promise<ProfileData['cvDocument']> {
  const db = await getDatabase();
  const profileDir = path.join(UPLOADS_DIR, 'profile');
  await fs.mkdir(profileDir, { recursive: true });

  // Eliminar CV anterior si existía
  if (db.profile.cvDocument?.storedPath) {
    const oldAbs = resolveSafeUploadPath(db.profile.cvDocument.storedPath);
    if (oldAbs) {
      await fs.unlink(oldAbs).catch(() => {});
    }
  }

  const cleanName = sanitizeFileName(originalName || 'CV_Emmanuel_Baltazar_Lopez.pdf');
  const uniqueName = `${Date.now()}-${cleanName}`;
  const storedPath = `profile/${uniqueName}`;
  const absTarget = path.join(profileDir, uniqueName);

  await fs.writeFile(absTarget, buffer);

  const cvDoc = {
    fileName: originalName || cleanName,
    storedPath,
    url: `/api/uploads/${storedPath}`,
    fileSize: buffer.byteLength,
    uploadedAt: new Date().toISOString(),
  };

  db.profile.cvDocument = cvDoc;
  await saveDatabase(db);
  return cvDoc;
}

export async function deleteProfileCv(): Promise<void> {
  const db = await getDatabase();
  if (db.profile.cvDocument?.storedPath) {
    const oldAbs = resolveSafeUploadPath(db.profile.cvDocument.storedPath);
    if (oldAbs) {
      await fs.unlink(oldAbs).catch(() => {});
    }
  }
  db.profile.cvDocument = null;
  await saveDatabase(db);
}

export async function getAllEntries(includeDrafts = false): Promise<PortfolioEntry[]> {
  const db = await getDatabase();
  const filtered = includeDrafts ? db.entries : db.entries.filter((e) => !e.draft);
  return filtered.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export async function getEntriesBySection(section: SectionKey, includeDrafts = false): Promise<PortfolioEntry[]> {
  const all = await getAllEntries(includeDrafts);
  return all.filter((e) => e.section === section);
}

export async function getEntry(
  section: SectionKey,
  slug: string,
  includeDrafts = false
): Promise<PortfolioEntry | null> {
  const db = await getDatabase();
  const found = db.entries.find((e) => e.section === section && e.slug === slug);
  if (!found) return null;
  if (!includeDrafts && found.draft) return null;
  return found;
}

export async function upsertEntry(
  entryData: Omit<PortfolioEntry, 'evidences' | 'evidenceSlots'> & {
    evidences?: UploadedEvidence[];
    evidenceSlots?: EvidenceSlot[];
    originalSlug?: string;
  }
): Promise<PortfolioEntry> {
  const db = await getDatabase();
  const cleanSlug = sanitizeSlug(entryData.slug || entryData.title);

  const lookupSlug = entryData.originalSlug || cleanSlug;
  const existingIndex = db.entries.findIndex(
    (e) => e.section === entryData.section && e.slug === lookupSlug
  );

  const existing = existingIndex >= 0 ? db.entries[existingIndex] : undefined;

  const merged = portfolioEntrySchema.parse({
    ...entryData,
    slug: cleanSlug,
    updatedDate: new Date().toISOString().slice(0, 10),
    evidenceSlots: entryData.evidenceSlots ?? existing?.evidenceSlots ?? [],
    evidences: entryData.evidences ?? existing?.evidences ?? [],
  });

  if (existingIndex >= 0) {
    db.entries[existingIndex] = merged;
  } else {
    // Evitar colisión de slug en la misma sección
    const collision = db.entries.some((e) => e.section === merged.section && e.slug === merged.slug);
    if (collision) {
      merged.slug = `${merged.slug}-${Date.now().toString().slice(-4)}`;
    }
    db.entries.push(merged);
  }

  await saveDatabase(db);
  return merged;
}

export async function deleteEntry(section: SectionKey, slug: string): Promise<boolean> {
  const db = await getDatabase();
  const idx = db.entries.findIndex((e) => e.section === section && e.slug === slug);
  if (idx < 0) return false;

  const entry = db.entries[idx];
  for (const ev of entry.evidences) {
    const abs = resolveSafeUploadPath(ev.storedPath);
    if (abs) {
      await fs.unlink(abs).catch(() => {});
    }
  }

  db.entries.splice(idx, 1);
  await saveDatabase(db);
  return true;
}

export async function addEvidenceSlotToEntry(
  section: SectionKey,
  slug: string,
  slotInput: Omit<EvidenceSlot, 'slotId'> & { slotId?: string }
): Promise<EvidenceSlot | null> {
  const db = await getDatabase();
  const entry = db.entries.find((e) => e.section === section && e.slug === slug);
  if (!entry) return null;

  const slot = evidenceSlotSchema.parse({
    ...slotInput,
    slotId: slotInput.slotId ? sanitizeSlug(slotInput.slotId) : `slot-${Date.now().toString(36)}`,
  });

  entry.evidenceSlots.push(slot);
  await saveDatabase(db);
  return slot;
}

export async function removeEvidenceSlotFromEntry(
  section: SectionKey,
  slug: string,
  slotId: string
): Promise<boolean> {
  const db = await getDatabase();
  const entry = db.entries.find((e) => e.section === section && e.slug === slug);
  if (!entry) return false;

  entry.evidenceSlots = entry.evidenceSlots.filter((s) => s.slotId !== slotId);
  // Si había evidencia asociada al slot, conserva la evidencia como general (desvinculando slotId)
  entry.evidences = entry.evidences.map((ev) => (ev.slotId === slotId ? { ...ev, slotId: undefined } : ev));
  await saveDatabase(db);
  return true;
}

export interface SaveEvidenceParams {
  section: SectionKey;
  slug: string;
  slotId?: string;
  title: string;
  alt: string;
  caption: string;
  category: EvidenceCategory;
  isCover?: boolean;
  buffer: Buffer;
  originalName: string;
  mimeType: string;
}

export async function saveEvidenceFile(params: SaveEvidenceParams): Promise<UploadedEvidence> {
  const db = await getDatabase();
  const entry = db.entries.find((e) => e.section === params.section && e.slug === params.slug);
  if (!entry) {
    throw new Error(`No se encontró la entrada ${params.section}/${params.slug}`);
  }

  const targetDir = path.join(UPLOADS_DIR, params.section, params.slug);
  await fs.mkdir(targetDir, { recursive: true });

  const cleanFile = sanitizeFileName(params.originalName);
  const uniqueFile = `${Date.now()}-${cleanFile}`;
  const storedPath = `${params.section}/${params.slug}/${uniqueFile}`;
  const absFile = path.join(targetDir, uniqueFile);

  await fs.writeFile(absFile, params.buffer);

  // Si se sube a un slot que ya tenía archivo previo, reemplazamos limpiando el anterior en disco
  if (params.slotId) {
    const prevIdx = entry.evidences.findIndex((ev) => ev.slotId === params.slotId);
    if (prevIdx >= 0) {
      const prev = entry.evidences[prevIdx];
      const prevAbs = resolveSafeUploadPath(prev.storedPath);
      if (prevAbs) {
        await fs.unlink(prevAbs).catch(() => {});
      }
      entry.evidences.splice(prevIdx, 1);
    }
  }

  const effectiveMime = inferMimeType(cleanFile, params.mimeType);
  const mediaKind = detectMediaKind(effectiveMime, cleanFile);

  const shouldBeCover =
    Boolean(params.isCover) ||
    (mediaKind === 'image' && !entry.evidences.some((ev) => ev.isCover && ev.mediaKind === 'image'));

  if (shouldBeCover) {
    entry.evidences = entry.evidences.map((ev) => ({ ...ev, isCover: false }));
  }

  const created: UploadedEvidence = {
    id: `ev-${randomUUID().slice(0, 8)}`,
    slotId: params.slotId || undefined,
    title: params.title.trim() || cleanFile,
    fileName: params.originalName || cleanFile,
    storedPath,
    url: `/api/uploads/${storedPath}`,
    mimeType: effectiveMime,
    mediaKind,
    fileSize: params.buffer.byteLength,
    alt: params.alt.trim(),
    caption: params.caption.trim(),
    category: params.category,
    isCover: shouldBeCover,
    uploadedAt: new Date().toISOString(),
  };

  entry.evidences.push(created);
  entry.updatedDate = new Date().toISOString().slice(0, 10);
  await saveDatabase(db);
  return created;
}

export async function updateEvidenceMetadata(
  section: SectionKey,
  slug: string,
  evidenceId: string,
  updates: {
    title?: string;
    alt?: string;
    caption?: string;
    category?: EvidenceCategory;
    isCover?: boolean;
  }
): Promise<UploadedEvidence | null> {
  const db = await getDatabase();
  const entry = db.entries.find((e) => e.section === section && e.slug === slug);
  if (!entry) return null;

  const ev = entry.evidences.find((item) => item.id === evidenceId);
  if (!ev) return null;

  if (updates.isCover) {
    entry.evidences.forEach((item) => {
      item.isCover = false;
    });
    ev.isCover = true;
  } else if (updates.isCover === false) {
    ev.isCover = false;
  }

  if (updates.title && updates.title.trim().length >= 2) ev.title = updates.title.trim();
  if (updates.alt && updates.alt.trim().length >= 5) ev.alt = updates.alt.trim();
  if (updates.caption && updates.caption.trim().length >= 5) ev.caption = updates.caption.trim();
  if (updates.category) ev.category = updates.category;

  await saveDatabase(db);
  return ev;
}

export async function deleteEvidenceFile(
  section: SectionKey,
  slug: string,
  evidenceId: string
): Promise<boolean> {
  const db = await getDatabase();
  const entry = db.entries.find((e) => e.section === section && e.slug === slug);
  if (!entry) return false;

  const idx = entry.evidences.findIndex((item) => item.id === evidenceId);
  if (idx < 0) return false;

  const [removed] = entry.evidences.splice(idx, 1);
  const abs = resolveSafeUploadPath(removed.storedPath);
  if (abs) {
    await fs.unlink(abs).catch(() => {});
  }

  // Si borramos la portada, asignamos otra imagen disponible como portada automáticamente
  if (removed.isCover) {
    const firstImg = entry.evidences.find((item) => item.mediaKind === 'image');
    if (firstImg) firstImg.isCover = true;
  }

  await saveDatabase(db);
  return true;
}

export function resolveSafeUploadPath(relativeStoredPath: string): string | null {
  ensureDirectoriesSync();
  const normalized = relativeStoredPath.replace(/\\/g, '/').replace(/^\/+/, '');
  const resolved = path.resolve(UPLOADS_DIR, normalized);
  const uploadsRootWithSep = UPLOADS_DIR.endsWith(path.sep) ? UPLOADS_DIR : `${UPLOADS_DIR}${path.sep}`;
  if (!resolved.startsWith(uploadsRootWithSep)) {
    return null;
  }
  return resolved;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
