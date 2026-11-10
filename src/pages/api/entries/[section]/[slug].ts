import type { APIRoute } from 'astro';
import { requireAdminAuth, getViewerContext } from '../../../../server/auth';
import { getEntry, upsertEntry, deleteEntry } from '../../../../server/db';
import { SECTION_KEYS, type SectionKey } from '../../../../server/schemas';

export const GET: APIRoute = async ({ params, url, cookies }) => {
  const section = String(params.section || '') as SectionKey;
  const slug = String(params.slug || '');
  if (!SECTION_KEYS.includes(section) || !slug) {
    return new Response(JSON.stringify({ ok: false, error: 'Ruta inválida' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const viewer = getViewerContext(cookies, url);
  const entry = await getEntry(section, slug, viewer.isAuthenticated);
  if (!entry) {
    return new Response(JSON.stringify({ ok: false, error: 'Entrada no encontrada' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, entry }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PUT: APIRoute = async ({ params, request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const section = String(params.section || '') as SectionKey;
    const originalSlug = String(params.slug || '');
    const body = await request.json();
    const saved = await upsertEntry({
      ...body,
      section: body.section || section,
      originalSlug,
    });
    return new Response(JSON.stringify({ ok: true, entry: saved }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al actualizar.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const DELETE: APIRoute = async ({ params, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const section = String(params.section || '') as SectionKey;
  const slug = String(params.slug || '');
  if (!SECTION_KEYS.includes(section) || !slug) {
    return new Response(JSON.stringify({ ok: false, error: 'Parámetros inválidos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ok = await deleteEntry(section, slug);
  return new Response(JSON.stringify({ ok }), {
    status: ok ? 200 : 404,
    headers: { 'Content-Type': 'application/json' },
  });
};
