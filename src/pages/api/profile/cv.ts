import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../../server/auth';
import { saveProfileCv, deleteProfileCv } from '../../../server/db';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const form = await request.formData();
    const file = form.get('file');

    if (!(file instanceof File) || file.size === 0) {
      return new Response(JSON.stringify({ ok: false, error: 'Selecciona un archivo PDF o documento válido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const cvDocument = await saveProfileCv(buffer, file.name);

    return new Response(JSON.stringify({ ok: true, cvDocument }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al subir CV.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const DELETE: APIRoute = async ({ cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  await deleteProfileCv();
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
