import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../../server/auth';
import { getProfile, updateProfile } from '../../../server/db';

export const GET: APIRoute = async () => {
  const profile = await getProfile();
  return new Response(JSON.stringify({ ok: true, profile }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PUT: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const updated = await updateProfile(body);
    return new Response(JSON.stringify({ ok: true, profile: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al actualizar perfil.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
