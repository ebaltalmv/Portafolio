import { z } from 'zod';

export const SECTION_KEYS = [
  'academic-projects',
  'hackathons',
  'collaborations',
  'expos',
  'personal-projects',
  'certifications',
  'community-service',
  'articles',
] as const;

export type SectionKey = (typeof SECTION_KEYS)[number];

export const EVIDENCE_CATEGORIES = [
  'architecture',
  'uml-diagram',
  'er-diagram',
  'ui-screenshot',
  'event-photo',
  'stand-photo',
  'credential',
  'official-document',
  'metrics-chart',
  'video-demo',
  'deliverable-file',
] as const;

export type EvidenceCategory = (typeof EVIDENCE_CATEGORIES)[number];

export const EVIDENCE_CATEGORY_LABELS: Record<EvidenceCategory, string> = {
  architecture: 'Arquitectura de Sistema',
  'uml-diagram': 'Diagrama UML / BPMN',
  'er-diagram': 'Modelo Entidad-Relación / BD',
  'ui-screenshot': 'Captura de Interfaz (UI)',
  'event-photo': 'Fotografía de Evento / Equipo',
  'stand-photo': 'Stand / Prototipo Físico',
  credential: 'Credencial / Certificado Oficial',
  'official-document': 'Documento Técnico / Tesina PDF',
  'metrics-chart': 'Métricas / Pruebas de Rendimiento',
  'video-demo': 'Video Demostrativo',
  'deliverable-file': 'Entregable / Script / Código',
};

export const TECH_CATEGORIES = [
  'language',
  'framework',
  'database',
  'cloud-devops',
  'architecture',
  'methodology',
  'erp-enterprise',
  'testing-qa',
  'tool',
] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];

export const metricSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  unit: z.string().optional().default(''),
  description: z.string().optional().default(''),
});

export const techItemSchema = z.object({
  name: z.string().min(1),
  category: z.enum(TECH_CATEGORIES).default('tool'),
  version: z.string().optional().default(''),
});

export const deliverableSchema = z.object({
  title: z.string().min(1),
  type: z
    .enum([
      'SAD-Architecture-Doc',
      'UML-Model',
      'Database-Model',
      'Source-Code',
      'Technical-Report',
      'Video-Demo',
      'Slide-Deck',
      'Live-Deployment',
      'Certification-PDF',
    ])
    .default('Technical-Report'),
  description: z.string().default(''),
  url: z.string().optional().default(''),
});

export const externalLinksSchema = z
  .object({
    repositoryUrl: z.string().optional().default(''),
    liveDemoUrl: z.string().optional().default(''),
    documentationUrl: z.string().optional().default(''),
    videoUrl: z.string().optional().default(''),
  })
  .default({});

export const evidenceSlotSchema = z.object({
  slotId: z.string().min(1),
  label: z.string().min(1),
  expectedType: z.enum(['image', 'pdf', 'video', 'any']).default('any'),
  category: z.enum(EVIDENCE_CATEGORIES).default('ui-screenshot'),
  suggestedAlt: z.string().default(''),
  suggestedCaption: z.string().default(''),
  required: z.boolean().default(false),
});

export const uploadedEvidenceSchema = z.object({
  id: z.string().min(1),
  slotId: z.string().optional(),
  title: z.string().min(1),
  fileName: z.string().min(1),
  storedPath: z.string().min(1),
  url: z.string().min(1),
  mimeType: z.string().min(1),
  mediaKind: z.enum(['image', 'pdf', 'video', 'document']),
  fileSize: z.number().nonnegative(),
  alt: z.string().min(5, 'El texto alternativo técnico (alt) debe describir con claridad la evidencia.'),
  caption: z.string().min(5, 'El pie de foto (caption) debe contextualizar la evidencia mostrada.'),
  category: z.enum(EVIDENCE_CATEGORIES).default('ui-screenshot'),
  isCover: z.boolean().default(false),
  uploadedAt: z.string(),
});

export const views4Plus1Schema = z
  .object({
    logical: z.string().optional().default(''),
    process: z.string().optional().default(''),
    development: z.string().optional().default(''),
    physical: z.string().optional().default(''),
    scenarios: z.string().optional().default(''),
  })
  .default({});

