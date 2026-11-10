import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../server/auth';
import { getDatabase } from '../../server/db';

export const GET: APIRoute = async ({ cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = await getDatabase();
  const stamp = new Date().toISOString().slice(0, 10);
  return new Response(JSON.stringify(db, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': `attachment; filename="portafolio-ebl-backup-${stamp}.json"`,
    },
  });
};
