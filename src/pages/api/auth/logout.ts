import type { APIRoute } from 'astro';
import { SESSION_COOKIE_NAME, VIEW_MODE_COOKIE_NAME } from '../../../server/auth';

export const POST: APIRoute = async ({ cookies }) => {
  cookies.delete(SESSION_COOKIE_NAME, { path: '/' });
  cookies.delete(VIEW_MODE_COOKIE_NAME, { path: '/' });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
