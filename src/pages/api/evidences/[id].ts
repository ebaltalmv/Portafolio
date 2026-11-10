import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../../server/auth';
import { updateEvidenceMetadata, deleteEvidenceFile } from '../../../server/db';
import { SECTION_KEYS, EVIDENCE_CATEGORIES, type SectionKey, type EvidenceCategory } from '../../../server/schemas';

export const PATCH: APIRoute = async ({ params, request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const evidenceId = params.id || '';
    const body = await request.json();
    const section = String(body.section || '') as SectionKey;
    const slug = String(body.slug || '');

    if (!SECTION_KEYS.includes(section) || !slug || !evidenceId) {
      return new Response(JSON.stringify({ ok: false, error: 'Parámetros incompletos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const category = EVIDENCE_CATEGORIES.includes(body.category as EvidenceCategory)
      ? (body.category as EvidenceCategory)
      : undefined;

    const updated = await updateEvidenceMetadata(section, slug, evidenceId, {
      title: body.title,
      alt: body.alt,
      caption: body.caption,
      category,
      isCover: typeof body.isCover === 'boolean' ? body.isCover : undefined,
    });

    if (!updated) {
      return new Response(JSON.stringify({ ok: false, error: 'Evidencia no encontrada.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true, evidence: updated }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al actualizar evidencia.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const DELETE: APIRoute = async ({ params, request, url, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const evidenceId = params.id || '';
    let section = (url.searchParams.get('section') || '') as SectionKey;
    let slug = url.searchParams.get('slug') || '';

    if (!section || !slug) {
      const body = await request.json().catch(() => ({}));
      section = body.section || section;
      slug = body.slug || slug;
    }

    if (!SECTION_KEYS.includes(section) || !slug || !evidenceId) {
      return new Response(JSON.stringify({ ok: false, error: 'Parámetros inválidos.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const removed = await deleteEvidenceFile(section, slug, evidenceId);
    return new Response(JSON.stringify({ ok: removed }), {
      status: removed ? 200 : 404,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error al eliminar evidencia.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