export const entryDetailsSchema = z
  .object({
    // Proyectos Académicos
    course: z.string().optional().default(''),
    semester: z.string().optional().default(''),
    academicPeriod: z.string().optional().default(''),
    professor: z.string().optional().default(''),
    problemStatement: z.string().optional().default(''),
    architecturePattern: z.string().optional().default(''),
    architectureSummary: z.string().optional().default(''),
    views4Plus1: views4Plus1Schema.optional(),
    role: z.string().optional().default(''),
    teamSize: z.number().int().positive().optional().default(1),
    teamMembers: z.array(z.string()).optional().default([]),
    methodology: z.array(z.string()).optional().default([]),

    // Hackatones
    eventName: z.string().optional().default(''),
    organizer: z.string().optional().default(''),
    location: z.string().optional().default(''),
    modality: z.string().optional().default('Presencial'),
    durationHours: z.number().optional(),
    eventDate: z.string().optional().default(''),
    challengeTrack: z.string().optional().default(''),
    teamName: z.string().optional().default(''),
    achievement: z.string().optional().default(''),

    // Colaboraciones Nacionales / Internacionales
    scope: z.string().optional().default('Nacional'),
    partnerEntities: z
      .array(
        z.object({
          name: z.string(),
          country: z.string(),
          entityType: z.string(),
        })
      )
      .optional()
      .default([]),
    impactGenerated: z.string().optional().default(''),

    // Expo-Ingenierías
    edition: z.string().optional().default(''),
    category: z.string().optional().default(''),
    prototypeName: z.string().optional().default(''),
    juryFeedbackSummary: z.string().optional().default(''),
    accreditationOrAward: z.string().optional().default(''),
    standIdentifier: z.string().optional().default(''),

    // Proyectos Personales
    projectType: z.string().optional().default('Web-Application'),
    status: z.string().optional().default('MVP Funcional'),

    // Certificaciones (SAP, AWS, Cisco, etc.)
    credentialTitle: z.string().optional().default(''),
    issuer: z.string().optional().default(''),
    credentialId: z.string().optional().default(''),
    verificationUrl: z.string().optional().default(''),
    issueDate: z.string().optional().default(''),
    expirationDate: z.string().optional().default(''),
    modulesLearned: z
      .array(
        z.object({
          code: z.string().optional().default(''),
          name: z.string(),
          description: z.string(),
        })
      )
      .optional()
      .default([]),
    businessProcessApplications: z.array(z.string()).optional().default([]),

    // Servicio Social
    receivingInstitution: z.string().optional().default(''),
    departmentOrArea: z.string().optional().default(''),
    period: z.string().optional().default(''),
    totalHours: z.number().optional(),
    socialImpact: z.string().optional().default(''),
    technicalImpact: z.string().optional().default(''),
    keyActivities: z.array(z.string()).optional().default([]),

    // Artículos Técnicos / ADRs
    articleCategory: z.string().optional().default('Architecture-Decision-Record'),
    readingTimeMinutes: z.number().optional(),
    relatedProjectSlug: z.string().optional().default(''),
  })
  .default({});

export const portfolioEntrySchema = z.object({
  slug: z.string().min(2),
  section: z.enum(SECTION_KEYS),
  title: z.string().min(2),
  subtitle: z.string().optional().default(''),
  summary: z.string().min(10),
  publishDate: z.string(),
  updatedDate: z.string().optional(),
  featured: z.boolean().default(false),
  bentoSpan: z.enum(['col-span-1', 'col-span-2', 'col-span-3']).default('col-span-1'),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  techStack: z.array(techItemSchema).default([]),
  metrics: z.array(metricSchema).default([]),
  deliverables: z.array(deliverableSchema).default([]),
  links: externalLinksSchema,
  details: entryDetailsSchema,
  markdownBody: z.string().default(''),
  evidenceSlots: z.array(evidenceSlotSchema).default([]),
  evidences: z.array(uploadedEvidenceSchema).default([]),
});

export const profileSchema = z.object({
  fullName: z.string(),
  shortCode: z.string(),
  headline: z.string(),
  degree: z.string(),
  university: z.string(),
  studentId: z.string(),
  currentSemester: z.string(),
  gpa: z.string(),
  honorAward: z.string(),
  location: z.string(),
  email: z.string(),
  phone: z.string(),
  bio: z.string(),
  githubUrl: z.string(),
  linkedinUrl: z.string(),
  cvDocument: z
    .object({
      fileName: z.string(),
      storedPath: z.string(),
      url: z.string(),
      fileSize: z.number(),
      uploadedAt: z.string(),
    })
    .nullable()
    .default(null),
  avatarImage: z
    .object({
      fileName: z.string(),
      storedPath: z.string(),
      url: z.string(),
      alt: z.string(),
      uploadedAt: z.string(),
    })
    .nullable()
    .default(null),
  domainAreas: z.array(
    z.object({
      code: z.string(),
      title: z.string(),
      description: z.string(),
      highlights: z.array(z.string()),
    })
  ),
  experience: z.array(
    z.object({
      company: z.string(),
      role: z.string(),
      period: z.string(),
      modality: z.string(),
      highlights: z.array(z.string()),
      stack: z.array(z.string()),
    })
  ),
  education: z.array(
    z.object({
      institution: z.string(),
      program: z.string(),
      period: z.string(),
      achievement: z.string(),
    })
  ),
});

