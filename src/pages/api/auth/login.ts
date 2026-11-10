import type { APIRoute } from 'astro';
import {
  verifyPassword,
  createSessionToken,
  SESSION_COOKIE_NAME,
  VIEW_MODE_COOKIE_NAME,
} from '../../../server/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let password = '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      password = String(body.password || '');
    } else {
      const form = await request.formData();
      password = String(form.get('password') || '');
    }

    if (!verifyPassword(password)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Contraseña de administrador incorrecta.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const token = createSessionToken();
    const maxAge = 60 * 60 * 24 * 14; // 14 días

    cookies.set(SESSION_COOKIE_NAME, token, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      maxAge,
    });

    cookies.set(VIEW_MODE_COOKIE_NAME, 'editor', {
      path: '/',
      httpOnly: false,
      sameSite: 'lax',
      maxAge,
    });

    return new Response(JSON.stringify({ ok: true, viewMode: 'editor' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error interno' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
