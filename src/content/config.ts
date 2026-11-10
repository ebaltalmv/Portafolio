import { defineCollection, z, type SchemaContext } from 'astro:content';

/**
 * Sub-esquema reutilizable para evidencias gráficas.
 * Regla estricta: Toda imagen usa assets locales (../../assets/...) validados por Astro,
 * con texto alternativo técnico (alt) y descripción detallada en pie de foto (caption).
 */
const evidenceImageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z
      .string()
      .min(10, 'El atributo alt debe contener una descripción técnica clara de la evidencia.'),
    caption: z
      .string()
      .min(10, 'El pie de foto debe contextualizar qué demuestra la evidencia gráfica.'),
    category: z
      .enum([
        'architecture',
        'uml-diagram',
        'er-diagram',
        'ui-screenshot',
        'event-photo',
        'stand-photo',
        'credential',
        'official-document',
        'metrics-chart',
      ])
      .default('ui-screenshot'),
  });

/**
 * Sub-esquema para métricas cuantificables e indicadores de impacto/calidad.
 */
const metricSchema = z.object({
  label: z.string(),
  value: z.string(),
  unit: z.string().optional(),
  description: z.string().optional(),
});

/**
 * Sub-esquema para badges de stack tecnológico, marcos de trabajo y herramientas.
 */
const techItemSchema = z.object({
  name: z.string(),
  category: z.enum([
    'language',
    'framework',
    'database',
    'cloud-devops',
    'architecture',
    'methodology',
    'erp-enterprise',
    'testing-qa',
    'tool',
  ]),
  version: z.string().optional(),
});

/**
 * Sub-esquema para entregables técnicos y artefactos de ingeniería (SAD, UML, Repositorios, etc.).
 */
const deliverableSchema = z.object({
  title: z.string(),
  type: z.enum([
    'SAD-Architecture-Doc',
    'UML-Model',
    'Database-Model',
    'Source-Code',
    'Technical-Report',
    'Video-Demo',
    'Slide-Deck',
    'Live-Deployment',
    'Certification-PDF',
  ]),
  description: z.string(),
  url: z.string().url().optional(),
});

/**
 * Sub-esquema de enlaces externos comunes a cualquier entrada del portafolio.
 */
const externalLinksSchema = z
  .object({
    repositoryUrl: z.string().url().optional(),
    liveDemoUrl: z.string().url().optional(),
    documentationUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
  })
  .optional();

/**
 * Campos base compartidos para el sistema Bento Grid y metadatos de páginas de detalle.
 */
const baseBentoMetaSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    summary: z
      .string()
      .max(280, 'El resumen para la tarjeta del Bento Grid debe ser conciso (máx. 280 caracteres).'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    bentoSpan: z
      .enum(['col-span-1', 'col-span-2', 'col-span-3', 'row-span-2'])
      .default('col-span-1'),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    techStack: z.array(techItemSchema).default([]),
    coverImage: evidenceImageSchema({ image }).optional(),
    gallery: z.array(evidenceImageSchema({ image })).default([]),
    links: externalLinksSchema,
  });

/**
 * 1. PROYECTOS ACADÉMICOS (/academic-projects y /academic-projects/[...slug])
 * Basado en el rigor técnico de ingeniería de software (estándar UMAD: CMMI, UPEDU, 4+1 Vistas, UML, SAD).
 */
const academicProjectsCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      course: z.string(), // Ej. "Arquitectura y Calidad de Sistemas de Cómputo"
      semester: z.string(), // Ej. "7mo Semestre"
      academicPeriod: z.string(), // Ej. "Otoño 2026"
      professor: z.string().optional(),
      problemStatement: z.string(),
      architecture: z.object({
        pattern: z.string(), // Ej. "Cliente-Servidor / Capas / Microservicios / MVC"
        views4Plus1: z
          .object({
            logical: z.string().optional(),
            process: z.string().optional(),
            development: z.string().optional(),
            physical: z.string().optional(),
            scenarios: z.string().optional(),
          })
          .optional(),
        summary: z.string(),
      }),
      role: z.string(),
      teamSize: z.number().int().positive().default(1),
      methodology: z.array(z.string()), // Ej. ["UPEDU", "CMMI", "IDEAL", "Scrum", "UML"]
      deliverables: z.array(deliverableSchema).default([]),
      metrics: z.array(metricSchema).default([]),
    }),
});

/**
 * 2. HACKATONES (/hackathons y /hackathons/[...slug])
 */
const hackathonsCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      eventName: z.string(),
      organizer: z.string(),
      location: z.string(),
      modality: z.enum(['Presencial', 'Remoto', 'Híbrido']),
      durationHours: z.number().positive(), // Ej. 24, 48, 54
      eventDate: z.string(),
      challengeTrack: z.string(),
      problemAddressed: z.string(),
      teamName: z.string().optional(),
      teamSize: z.number().int().positive(),
      role: z.string(),
      achievement: z.string(), // Ej. "1er Lugar", "Finalista", "Mención Honorífica"
      metrics: z.array(metricSchema).default([]),
      deliverables: z.array(deliverableSchema).default([]),
    }),
});

/**
 * 3. PROYECTOS NACIONALES E INTERNACIONALES (/collaborations y /collaborations/[...slug])
 */
const collaborationsCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      scope: z.enum(['Nacional', 'Internacional', 'Binacional', 'Multi-institucional']),
      partnerEntities: z.array(
        z.object({
          name: z.string(),
          country: z.string(),
          entityType: z.enum(['Universidad', 'Empresa', 'Gobierno', 'ONG', 'Centro de Investigación']),
        })
      ),
      period: z.string(),
      role: z.string(),
      impactGenerated: z.string(),
      metrics: z.array(metricSchema).default([]),
      deliverables: z.array(deliverableSchema).default([]),
    }),
});

/**
 * 4. EXPO-INGENIERÍAS (/expos y /expos/[...slug])
 */
const exposCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      edition: z.string(), // Ej. "Expo-Ingenierías UMAD"
      academicPeriod: z.string(),
      category: z.string(),
      prototypeName: z.string(),
      associatedCourse: z.string().optional(),
      role: z.string(),
      teamSize: z.number().int().positive().default(1),
      juryFeedbackSummary: z.string().optional(),
      accreditationOrAward: z.string(),
      standIdentifier: z.string().optional(),
      metrics: z.array(metricSchema).default([]),
      deliverables: z.array(deliverableSchema).default([]),
    }),
});

/**
 * 5. PROYECTOS PERSONALES (/personal-projects y /personal-projects/[...slug])
 */
const personalProjectsCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      projectType: z.enum([
        'Web-Application',
        'CLI-Tool',
        'Automation-Workflow',
        'API-Backend',
        'Mobile-App',
        'Open-Source-Library',
        'DevOps-Infrastructure',
      ]),
      status: z.enum(['En Producción', 'Mantenimiento Activo', 'MVP Funcional', 'En Desarrollo', 'Archivado']),
      architecturePattern: z.string(),
      problemSolved: z.string(),
      metrics: z.array(metricSchema).default([]),
    }),
});

/**
 * 6. CERTIFICACIÓN SAP Y CREDENCIALES (/certifications y /certifications/[...slug])
 */
const certificationsCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      credentialTitle: z.string(),
      issuer: z.string(), // Ej. "SAP" / "SAP University Alliances"
      credentialId: z.string().optional(),
      verificationUrl: z.string().url().optional(),
      issueDate: z.string(),
      expirationDate: z.string().optional(),
      modulesLearned: z.array(
        z.object({
          code: z.string().optional(), // Ej. "MM", "SD", "FI", "ABAP", "S/4HANA"
          name: z.string(),
          description: z.string(),
        })
      ),
      businessProcessApplications: z.array(z.string()),
    }),
});

/**
 * 7. SERVICIO SOCIAL (/community-service y /community-service/[...slug])
 */
const communityServiceCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      receivingInstitution: z.string(),
      departmentOrArea: z.string().optional(),
      period: z.string(),
      totalHours: z.number().int().positive(),
      role: z.string(),
      socialImpact: z.string(),
      technicalImpact: z.string(),
      keyActivities: z.array(z.string()),
      metrics: z.array(metricSchema).default([]),
      deliverables: z.array(deliverableSchema).default([]),
    }),
});

/**
 * 8. MÓDULO OPCIONAL RECOMENDADO: ARTÍCULOS TÉCNICOS, ADRs E INVESTIGACIÓN (/articles y /articles/[...slug])
 * Permite documentar Architecture Decision Records (ADRs), ensayos de calidad de software y notas de investigación.
 */
const articlesCollection = defineCollection({
  type: 'content',
  schema: (ctx) =>
    baseBentoMetaSchema(ctx).extend({
      category: z.enum([
        'Architecture-Decision-Record',
        'Software-Quality-ISO',
        'Technical-Deep-Dive',
        'Case-Study',
        'Open-Source-Contribution',
      ]),
      readingTimeMinutes: z.number().int().positive().optional(),
      relatedProjectSlug: z.string().optional(),
    }),
});

export const collections = {
  'academic-projects': academicProjectsCollection,
  hackathons: hackathonsCollection,
  collaborations: collaborationsCollection,
  expos: exposCollection,
  'personal-projects': personalProjectsCollection,
  certifications: certificationsCollection,
  'community-service': communityServiceCollection,
  articles: articlesCollection,
};
