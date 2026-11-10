import type { APIRoute } from 'astro';
import { requireAdminAuth, VIEW_MODE_COOKIE_NAME } from '../../../server/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => ({}));
  const mode = body.mode === 'visitor' ? 'visitor' : 'editor';

  cookies.set(VIEW_MODE_COOKIE_NAME, mode, {
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 14,
  });

  return new Response(JSON.stringify({ ok: true, mode }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
