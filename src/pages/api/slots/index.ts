import type { APIRoute } from 'astro';
import { requireAdminAuth } from '../../../server/auth';
import { addEvidenceSlotToEntry, removeEvidenceSlotFromEntry } from '../../../server/db';
import { SECTION_KEYS, EVIDENCE_CATEGORIES, type SectionKey, type EvidenceCategory } from '../../../server/schemas';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const section = String(body.section || '') as SectionKey;
    const slug = String(body.slug || '');
    const label = String(body.label || '').trim();

    if (!SECTION_KEYS.includes(section) || !slug || !label) {
      return new Response(JSON.stringify({ ok: false, error: 'Completa el nombre del nuevo espacio de evidencia.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const category: EvidenceCategory = EVIDENCE_CATEGORIES.includes(body.category)
      ? body.category
      : 'ui-screenshot';

    const slot = await addEvidenceSlotToEntry(section, slug, {
      label,
      expectedType: ['image', 'pdf', 'video', 'any'].includes(body.expectedType) ? body.expectedType : 'any',
      category,
      suggestedAlt: String(body.suggestedAlt || `${label} — ${slug}`),
      suggestedCaption: String(body.suggestedCaption || `Evidencia correspondiente a ${label}.`),
      required: Boolean(body.required),
    });

    return new Response(JSON.stringify({ ok: Boolean(slot), slot }), {
      status: slot ? 200 : 404,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Error creando slot.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
  if (!requireAdminAuth(cookies)) {
    return new Response(JSON.stringify({ ok: false, error: 'No autorizado' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json().catch(() => ({}));
  const section = String(body.section || '') as SectionKey;
  const slug = String(body.slug || '');
  const slotId = String(body.slotId || '');

  if (!SECTION_KEYS.includes(section) || !slug || !slotId) {
    return new Response(JSON.stringify({ ok: false, error: 'Datos inválidos' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const ok = await removeEvidenceSlotFromEntry(section, slug, slotId);
  return new Response(JSON.stringify({ ok }), {
    status: ok ? 200 : 404,
    headers: { 'Content-Type': 'application/json' },
  });
};