export const portfolioDatabaseSchema = z.object({
  version: z.number().default(1),
  lastUpdated: z.string(),
  profile: profileSchema,
  entries: z.array(portfolioEntrySchema),
});

export type MetricItem = z.infer<typeof metricSchema>;
export type TechItem = z.infer<typeof techItemSchema>;
export type DeliverableItem = z.infer<typeof deliverableSchema>;
export type EvidenceSlot = z.infer<typeof evidenceSlotSchema>;
export type UploadedEvidence = z.infer<typeof uploadedEvidenceSchema>;
export type PortfolioEntry = z.infer<typeof portfolioEntrySchema>;
export type ProfileData = z.infer<typeof profileSchema>;
export type PortfolioDatabase = z.infer<typeof portfolioDatabaseSchema>;

export interface SectionMetadata {
  key: SectionKey;
  code: string;
  title: string;
  shortTitle: string;
  route: string;
  subtitle: string;
  description: string;
  accentColor: 'cyan' | 'emerald' | 'amber' | 'indigo';
  emptyVisitorTitle: string;
  emptyVisitorDescription: string;
  emptyEditorHint: string;
}

export const SECTION_META: Record<SectionKey, SectionMetadata> = {
  'academic-projects': {
    key: 'academic-projects',
    code: 'SEC-01 // ACAD',
    title: 'Proyectos Académicos de Ingeniería',
    shortTitle: 'Académicos',
    route: '/academic-projects',
    subtitle: 'Rigor técnico UMAD: Arquitectura 4+1, UML, BPMN, Calidad de Software y Métricas',
    description:
      'Desglose de sistemas desarrollados durante la Licenciatura en Ingeniería de Software en la Universidad Madero (UMAD), documentando planteamiento del problema, arquitectura de software, metodologías formales (RAD, PSP/TSP, Scrum, UPEDU) y resultados verificables.',
    accentColor: 'cyan',
    emptyVisitorTitle: 'Sin proyectos académicos publicados aún',
    emptyVisitorDescription: 'Los registros técnicos de asignaturas se encuentran en preparación.',
    emptyEditorHint: 'Crea un nuevo proyecto académico o publica borradores existentes desde el Editor.',
  },
  hackathons: {
    key: 'hackathons',
    code: 'SEC-02 // HACK',
    title: 'Hackatones y Retos de Innovación',
    shortTitle: 'Hackatones',
    route: '/hackathons',
    subtitle: 'Resolución de retos tecnológicos en tiempo récord, prototipado intensivo y trabajo en equipo',
    description:
      'Participaciones en competencias de desarrollo e innovación tecnológica, detallando el track abordado, decisiones arquitectónicas bajo presión, stack implementado, logros obtenidos y evidencia fotográfica.',
    accentColor: 'amber',
    emptyVisitorTitle: 'Sección lista para documentar próximos Hackatones',
    emptyVisitorDescription:
      'Siguiendo el principio de integridad documental, esta sección mostrará únicamente eventos verificados con sus respectivas evidencias fotográficas y repositorios.',
    emptyEditorHint:
      'Haz clic en "+ Nueva Entrada en Hackatones" para registrar un evento real y subir fotografías del equipo, sede y prototipo.',
  },
  collaborations: {
    key: 'collaborations',
    code: 'SEC-03 // COLAB',
    title: 'Proyectos Nacionales e Internacionales',
    shortTitle: 'Colaboraciones',
    route: '/collaborations',
    subtitle: 'Iniciativas interinstitucionales, vinculación empresarial y colaboración multicultural (COIL / Industria)',
    description:
      'Proyectos desarrollados en alianza con empresas, universidades u organizaciones nacionales e internacionales, destacando alcance, impacto técnico y entregables validados.',
    accentColor: 'indigo',
    emptyVisitorTitle: 'Sin colaboraciones interinstitucionales publicadas aún',
    emptyVisitorDescription:
      'Espacio arquitectónico reservado para proyectos nacionales, COIL o vinculaciones con entidades externas verificadas.',
    emptyEditorHint:
      'Registra proyectos COIL, prácticas profesionales (ej. FastBank si deseas desglosarlo como caso de estudio público) o alianzas institucionales.',
  },
  expos: {
    key: 'expos',
    code: 'SEC-04 // EXPO',
    title: 'Expo-Ingenierías y Ferias Técnicas',
    shortTitle: 'Expo-Ingenierías',
    route: '/expos',
    subtitle: 'Presentación de prototipos funcionales, deliberación de jurado y demostraciones en vivo',
    description:
      'Prototipos de software e IoT exhibidos en congresos y ediciones de Expo-Ingenierías UMAD, documentando retroalimentación del jurado evaluador, acreditaciones y evidencia en stand.',
    accentColor: 'emerald',
    emptyVisitorTitle: 'Sin registros publicados en Expo-Ingenierías aún',
    emptyVisitorDescription:
      'Esta colección se actualizará con las participaciones acreditadas, fotografías de stand y evaluación del jurado.',
    emptyEditorHint:
      'Agrega tus participaciones en Expo-Ingenierías UMAD y sube las constancias, fotos del stand y video del prototipo.',
  },
  'personal-projects': {
    key: 'personal-projects',
    code: 'SEC-05 // LABS',
    title: 'Proyectos Personales y Automatizaciones',
    shortTitle: 'Personales',
    route: '/personal-projects',
    subtitle: 'Arquitecturas independientes, herramientas propias, APIs y experimentación cloud',
    description:
      'Desarrollos autónomos orientados a resolver problemáticas reales mediante automatización, servicios backend, herramientas CLI y despliegues modernos.',
    accentColor: 'cyan',
    emptyVisitorTitle: 'Laboratorio de proyectos personales en actualización',
    emptyVisitorDescription:
      'Próximamente se publicarán herramientas independientes con diagramas de arquitectura, métricas de rendimiento y repositorios públicos.',
    emptyEditorHint:
      'Registra aquí tus herramientas personales, bots, APIs o laboratorios independientes con sus capturas y diagramas.',
  },
  certifications: {
    key: 'certifications',
    code: 'SEC-06 // CERT-SAP',
    title: 'Certificación SAP y Credenciales Oficiales',
    shortTitle: 'Certificaciones & SAP',
    route: '/certifications',
    subtitle: 'Ecosistema empresarial SAP (S/4HANA, ABAP, Signavio, Crystal Reports), Cloud AWS e IoT',
    description:
      'Credenciales técnicas, formación especializada en procesos empresariales ERP con SAP (MM, SD, ABAP, BPMN 2.0 en Signavio y reportería ejecutiva) y certificaciones de industria en nube e IoT.',
    accentColor: 'amber',
    emptyVisitorTitle: 'Sin credenciales publicadas',
    emptyVisitorDescription: 'Las certificaciones verificadas se mostrarán en este apartado.',
    emptyEditorHint: 'Sube tus PDFs o insignias oficiales en cada credencial o añade nuevas certificaciones.',
  },
  'community-service': {
    key: 'community-service',
    code: 'SEC-07 // SERV',
    title: 'Servicio Social e Impacto Institucional',
    shortTitle: 'Servicio Social',
    route: '/community-service',
    subtitle: 'Retribución social, gestión documental y soporte administrativo-tecnológico en sector salud',
    description:
      'Documentación oficial, actividades clave e impacto generado durante la prestación del Servicio Social universitario de 480 horas.',
    accentColor: 'emerald',
    emptyVisitorTitle: 'Sin registros de Servicio Social publicados',
    emptyVisitorDescription: 'Información del Servicio Social en proceso de publicación.',
    emptyEditorHint: 'Sube tu Carta de Aceptación, reportes trimestrales y fotografías de evidencia.',
  },
  articles: {
    key: 'articles',
    code: 'SEC-08 // ADRs',
    title: 'Artículos Técnicos, ADRs y Calidad de Software',
    shortTitle: 'Artículos / ADRs',
    route: '/articles',
    subtitle: 'Architecture Decision Records, normas ISO/CMMI, patrones de diseño y notas de investigación',
    description:
      'Módulo editorial de ingeniería para publicar decisiones arquitectónicas (ADRs), análisis de calidad de sistemas y aprendizajes técnicos profundos.',
    accentColor: 'indigo',
    emptyVisitorTitle: 'Aún no hay artículos técnicos ni ADRs publicados',
    emptyVisitorDescription:
      'Espacio dedicado a notas técnicas sobre arquitectura de software, estándares CMMI/ISO y análisis de ingeniería.',
    emptyEditorHint:
      'Redacta tu primer Architecture Decision Record (ADR) o ensayo de Arquitectura y Calidad de Sistemas en Markdown.',
  },
};
