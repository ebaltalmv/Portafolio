import type { APIRoute } from 'astro';
import { requireAdminAuth, getViewerContext } from '../../../server/auth';
import { getAllEntries, getEntriesBySection, upsertEntry } from '../../../server/db';
import { SECTION_KEYS, type SectionKey } from '../../../server/schemas';

export const GET: APIRoute = async ({ url, cookies }) => {
  const viewer = getViewerContext(cookies, url);
  const sectionParam = url.searchParams.get('section');

  if (sectionParam && SECTION_KEYS.includes(sectionParam as SectionKey)) {
    const entries = await getEntriesBySection(sectionParam as SectionKey, viewer.isAuthenticated);
    return new Response(JSON.stringify({ ok: true, entries }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const entries = await getAllEntries(viewer.isAuthenticated);
  return new Response(JSON.stringify({ ok: true, entries }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const saved = await upsertEntry(body);
    return new Response(JSON.stringify({ ok: true, entry: saved }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al guardar entrada.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
