import { createHmac, timingSafeEqual } from 'node:crypto';
import type { AstroCookies } from 'astro';

export const SESSION_COOKIE_NAME = 'ebl_admin_session';
export const VIEW_MODE_COOKIE_NAME = 'ebl_view_mode';

export type ViewMode = 'editor' | 'visitor';

export interface ViewerContext {
  isAuthenticated: boolean;
  viewMode: ViewMode;
  isEditorView: boolean;
  isPublicStatic: boolean;
}

export function isPublicStaticMode(): boolean {
  return process.env.PUBLIC_READONLY_BUILD === 'true';
}

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || import.meta.env.ADMIN_PASSWORD || 'umad-ebl-2026';
}

function getSessionSecret(): string {
  return process.env.SESSION_SECRET || import.meta.env.SESSION_SECRET || 'portafolio-ebl-umad-secret-key-2026';
}

function signPayload(payload: string): string {
  return createHmac('sha256', getSessionSecret()).update(payload).digest('hex');
}

export function verifyPassword(inputPassword: string): boolean {
  const expected = getAdminPassword();
  const a = Buffer.from(inputPassword);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function createSessionToken(): string {
  const issuedAt = Date.now().toString();
  const payload = `admin.${issuedAt}`;
  const sig = signPayload(payload);
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [role, issuedAt, signature] = parts;
  if (role !== 'admin' || !issuedAt || !signature) return false;

  const expectedSig = signPayload(`${role}.${issuedAt}`);
  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSig);
  if (a.length !== b.length) return false;
  if (!timingSafeEqual(a, b)) return false;

  // Vigencia de 14 días
  const ageMs = Date.now() - Number(issuedAt);
  if (Number.isNaN(ageMs) || ageMs < 0 || ageMs > 14 * 24 * 60 * 60 * 1000) {
    return false;
  }
  return true;
}

export function getViewerContext(cookies: AstroCookies, url?: URL): ViewerContext {
  const isPublicStatic = isPublicStaticMode();
  if (isPublicStatic) {
    return {
      isAuthenticated: false,
      viewMode: 'visitor',
      isEditorView: false,
      isPublicStatic: true,
    };
  }

  const token = cookies.get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = verifySessionToken(token);

  if (!isAuthenticated) {
    return {
      isAuthenticated: false,
      viewMode: 'visitor',
      isEditorView: false,
      isPublicStatic: false,
    };
  }

  const queryView = url?.searchParams.get('view');
  const cookieView = cookies.get(VIEW_MODE_COOKIE_NAME)?.value;

  let viewMode: ViewMode = 'editor';
  if (queryView === 'visitor' || queryView === 'editor') {
    viewMode = queryView;
  } else if (cookieView === 'visitor' || cookieView === 'editor') {
    viewMode = cookieView;
  }

  return {
    isAuthenticated: true,
    viewMode,
    isEditorView: viewMode === 'editor',
    isPublicStatic: false,
  };
}

export function requireAdminAuth(cookies: AstroCookies): boolean {
  const token = cookies.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}
