import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../../server/auth';
import { saveEvidenceFile } from '../../../server/db';
import { SECTION_KEYS, EVIDENCE_CATEGORIES, type SectionKey, type EvidenceCategory } from '../../../server/schemas';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'Sesión de administrador requerida.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const form = await request.formData();
    const sectionRaw = String(form.get('section') || '');
    const slug = String(form.get('slug') || '').trim();
    const slotId = String(form.get('slotId') || '').trim() || undefined;
    const title = String(form.get('title') || '').trim();
    const alt = String(form.get('alt') || '').trim();
    const caption = String(form.get('caption') || '').trim();
    const categoryRaw = String(form.get('category') || 'ui-screenshot');
    const isCover = form.get('isCover') === 'true' || form.get('isCover') === 'on';
    const file = form.get('file');

    if (!SECTION_KEYS.includes(sectionRaw as SectionKey) || !slug) {
      return new Response(JSON.stringify({ ok: false, error: 'Sección o slug inválido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!(file instanceof File) || file.size === 0) {
      return new Response(JSON.stringify({ ok: false, error: 'Selecciona un archivo válido para subir.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (alt.length < 5) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'El texto alternativo técnico (alt) debe tener al menos 5 caracteres descriptivos.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (caption.length < 5) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: 'El pie de foto (caption) debe describir qué demuestra la evidencia (mín. 5 caracteres).',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const category: EvidenceCategory = EVIDENCE_CATEGORIES.includes(categoryRaw as EvidenceCategory)
      ? (categoryRaw as EvidenceCategory)
      : 'ui-screenshot';

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const created = await saveEvidenceFile({
      section: sectionRaw as SectionKey,
      slug,
      slotId,
      title: title || file.name,
      alt,
      caption,
      category,
      isCover,
      buffer,
      originalName: file.name,
      mimeType: file.type || 'application/octet-stream',
    });

    return new Response(JSON.stringify({ ok: true, evidence: created }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al subir archivo.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
