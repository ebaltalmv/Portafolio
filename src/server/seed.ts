import { portfolioDatabaseSchema, type PortfolioDatabase } from './schemas';
import { populateRealUmadEvidencesSync } from './umad-evidences';

export function createInitialSeedDatabase(): PortfolioDatabase {
  const now = new Date().toISOString();

  const db = portfolioDatabaseSchema.parse({
    version: 1,
    lastUpdated: now,
    profile: {
      fullName: 'Emmanuel Baltazar López',
      shortCode: 'EBL // ING-SW',
      headline: 'Ingeniería de Software · Arquitectura de Sistemas, Backend & Cloud Junior',
      degree: 'Licenciatura en Ingeniería de Software',
      university: 'Universidad Madero (UMAD) — Puebla, México',
      studentId: '20124558',
      currentSemester: '7mo Semestre (Otoño 2026)',
      gpa: '9.6 / 10.0',
      honorAward: 'Premio de Excelencia Académica "John Wesley"',
      location: 'Puebla, México',
      email: 'emma.balta09@gmail.com',
      phone: '+52 797 146 88 27',
      bio: 'Estudiante de 7mo semestre de Ingeniería de Software en la Universidad Madero (promedio acumulado 9.6, distinción John Wesley) con experiencia práctica en desarrollo Backend financiero en FastBank, diseño de arquitecturas cliente-servidor e IoT, bases de datos transaccionales SQL Server, integración de IA generativa y modelado de procesos empresariales bajo estándares BPMN 2.0, SAP ERP y marcos ágiles/disciplinados (Scrum, RAD, PSP/TSP).',
      githubUrl: 'https://github.com/ebaltalmv',
      linkedinUrl: 'https://www.linkedin.com/in/emmanuel-baltazar-lópez-431110398',
      cvDocument: null,
      avatarImage: null,
      domainAreas: [
        {
          code: 'DOM-01',
          title: 'Arquitectura Backend & APIs',
          description:
            'Diseño de servicios RESTful, lógica de negocio financiera, sesiones aisladas e integración de modelos LLM.',
          highlights: ['C# / .NET', 'Node.js & Express 5', 'Python & Flask', 'Google Gemini API'],
        },
        {
          code: 'DOM-02',
          title: 'Ingeniería y Calidad de Software',
          description:
            'Modelado arquitectónico 4+1 vistas, UML, BPMN 2.0, trazabilidad de requerimientos y control de calidad.',
          highlights: ['UML & 4+1 Kruchten', 'RAD / PSP / TSP', 'Scrum & Kanban', 'Azure DevOps & Git'],
        },
        {
          code: 'DOM-03',
          title: 'Datos, Cloud & Procesos ERP',
          description:
            'Modelado relacional normalizado, programación T-SQL, fundamentos AWS Cloud y procesos empresariales SAP.',
          highlights: ['SQL Server (T-SQL) & SQLite', 'SAP S/4HANA (MM/SD) & ABAP', 'SAP Signavio & Crystal Reports', 'AWS Cloud Foundations'],
        },
        {
          code: 'DOM-04',
          title: 'Móviles Multiplataforma & IoT',
          description:
            'Aplicaciones nativas multiplataforma bajo MVVM y telemetría física extremo a extremo con microcontroladores.',
          highlights: ['.NET MAUI & XAML (MVVM)', 'ESP32 & Arduino', 'Sensores Industriales', 'Web Speech API Multimodal'],
        },
      ],
      experience: [
        {
          company: 'FastBank',
          role: 'Desarrollador Backend Junior / Prácticas Profesionales',
          period: '2026',
          modality: 'Puebla / Remoto, México',
          highlights: [
            'Implementación de lógica de negocio backend para el cálculo y gestión de cotizaciones financieras dinámicas.',
            'Integración y consumo seguro de APIs internas siguiendo lineamientos de calidad y validación.',
            'Trabajo colaborativo bajo marco ágil Scrum gestionado en Microsoft Azure DevOps.',
            'Control de versiones, Pull Requests e integración continua mediante Visual Studio y Azure Repos.',
            'Elaboración de documentación técnica y ejecución de pruebas de validación funcional.',
          ],
          stack: ['C#', '.NET', 'REST APIs', 'Azure DevOps', 'Azure Repos', 'Visual Studio', 'Scrum'],
        },
      ],
      education: [
        {
          institution: 'Universidad Madero (UMAD)',
          program: 'Licenciatura en Ingeniería de Software',
          period: 'Agosto 2023 – En curso (7mo Semestre)',
          achievement: 'Promedio acumulado 9.6 — Premio de Excelencia Académica "John Wesley"',
        },
        {
          institution: 'CECyTE Puebla',
          program: 'Carrera Técnica en Programación',
          period: '2020 – 2023',
          achievement: 'Formación técnica en lógica algorítmica, programación estructurada/POO y bases de datos',
        },
      ],
    },
    entries: [
      // ========================================================================
      // 1. TUTOR VIRTUAL UMAD (TESINA 6TO SEMESTRE)
      // ========================================================================
      {
        slug: 'tutor-virtual-umad',
        section: 'academic-projects',
        title: 'Tutor Virtual UMAD — Plataforma Web Multimodal con IA Generativa',
        subtitle: 'Tesina de Ingeniería de Software · Arquitectura Cliente-Servidor + Google Gemini 2.5 + Avatar 2D con TTS',
        summary:
          'Aplicación web académica que brinda orientación curricular personalizada a estudiantes UMAD mediante sesiones aisladas con Google Gemini 2.5, síntesis de voz Web Speech API y persistencia SQLite.',
        publishDate: '2026-05-15',
        featured: true,
        bentoSpan: 'col-span-2',
        draft: false,
        tags: ['IA Generativa', 'Arquitectura 4 Capas', 'Node.js', 'Multimodal TTS', 'Tesina UMAD'],
        techStack: [
          { name: 'Node.js', category: 'framework' },
          { name: 'Express', category: 'framework', version: '5.2.1' },
          { name: 'Google Gemini 2.5 API', category: 'cloud-devops' },
          { name: 'SQLite3', category: 'database' },
          { name: 'JavaScript (ES6+)', category: 'language' },
          { name: 'Web Speech API', category: 'tool' },
          { name: 'RAD / PSP / TSP', category: 'methodology' },
          { name: 'Git & SemVer', category: 'tool' },
        ],
        metrics: [
          {
            label: 'Cumplimiento Requerimientos',
            value: '100%',
            description: '12/12 Requerimientos Funcionales y 5/5 No Funcionales validados.',
          },
          {
            label: 'Aprobación Estudiantil',
            value: '95.5%',
            description: 'Evaluación con 15 estudiantes de Ing. de Software en 120 consultas académicas.',
          },
          {
            label: 'Latencia Login / Historial',
            value: '120 / 85 ms',
            description: '99.8% y 99.9% de tasa de éxito transaccional en SQLite3.',
          },
          {
            label: 'Deuda Técnica al Cierre',
            value: '0 Bugs',
            description: '31/31 defectos resueltos a lo largo de 5 iteraciones disciplinadas.',
          },
          {
            label: 'Aporte Individual (Líder)',
            value: '85 hrs · 45 commits',
            description: '22/22 tareas completadas (39% del esfuerzo total del equipo).',
          },
        ],
        deliverables: [
          {
            title: 'Código Fuente y Control de Configuración (SCM)',
            type: 'Source-Code',
            description: 'Repositorio oficial con historial SemVer y Conventional Commits.',
            url: 'https://github.com/ebaltalmv/TutorVirtualUMAD',
          },
          {
            title: 'Documento de Tesina de Ingeniería de Software',
            type: 'Technical-Report',
            description: 'Memoria técnica completa con marco metodológico RAD/PSP/TSP, diagramas UML y pruebas.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: 'https://github.com/ebaltalmv/TutorVirtualUMAD',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Investigación de Proyecto (Tesina de Ingeniería de Software)',
          semester: '6to Semestre',
          academicPeriod: 'Primavera 2026 (Febrero – Mayo 2026)',
          professor: 'Mtro. Carlos Zapata Bretón',
          problemStatement:
            'Los estudiantes de Ingeniería de Software de la Universidad Madero enfrentan dificultades para resolver dudas académicas y de seriación curricular fuera del horario de asesoría presencial, utilizando herramientas genéricas no alineadas al plan de estudios institucional, lo que incrementa el riesgo de rezago y reprobación.',
          architecturePattern: 'Cliente-Servidor RESTful en 4 Capas con Orquestación Cognitiva LLM',
          architectureSummary:
            'Separación estricta en 4 capas: (1) Presentación Web con Avatar 2D reactivo sincronizado a eventos onstart/onend de Web Speech API; (2) Capa de Aplicación REST en Express 5.2.1 con aislamiento de sesiones en memoria (Map) e inyección dinámica de System Prompts por licenciatura; (3) Capa Cognitiva conectada a Google Gemini 2.5 mediante @google/generative-ai; y (4) Capa de Persistencia embebida en SQLite3 validando correos institucionales (@umad.edu.mx).',
          views4Plus1: {
            logical:
              'Entidades principales Usuarios y Chats relacionadas 1:N, controlador de sesiones conversacionales aisladas por usuario y adaptador de servicio Gemini con contexto curricular parametrizado.',
            process:
              'Flujo asíncrono no bloqueante: autenticación institucional -> recuperación de historial (85 ms prom.) -> inferencia contextual Gemini (1850 ms prom.) -> renderizado simultáneo de texto y síntesis vocal TTS (45 ms).',
            development:
              'Estructura modular Node.js/Express bajo control de configuración Git (SemVer + Conventional Commits), gestionando dependencias ligeras sin sobrecarga de frameworks pesados en cliente.',
            physical:
              'Servidor de aplicación Node.js con motor embebido SQLite3 transaccional y conexión HTTPS saliente hacia el endpoint oficial de Google Generative AI.',
            scenarios:
              '12 requerimientos funcionales verificados: registro con dominio @umad.edu.mx, inicio de sesión, selección contextual por carrera, consulta multimodal hablada, persistencia y recuperación de historial.',
          },
          role: 'Líder de Desarrollo — Arquitectura Backend, Integración API Gemini 2.5 y Base de Datos',
          teamSize: 3,
          teamMembers: [
            'Emmanuel Baltazar López (Líder Backend & Arquitectura)',
            'Oscar Juárez Ortiz',
            'Pedro Emiliano Romero Osorio',
          ],
          methodology: ['RAD (Rapid Application Development)', 'PSP', 'TSP', 'SCM con Git', 'SemVer', 'Conventional Commits'],
        },
        markdownBody: `### Rigor de Ingeniería y Aseguramiento de Calidad

El proyecto se ejecutó combinando la velocidad iterativa de **RAD** con la disciplina métrica de **Personal Software Process (PSP)** y **Team Software Process (TSP)**:

- **Gestión de Sesiones y Prompt Engineering Curricular:** Se diseñó un gestor en \`Express 5.2.1\` que aísla el contexto conversacional de cada alumno mediante estructuras \`Map\` indexadas y construye *System Prompts* específicos para restringir alucinaciones fuera del ámbito académico UMAD.
- **Experiencia Multimodal Accesible:** Sincronización de estados visuales de un Avatar 2D en el cliente escuchando los callbacks nativos \`onstart\` y \`onend\` de \`window.speechSynthesis\`, logrando una latencia de arranque de voz promedio de **45 ms** con **100%** de disponibilidad en navegadores compatibles.
- **Control de Defectos en 5 Fases:** Durante las 5 iteraciones de construcción y pruebas se detectaron, documentaron y corrigieron **31 defectos**, cerrando la entrega con **0 deuda técnica** y **95.5% de aceptación** en pruebas con usuarios reales de Ingeniería de Software.`,
        evidenceSlots: [
          {
            slotId: 'arq-tutor-virtual',
            label: 'Diagrama de Arquitectura de 4 Capas (ArqTutorVirtual)',
            expectedType: 'image',
            category: 'architecture',
            suggestedAlt:
              'Diagrama de arquitectura Cliente-Servidor en 4 capas del Tutor Virtual UMAD integrando Express 5.2.1, SQLite3, Web Speech API y Google Gemini 2.5',
            suggestedCaption:
              'Arquitectura general del sistema mostrando el flujo entre interfaz multimodal, API REST en Node.js/Express, base de datos SQLite3 y servicio cognitivo Gemini 2.5.',
            required: true,
          },
          {
            slotId: 'uml-tutor-virtual',
            label: 'Diagramas UML (Clases, Estados y Navegación)',
            expectedType: 'image',
            category: 'uml-diagram',
            suggestedAlt:
              'Diagrama UML de clases y estados del sistema Tutor Virtual UMAD con tablas Usuarios, Chats y ciclo de vida de sesión conversacional',
            suggestedCaption:
              'Modelado estructural y comportamental UML diseñado para garantizar aislamiento de sesiones e integridad de mensajes.',
            required: false,
          },
          {
            slotId: 'ui-chat-avatar',
            label: 'Captura de Interfaz: Login Institucional y Chat con Avatar 2D',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla de la interfaz web del Tutor Virtual UMAD mostrando validación @umad.edu.mx, historial lateral y Avatar 2D sincronizado por voz',
            suggestedCaption:
              'Vista de la plataforma en ejecución respondiendo consultas curriculares con retroalimentación visual y auditiva.',
            required: true,
          },
          {
            slotId: 'metricas-latencia-tutor',
            label: 'Gráfica de Métricas de Latencia y Evaluación de Calidad',
            expectedType: 'image',
            category: 'metrics-chart',
            suggestedAlt:
              'Tabla y gráfica de tiempos de respuesta en milisegundos para Login (120ms), Historial (85ms), Gemini API (1850ms) y Web Speech API (45ms)',
            suggestedCaption:
              'Resultados cuantitativos de las pruebas de rendimiento y validación con 15 estudiantes de Ingeniería de Software (120 consultas).',
            required: false,
          },
          {
            slotId: 'pdf-tesina-tutor',
            label: 'Documento PDF Completo — Tesina Tutor Virtual UMAD',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento técnico PDF de la Tesina Desarrollo de una App Web de un Tutor Virtual UMAD de 6to semestre',
            suggestedCaption:
              'Memoria completa de investigación e ingeniería de software asesorada por el Mtro. Carlos Zapata Bretón.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 2. MI COLECCIÓN (.NET MAUI — PLATAFORMAS MÓVILES II)
      // ========================================================================
      {
        slug: 'mi-coleccion-moviles-ii',
        section: 'academic-projects',
        title: 'Mi Colección — App Multiplataforma en .NET MAUI bajo MVVM',
        subtitle: 'Desarrollo para Plataformas Móviles II · Gestión Reactiva de Tarjetas Coleccionables',
        summary:
          'Aplicación móvil y de escritorio desarrollada con .NET MAUI, C# y XAML aplicando arquitectura MVVM y Data Binding para catalogar coleccionables, rarezas, valuación y favoritos.',
        publishDate: '2026-09-05',
        featured: true,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['.NET MAUI', 'MVVM', 'C#', 'XAML', 'Multiplataforma'],
        techStack: [
          { name: 'C#', category: 'language' },
          { name: '.NET MAUI', category: 'framework' },
          { name: 'XAML', category: 'language' },
          { name: 'Patrón MVVM', category: 'architecture' },
          { name: 'Visual Studio', category: 'tool' },
          { name: 'Git', category: 'tool' },
        ],
        metrics: [
          {
            label: 'Módulos UI Reactivos',
            value: '4 Vistas',
            description: 'My Collection, My Favorites, Add Card y Card Details sincronizadas por Data Binding.',
          },
          {
            label: 'Operaciones de Catálogo',
            value: 'CRUD Completo',
            description: 'Alta, consulta detallada, edición de atributos/valuación, borrado y marcado de favoritos.',
          },
        ],
        deliverables: [
          {
            title: 'Repositorio Oficial ParcialUno_MovilesII',
            type: 'Source-Code',
            description: 'Solución completa en C# y XAML para .NET MAUI.',
            url: 'https://github.com/ebaltalmv/ParcialUno_MovilesII',
          },
        ],
        links: {
          repositoryUrl: 'https://github.com/ebaltalmv/ParcialUno_MovilesII',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Desarrollo para Plataformas Móviles II',
          semester: '7mo Semestre',
          academicPeriod: 'Otoño 2026',
          professor: 'Mtro. Alejandro Barrueta Martínez',
          problemStatement:
            'Necesidad de contar con una aplicación nativa multiplataforma desacoplada y mantenible para inventariar artículos coleccionables detallando su categoría, rareza, estado de conservación y valor estimado con filtrado inmediato de favoritos.',
          architecturePattern: 'Model-View-ViewModel (MVVM) con ObservableCollection y Data Binding',
          architectureSummary:
            'Separación limpia entre Modelos de dominio (atributos de carta, condición, rareza, valor e imagen), ViewModels reactivos con notificación de cambios de propiedad (INotifyPropertyChanged) y Vistas declarativas XAML adaptables a distintos tamaños de pantalla.',
          views4Plus1: {
            logical: 'Entidad CollectibleCard vinculada a colecciones observables para catálogo general y subconjunto filtrado de favoritos.',
            process: 'Actualización reactiva instantánea en interfaz al mutar estado de favorito o editar metadatos sin recargar vistas manualmente.',
            development: 'Proyecto .NET MAUI organizado en capas Views, ViewModels y Models en Visual Studio.',
            physical: 'Compilación nativa multiplataforma sobre runtime .NET para Android y Windows.',
            scenarios: 'Registro de nueva carta con imagen -> inspección en Card Details -> conmutación a My Favorites -> edición y eliminación.',
          },
          role: 'Desarrollador Móvil .NET MAUI (Lógica MVVM, Vistas XAML e Integración)',
          teamSize: 3,
          teamMembers: [
            'Emmanuel Baltazar López',
            'Oscar Juárez Ortiz',
            'Luis Gael Bonilla Paleta',
          ],
          methodology: ['Arquitectura MVVM', 'Control de Versiones Colaborativo Git'],
        },
        markdownBody: `### Características Técnicas Implementadas

- **Gestión Integral de Atributos:** Cada elemento almacena nombre, tipo/categoría, nivel de rareza, estado físico (condición), valor estimado, URL de ilustración y descripción técnica.
- **Sincronización de Estado Reactiva:** Gracias al enlace de datos (*Data Binding*) en XAML, marcar o desmarcar una tarjeta actualiza automáticamente la pestaña \`My Favorites\` y la vista de detalle \`Card Details\`.`,
        evidenceSlots: [
          {
            slotId: 'maui-grid-principal',
            label: 'Captura UI: Vista Principal "My Collection" y "My Favorites"',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla de la aplicación .NET MAUI Mi Colección mostrando el grid de tarjetas coleccionables y sección de favoritos',
            suggestedCaption:
              'Interfaz XAML multiplataforma renderizando tarjetas con rareza, condición y acceso rápido a favoritos.',
            required: true,
          },
          {
            slotId: 'maui-form-detalle',
            label: 'Captura UI: Formulario "Add Card" y Vista "Card Details"',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de las pantallas Add Card y Card Details en .NET MAUI con validaciones y enlace de datos MVVM',
            suggestedCaption:
              'Flujo de captura y consulta detallada de atributos y valuación de cada coleccionable.',
            required: false,
          },
          {
            slotId: 'maui-video-demo',
            label: 'Video Demostrativo de Ejecución (.mp4)',
            expectedType: 'video',
            category: 'video-demo',
            suggestedAlt:
              'Video demostrativo del funcionamiento CRUD y actualización reactiva de favoritos en la app Mi Colección .NET MAUI',
            suggestedCaption:
              'Demostración funcional en tiempo real de las operaciones CRUD sobre el emulador/entorno .NET MAUI.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 3. BPMN 2.0 SAP SIGNAVIO & CRYSTAL REPORTS (7MO SEMESTRE)
      // ========================================================================
      {
        slug: 'arquitectura-procesos-signavio-crystal',
        section: 'academic-projects',
        title: 'Modelado BPMN 2.0 en SAP Signavio & Reportería con Crystal Reports',
        subtitle: 'Arquitectura y Calidad de Sistemas de Cómputo · Estándar SCOR-DS y Sistema ReportesRanking en .NET',
        summary:
          'Optimización de 5 procesos empresariales y logísticos con BPMN 2.0 en SAP Signavio (reducción de tiempos de entrega de 43.8 a 25 min) e implementación de reportes ejecutivos con SAP Crystal Reports y C#.',
        publishDate: '2026-09-08',
        featured: true,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['BPMN 2.0', 'SAP Signavio', 'SAP Crystal Reports', 'SCOR-DS', 'Calidad de Sistemas'],
        techStack: [
          { name: 'SAP Signavio', category: 'erp-enterprise' },
          { name: 'BPMN 2.0', category: 'architecture' },
          { name: 'SCOR-DS', category: 'methodology' },
          { name: 'SAP Crystal Reports', category: 'erp-enterprise' },
          { name: 'C# / .NET', category: 'language' },
          { name: 'Visual Studio', category: 'tool' },
        ],
        metrics: [
          {
            label: 'Optimización Caso Cupcakes Inc',
            value: '43.8 → 25 min',
            description: 'Reducción proyectada del ciclo de entrega mediante rediseño de proceso en BPMN 2.0.',
          },
          {
            label: 'Procesos Estandarizados',
            value: '5 Modelos BPMN',
            description: 'Logística, envíos, evaluación de calidad de personal, producción y recepción de insumos.',
          },
        ],
        deliverables: [
          {
            title: 'Portafolio de 5 Modelos BPMN 2.0 en SAP Signavio',
            type: 'SAD-Architecture-Doc',
            description: 'Diagramas de carriles (Pools/Lanes), compuertas exclusivas/paralelas y eventos de temporización.',
            url: '',
          },
          {
            title: 'Solución ReportesRanking (.NET + SAP Crystal Reports)',
            type: 'Source-Code',
            description: 'Aplicación Visual Studio con bitácora y generación de reportes empresariales parametrizados.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Arquitectura y Calidad de Sistemas de Cómputo',
          semester: '7mo Semestre',
          academicPeriod: 'Otoño 2026',
          professor: 'Mtra. Martha Patricia Hernández Zamora',
          problemStatement:
            'Cuellos de botella operativos, falta de trazabilidad entre áreas funcionales y carencia de reportería estructurada para la toma de decisiones gerenciales en cadenas de suministro y control de calidad.',
          architecturePattern: 'Arquitectura Orientada a Procesos de Negocio (BPM) + Capa de Inteligencia de Reportes (.NET / Crystal Reports)',
          architectureSummary:
            'Alineación entre el modelo de referencia de cadena de suministro SCOR-DS y notación estándar BPMN 2.0 en SAP Signavio para eliminar actividades sin valor agregado, complementado con una arquitectura de escritorio en C# conectada al motor de renderizado documental SAP Crystal Reports (ReportesRanking y RankingBitacora).',
          views4Plus1: {
            logical: 'Separación de responsabilidades organizacionales mediante Pools y Swimlanes y estructuras de datos para bitácoras de ranking.',
            process: 'Orquestación de flujos asíncronos, manejo de excepciones logísticas y compuertas de validación de calidad.',
            development: 'Modelos colaborativos en SAP Signavio Process Manager y proyecto C# (.sln) con plantillas .rpt integradas.',
            physical: 'Entorno cloud SAP Signavio y ejecución cliente Windows .NET con runtime Crystal Reports.',
            scenarios: 'Caso Cupcakes Inc Puebla (meta de reducción de entrega de 43.8 a 25 minutos), envío de mercancías, evaluación de personal y recepción de materia prima.',
          },
          role: 'Analista de Arquitectura de Procesos y Desarrollador .NET / Crystal Reports',
          teamSize: 1,
          teamMembers: ['Emmanuel Baltazar López'],
          methodology: ['BPMN 2.0', 'SCOR-DS (Supply Chain Operations Reference)', 'Calidad de Sistemas'],
        },
        markdownBody: `### Alcance de Ingeniería de Procesos y Reportería

1. **Rediseño Operativo en SAP Signavio:** Modelado riguroso de eventos de inicio/fin, compuertas de decisión basadas en datos y flujos de mensaje entre clientes, almacén, producción y reparto, identificando tiempos muertos para reducir el ciclo operativo de **43.8 minutos a 25 minutos** en el caso de estudio *Cupcakes Inc*.
2. **Integración de SAP Crystal Reports en C#:** Construcción de los módulos \`ReportesRanking\` y \`RankingBitacora\` en Visual Studio para transformar registros transaccionales en reportes ejecutivos listos para auditoría e impresión.`,
        evidenceSlots: [
          {
            slotId: 'signavio-bpmn-cupcakes',
            label: 'Diagrama BPMN 2.0 en SAP Signavio (Caso Cupcakes Inc / Ejercicios 1-5)',
            expectedType: 'image',
            category: 'uml-diagram',
            suggestedAlt:
              'Diagrama de proceso BPMN 2.0 modelado en SAP Signavio mostrando carriles operativos, compuertas y optimización de entrega a 25 minutos',
            suggestedCaption:
              'Modelado formal bajo estándar BPMN 2.0 y referencia SCOR-DS en SAP Signavio.',
            required: true,
          },
          {
            slotId: 'crystal-reports-ui',
            label: 'Captura de Ejecución: Sistema ReportesRanking con SAP Crystal Reports',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla del visor SAP Crystal Reports integrado en aplicación C# Visual Studio mostrando reporte generado',
            suggestedCaption:
              'Generación de reportería estructurada desde C#/.NET mediante plantillas SAP Crystal Reports.',
            required: true,
          },
          {
            slotId: 'doc-procesos-pdf',
            label: 'Documento PDF de Análisis de Procesos y Arquitectura',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento técnico PDF con el análisis de los 5 procesos BPMN 2.0 y arquitectura de software',
            suggestedCaption:
              'Entregable académico completo de la asignatura Arquitectura y Calidad de Sistemas de Cómputo.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 4. ECOSISTEMA IOT ESP32 + ARDUINO + FLASK (VERANO 2026)
      // ========================================================================
      {
        slug: 'iot-monitoreo-esp32-flask',
        section: 'academic-projects',
        title: 'Ecosistema IoT de Monitoreo Industrial y Ambiental (ESP32 + Flask)',
        subtitle: 'Tópicos Avanzados de Ingeniería · Telemetría Física a Base de Datos y Dashboard Web en Python',
        summary:
          'Arquitectura IoT extremo a extremo que integra nodos ESP32 y Arduino con sensores ultrasónicos, de humedad y nivel de agua hacia una API REST en Python/Flask con monitoreo web en tiempo real.',
        publishDate: '2026-07-18',
        featured: true,
        bentoSpan: 'col-span-2',
        draft: false,
        tags: ['IoT', 'ESP32', 'Python Flask', 'Telemetría REST', 'Industria 4.0'],
        techStack: [
          { name: 'Python', category: 'language' },
          { name: 'Flask', category: 'framework' },
          { name: 'C / C++ (Arduino/ESP32)', category: 'language' },
          { name: 'ESP32 & Ethernet Shield', category: 'tool' },
          { name: 'SQL / Persistencia IoT', category: 'database' },
          { name: 'REST HTTP Telemetry', category: 'architecture' },
        ],
        metrics: [
          {
            label: 'Soluciones Integradas',
            value: '3 Escenarios IoT',
            description: 'Contador de Producción Industrial, Alerta de Invernadero y Alarma Temprana de Inundación.',
          },
          {
            label: 'Arquitectura End-to-End',
            value: 'Sensor → API → UI',
            description: 'Adquisición física, transmisión HTTP/Ethernet/Wi-Fi, persistencia y visualización web.',
          },
        ],
        deliverables: [
          {
            title: 'Firmware Microcontroladores (ESP32 / Arduino) + Servidor Flask',
            type: 'Source-Code',
            description: 'Código de adquisición de sensores, endpoints de ingesta y panel Contador_Produccion_IoT.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Tópicos Avanzados de Ingeniería',
          semester: 'Verano 2026',
          academicPeriod: 'Junio – Julio 2026',
          professor: '',
          problemStatement:
            'Ausencia de visibilidad en tiempo real sobre conteo de líneas de producción y variables críticas ambientales (humedad en invernaderos y niveles de riesgo de inundación), requiriendo captura automatizada y alertamiento oportuno.',
          architecturePattern: 'Arquitectura IoT en 3 Niveles (Borde Físico / API de Ingesta Flask / Dashboard Analítico)',
          architectureSummary:
            'Nodos sensores basados en ESP32 y Arduino (con conectividad Wi-Fi y Ethernet Shield) digitalizan señales físicas y envían payloads HTTP hacia un backend Python/Flask encargado de validar umbrales, registrar series de eventos en base de datos y actualizar el tablero web.',
          views4Plus1: {
            logical: 'Módulos de lectura de transductores, cliente HTTP embebido, controlador de rutas Flask y repositorio de lecturas/alertas.',
            process: 'Muestreo periódico en microcontrolador -> petición POST al servidor Flask -> evaluación de umbrales de alarma -> refresco de métricas en panel.',
            development: 'Sketches C++ para ESP32/Arduino y aplicación modular Python en entorno virtual con plantillas web.',
            physical: 'Microcontroladores ESP32/Arduino, sensores ultrasónicos/humedad/nivel, red local TCP/IP y host ejecutando servidor Flask.',
            scenarios: 'Detección de piezas en Contador_Produccion_IoT, activación de alerta por humedad fuera de rango en invernadero y alarma crítica por nivel de agua.',
          },
          role: 'Desarrollador Fullstack IoT (Integración de Sensores, API Flask y Dashboard)',
          teamSize: 1,
          teamMembers: ['Emmanuel Baltazar López'],
          methodology: ['Prototipado Incremental Hardware-Software', 'Pruebas de Integración en Laboratorio'],
        },
        markdownBody: `### Componentes del Ecosistema Desarrollado

- **Contador de Producción IoT (\`Contador_Produccion_IoT\`):** Registro automatizado de unidades detectadas por sensor físico con persistencia inmediata y visualización de avance productivo en navegador.
- **Monitoreo Ambiental de Invernadero y Alerta de Inundación:** Evaluación continua de humedad y nivel hidrométrico con disparo de alertas preventivas ante condiciones críticas.`,
        evidenceSlots: [
          {
            slotId: 'iot-prototipo-hardware',
            label: 'Fotografía / Diagrama del Prototipo Físico (ESP32, Arduino y Sensores)',
            expectedType: 'image',
            category: 'stand-photo',
            suggestedAlt:
              'Fotografía del circuito IoT con microcontrolador ESP32, Arduino, Ethernet Shield y sensores conectados en pruebas',
            suggestedCaption:
              'Implementación física de los nodos de captura sensorial y comunicación en red.',
            required: true,
          },
          {
            slotId: 'iot-dashboard-flask',
            label: 'Captura Web: Dashboard Flask de Monitoreo y Contador de Producción',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla del panel web desarrollado en Python Flask mostrando lecturas de sensores y conteo de producción IoT',
            suggestedCaption:
              'Interfaz web conectada al backend Flask visualizando telemetría recibida desde el nodo físico.',
            required: true,
          },
          {
            slotId: 'iot-video-funcionamiento',
            label: 'Video Demostrativo de Sensores y Dashboard en Tiempo Real',
            expectedType: 'video',
            category: 'video-demo',
            suggestedAlt:
              'Video de prueba funcional mostrando detección física en el sensor y actualización simultánea en el servidor Flask',
            suggestedCaption:
              'Evidencia en video de la comunicación extremo a extremo entre hardware y aplicación web.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 5. ARENA DE VIDEOJUEGOS PLUS ULTRA (PDS 3RO & SIG 5TO)
      // ========================================================================
      {
        slug: 'arena-videojuegos-plus-ultra',
        section: 'academic-projects',
        title: 'Arena Plus Ultra & Traje Háptico — Ingeniería de Requerimientos y Diseño UML',
        subtitle: 'Proceso de Diseño de Sistemas & Sistemas de Información Gerencial · PEMMA Industries',
        summary:
          'Especificación formal, estudio cuádruple de factibilidad, 123 reglas de negocio, 10 casos de uso extendidos, 20 reportes, 23 formatos y arquitectura UML completa para una arena gamer inmersiva.',
        publishDate: '2025-11-10',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Ingeniería de Requerimientos', 'UML', 'Factibilidad', 'SCM & QA Plan', 'Diseño de Sistemas'],
        techStack: [
          { name: 'UML 2.x', category: 'architecture' },
          { name: 'Rational Rose / Draw.io', category: 'tool' },
          { name: 'Plan SCM & QA', category: 'testing-qa' },
          { name: 'Ingeniería de Requerimientos', category: 'methodology' },
        ],
        metrics: [
          {
            label: 'Reglas de Negocio',
            value: '123 Reglas',
            description: 'Documentadas y trazadas hacia casos de uso, formatos y validaciones.',
          },
          {
            label: 'Artefactos de E/S',
            value: '23 Formatos · 20 Reportes',
            description: 'Catálogo completo FO_01–FO_23 y RE_01–RE_20 para operación y gerencia.',
          },
          {
            label: 'Estudio Financiero',
            value: '$34,422.31 MXN',
            description: 'Presupuesto calculado sobre 137 horas humanware y análisis de factibilidad.',
          },
        ],
        deliverables: [
          {
            title: 'Documento Maestro de Modelado de Sistemas y Plan de Calidad',
            type: 'SAD-Architecture-Doc',
            description: 'Factibilidad técnica, operativa, económica y legal + modelo UML integral.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Proceso de Diseño de Sistemas (3er Sem.) & Sistemas de Información Gerencial (5to Sem.)',
          semester: '3er y 5to Semestre',
          academicPeriod: 'Otoño 2024 – Otoño 2025',
          professor: 'Mtra. Martha Patricia Hernández Zamora',
          problemStatement:
            'Complejidad operativa en la administración integral de reservaciones de estaciones, torneos, membresías, inventario de periféricos/trajes hápticos e indicadores gerenciales en un centro de entretenimiento competitivo.',
          architecturePattern: 'Diseño Modular Basado en Roles con Trazabilidad Completa de Requerimientos',
          architectureSummary:
            'Modelado estructurado desde la concepción organizacional (PEMMA Industries) hasta diagramas UML de casos de uso (CU_01 a CU_10 y extensión gerencial), clases, estados, actividades y mapas de navegación diferenciados por perfil de usuario.',
          views4Plus1: {
            logical: 'Modelo de dominio orientado a objetos cubriendo clientes, reservaciones, torneos, estaciones, equipamiento inteligente y facturación.',
            process: 'Diagramas de actividades y máquinas de estado para el ciclo de vida de reservas, préstamos de hardware y partidas.',
            development: 'Plan de Gestión de Configuración de Software (SCM) y Aseguramiento de Calidad (SQA) con nomenclatura controlada.',
            physical: 'Proyección de infraestructura local de estaciones, red de baja latencia y servidor central de administración.',
            scenarios: '10 casos de uso transaccionales base + módulos de información ejecutiva validados con prototipos de interfaz.',
          },
          role: 'Co-autor de Arquitectura de Requerimientos, Modelado UML y Estudio de Factibilidad',
          teamSize: 2,
          teamMembers: ['Emmanuel Baltazar López', 'José Brian Molina Nochebuena'],
          methodology: ['Ingeniería de Requerimientos', 'UML', 'Análisis Cuádruple de Factibilidad', 'SQA / SCM'],
        },
        markdownBody: `### Rigor Documental y Trazabilidad

El proyecto destaca por su exhaustividad en ingeniería de sistemas antes de escribir una sola línea de código:
- **Cuádruple Factibilidad:** Evaluación técnica, económica (\`$34,422.31 MXN\` estimados para \`137 horas\` de ingeniería), operativa y legal.
- **Estandarización de Artefactos:** Definición precisa de **123 reglas de negocio**, **23 formatos de captura (\`FO_01\`–\`FO_23\`)** y **20 reportes gerenciales (\`RE_01\`–\`RE_20\`)**.`,
        evidenceSlots: [
          {
            slotId: 'pds-uml-general',
            label: 'Diagrama General de Casos de Uso y Diagrama de Clases UML',
            expectedType: 'image',
            category: 'uml-diagram',
            suggestedAlt:
              'Diagrama UML general de casos de uso y clases del sistema Arena de Videojuegos Plus Ultra',
            suggestedCaption:
              'Arquitectura funcional y estructural modelada bajo estándar UML.',
            required: true,
          },
          {
            slotId: 'pds-prototipo-ui',
            label: 'Capturas del Prototipo de Pantallas y Mapas de Navegación',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Prototipo de pantallas para administración de reservas, torneos y reportes gerenciales en Arena Plus Ultra',
            suggestedCaption:
              'Diseño de interfaces alineado a los formatos FO_01–FO_23 y reportes RE_01–RE_20.',
            required: false,
          },
          {
            slotId: 'pds-documento-pdf',
            label: 'Documento PDF de Ingeniería de Diseño de Sistemas',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento completo PDF de Proceso de Diseño de Sistemas para Arena Plus Ultra elaborado por PEMMA Industries',
            suggestedCaption:
              'Especificación completa de factibilidad, reglas de negocio, casos de uso y planes SCM/QA.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 6. SISTEMA DE GESTIÓN DE MANTENIMIENTO BAJO SCRUM & KANBAN (VERANO 2025)
      // ========================================================================
      {
        slug: 'sistema-mantenimiento-scrum',
        section: 'academic-projects',
        title: 'Sistema Web de Gestión de Mantenimiento — Ejecución Scrum & Kanban',
        subtitle: 'Metodologías Ágiles · De Sprint Cero al Producto Funcional con Base de Datos Relacional',
        summary:
          'Desarrollo iterativo de una aplicación web para control de órdenes de mantenimiento aplicando Scrum, tableros Lean Kanban, estimación por Story Points, modelado UML/ER y SQL.',
        publishDate: '2025-07-20',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Scrum', 'Lean Kanban', 'SQL', 'UML & ER', 'Gestión Ágil'],
        techStack: [
          { name: 'Scrum', category: 'methodology' },
          { name: 'Lean Kanban', category: 'methodology' },
          { name: 'SQL (mantenimientobd)', category: 'database' },
          { name: 'UML & Modelo ER', category: 'architecture' },
          { name: 'Desarrollo Web', category: 'framework' },
        ],
        metrics: [
          {
            label: 'Ciclo Ágil Completo',
            value: 'Sprint 0 → Entrega',
            description: 'Acuerdos de equipo, Product Backlog, Planning, Seguimiento Kanban y Retrospectiva.',
          },
        ],
        deliverables: [
          {
            title: 'Base de Datos Relacional (mantenimientobd.sql) y Modelos D-CU / D-ER',
            type: 'Database-Model',
            description: 'Script DDL/DML junto con diagrama de casos de uso y diagrama entidad-relación.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Metodologías Ágiles',
          semester: 'Verano 2025',
          academicPeriod: 'Verano 2025 (Equipo 1)',
          professor: '',
          problemStatement:
            'Descontrol en el registro, asignación y seguimiento de incidencias de mantenimiento preventivo y correctivo por falta de una plataforma centralizada y un flujo ágil de entrega de valor.',
          architecturePattern: 'Aplicación Web Transaccional respaldada por Modelo Relacional SQL',
          architectureSummary:
            'Diseño guiado por historias de usuario priorizadas en el Product Backlog, materializado en un esquema relacional normalizado (mantenimientobd.sql) y vistas web para solicitud, seguimiento de estado y cierre de órdenes.',
          views4Plus1: {
            logical: 'Diagrama de Casos de Uso (D-CU) y Modelo Entidad-Relación (D-ER) alineados a las épicas del backlog.',
            process: 'Flujo de estados de órdenes de mantenimiento reflejado tanto en el sistema como en el tablero Kanban del equipo.',
            development: 'Entregas incrementales por Sprint con criterios de aceptación (Definition of Done) verificables.',
            physical: 'Servidor web conectado a motor relacional SQL.',
            scenarios: 'Apertura de ticket de mantenimiento, asignación técnica, bitácora de atención y cierre validado.',
          },
          role: 'Miembro del Equipo de Desarrollo Scrum & Modelado de Datos (Equipo 1)',
          teamSize: 4,
          teamMembers: ['Equipo 1 — Metodologías Ágiles UMAD (Emmanuel Baltazar López)'],
          methodology: ['Scrum', 'Lean Kanban', 'Shu-Ha-Ri', 'Story Points', 'Retrospectivas Ágiles'],
        },
        markdownBody: `### Prácticas Ágiles Aplicadas

- **Sprint Cero y Cultura de Equipo:** Establecimiento de acuerdos de trabajo, adopción progresiva bajo enfoque *Shu-Ha-Ri*, definición de *Definition of Ready* y *Definition of Done*.
- **Ingeniería acoplada a Agilidad:** Refinamiento de historias de usuario traducidas directamente en artefactos ligeros pero rigurosos (\`D-CU.png\`, \`D-ER.png\` y \`mantenimientobd.sql\`).`,
        evidenceSlots: [
          {
            slotId: 'scrum-diagramas-cu-er',
            label: 'Diagrama de Casos de Uso (D-CU) y Entidad-Relación (D-ER)',
            expectedType: 'image',
            category: 'er-diagram',
            suggestedAlt:
              'Diagrama entidad-relación y diagrama de casos de uso del Sistema de Gestión de Mantenimiento',
            suggestedCaption:
              'Modelado funcional y de datos construido durante los sprints del proyecto.',
            required: true,
          },
          {
            slotId: 'scrum-captura-web',
            label: 'Capturas de la Aplicación Web y Tablero Scrum/Kanban',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla del sistema web de mantenimiento y gestión del backlog en tablero Kanban',
            suggestedCaption:
              'Incremento funcional entregado por el Equipo 1 al cierre de iteraciones.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 7. RESCATE ANIMAL PUEBLA — ARQUITECTURA SQL SERVER (4TO SEMESTRE)
      // ========================================================================
      {
        slug: 'rescate-animal-puebla-sql',
        section: 'academic-projects',
        title: 'Rescate Animal Puebla — Arquitectura Transaccional en SQL Server',
        subtitle: 'Programación para Bases de Datos · 21 Tablas Normalizadas, Vistas, Stored Procedures, Triggers y RBAC',
        summary:
          'Diseño e implementación en T-SQL (SQL Server) para la gestión integral de una ONG veterinaria: rescates, historial clínico, stock automático de vacunas, adopciones, donaciones y auditoría financiera.',
        publishDate: '2025-05-10',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['SQL Server', 'T-SQL', 'Triggers & SPs', 'Seguridad RBAC', 'Modelado Relacional'],
        techStack: [
          { name: 'SQL Server', category: 'database' },
          { name: 'T-SQL', category: 'language' },
          { name: 'SSMS', category: 'tool' },
          { name: 'RBAC Database Security', category: 'architecture' },
        ],
        metrics: [
          {
            label: 'Modelo Normalizado',
            value: '21 Tablas',
            description: 'Integridad referencial estricta y restricciones CHECK de dominio.',
          },
          {
            label: 'Objetos Programables',
            value: '8 Vistas · 6 SPs · 3 Triggers',
            description: 'Automatización de inventario médico, alertas presupuestales y reportes clínicos.',
          },
        ],
        deliverables: [
          {
            title: 'Script Maestro T-SQL y Documentación Técnica de Base de Datos',
            type: 'Database-Model',
            description: 'DDL, carga de datos, vistas analíticas, procedimientos almacenados, triggers y roles.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Programación para Bases de Datos',
          semester: '4to Semestre',
          academicPeriod: 'Primavera 2025',
          professor: 'Ing. Verónica Moreno Jiménez',
          problemStatement:
            'Las organizaciones de rescate animal manejan expedientes médicos, inventarios de insumos veterinarios, procesos de adopción y presupuestos de eventos de recaudación de forma fragmentada, provocando desabasto de vacunas y poca trazabilidad financiera.',
          architecturePattern: 'Arquitectura de Datos Relacional Centralizada con Lógica Transaccional en Motor SQL Server',
          architectureSummary:
            'Esquema normalizado de 21 entidades protegido por llaves foráneas, validaciones CHECK, 8 vistas multifuente, 6 procedimientos almacenados transaccionales, 3 triggers AFTER INSERT para efectos colaterales auditados y control de acceso basado en roles (uLectura y uEscritura).',
          views4Plus1: {
            logical: '21 tablas cubriendo animales rescatados, expedientes clínicos, vacunas, inventario, adoptantes, seguimientos, voluntarios, donantes y eventos.',
            process: 'Triggers AFTER INSERT descuentan automáticamente existencias de vacunas y auditan desviaciones presupuestales en tiempo real.',
            development: 'Scripts modulares T-SQL probados y verificados en SQL Server Management Studio (SSMS).',
            physical: 'Instancia Microsoft SQL Server con segregación de permisos a nivel de servidor y esquema.',
            scenarios: 'Registro de aplicación de vacuna con descuento automático de lote, consulta consolidada de adopciones y restricción de escritura a usuarios de consulta.',
          },
          role: 'Co-diseñador del Modelo Relacional y Programador T-SQL (SPs, Triggers y Seguridad)',
          teamSize: 3,
          teamMembers: [
            'Emmanuel Baltazar López',
            'Oscar Juárez Ortiz',
            'Pedro Emiliano Romero Osorio',
          ],
          methodology: ['Normalización Relacional (3FN)', 'Programación Defensiva T-SQL', 'Principio de Mínimo Privilegio (RBAC)'],
        },
        markdownBody: `### Automatización en el Motor Transaccional

- **Integridad y Automatización Clínica:** Los *Triggers* \`AFTER INSERT\` garantizan atomicidad entre el registro médico y el inventario físico de biológicos sin depender de código externo.
- **Seguridad por Mínimo Privilegio:** Configuración explícita de credenciales y permisos diferenciados (\`uLectura\` vs \`uEscritura\`) validada mediante pruebas de denegación controlada en SSMS.`,
        evidenceSlots: [
          {
            slotId: 'sql-diagrama-21-tablas',
            label: 'Diagrama Relacional de las 21 Tablas en SQL Server',
            expectedType: 'image',
            category: 'er-diagram',
            suggestedAlt:
              'Diagrama relacional de 21 tablas en SQL Server para el sistema Rescate Animal Puebla con llaves primarias y foráneas',
            suggestedCaption:
              'Arquitectura de datos normalizada cubriendo operación clínica, adopciones y finanzas.',
            required: true,
          },
          {
            slotId: 'sql-ejecucion-ssms',
            label: 'Capturas de Ejecución en SSMS (Vistas, SPs, Triggers y Permisos)',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de SQL Server Management Studio ejecutando procedimientos almacenados, triggers y pruebas de roles uLectura/uEscritura',
            suggestedCaption:
              'Verificación experimental de transacciones y políticas RBAC en el motor SQL Server.',
            required: false,
          },
          {
            slotId: 'sql-reporte-pdf',
            label: 'Documentación Técnica PDF / Script SQL',
            expectedType: 'any',
            category: 'official-document',
            suggestedAlt:
              'Reporte técnico PDF del proyecto Rescate Animal Puebla de Programación para Bases de Datos',
            suggestedCaption:
              'Memoria técnica con diccionario de datos, código T-SQL y casos de prueba.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 8. PATRONES DE DISEÑO GOF EN C# (5TO SEMESTRE)
      // ========================================================================
      {
        slug: 'patrones-diseno-gof-csharp',
        section: 'academic-projects',
        title: 'Arquitectura Orientada a Objetos con Patrones GoF en C#',
        subtitle: 'Patrones Orientados a Objetos · Juego Espacial y Parque de Atracciones desacoplados',
        summary:
          'Implementación práctica en C#/.NET de 17 patrones de diseño Gang of Four (Creacionales, Estructurales y de Comportamiento) integrados en simulaciones interactivas.',
        publishDate: '2025-11-25',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Patrones GoF', 'C#', 'POO Avanzada', 'SOLID', 'Arquitectura Limpia'],
        techStack: [
          { name: 'C#', category: 'language' },
          { name: '.NET', category: 'framework' },
          { name: 'Gang of Four (GoF)', category: 'architecture' },
          { name: 'Principios SOLID', category: 'methodology' },
          { name: 'UML de Clases', category: 'architecture' },
        ],
        metrics: [
          {
            label: 'Catálogo Implementado',
            value: '17 Patrones GoF',
            description: '4 Creacionales, 7 Estructurales y 6 de Comportamiento codificados en C#.',
          },
        ],
        deliverables: [
          {
            title: 'Soluciones C#: PFJuegoEspacialPatrones y ParqueDeAtracciones_EBL',
            type: 'Source-Code',
            description: 'Proyectos integradores combinando múltiples patrones sin acoplamiento rígido.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Patrones Orientados a Objetos',
          semester: '5to Semestre',
          academicPeriod: 'Otoño 2025',
          professor: '',
          problemStatement:
            'Mitigar la rigidez, duplicación de código y alto acoplamiento al escalar comportamientos complejos, familias de objetos y estados dinámicos en sistemas orientados a objetos.',
          architecturePattern: 'Composición de Patrones Creacionales, Estructurales y de Comportamiento (GoF)',
          architectureSummary:
            'Aplicación sistemática de Singleton, Factory Method, Abstract Factory, Builder, Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy, Chain of Responsibility, Iterator, Mediator, State, Strategy y Template Method en soluciones C# cohesivas.',
          views4Plus1: {
            logical: 'Jerarquías polimórficas basadas en interfaces y clases abstractas respetando Open/Closed y Dependency Inversion.',
            process: 'Intercambio dinámico de algoritmos (Strategy), transiciones limpias de estado (State) y mediación desacoplada (Mediator).',
            development: 'Soluciones .NET modulares organizadas por familia de patrón y proyecto integrador.',
            physical: 'Ejecución sobre plataforma .NET.',
            scenarios: 'Simulación de entidades espaciales con mejoras dinámicas (Decorator/Flyweight) y gestión operativa de parque de atracciones.',
          },
          role: 'Diseñador y Desarrollador de Software Orientado a Objetos (C#)',
          teamSize: 1,
          teamMembers: ['Emmanuel Baltazar López'],
          methodology: ['Principios SOLID', 'Catálogo Gang of Four (GoF)', 'Modelado UML de Clases'],
        },
        markdownBody: `### Familias de Patrones Aplicadas

- **Creacionales:** \`Singleton\`, \`Factory Method\`, \`Abstract Factory\`, \`Builder\`.
- **Estructurales:** \`Adapter\`, \`Bridge\`, \`Composite\`, \`Decorator\`, \`Facade\`, \`Flyweight\`, \`Proxy\`.
- **Comportamiento:** \`Chain of Responsibility\`, \`Iterator\`, \`Mediator\`, \`State\`, \`Strategy\`, \`Template Method\`.`,
        evidenceSlots: [
          {
            slotId: 'gof-uml-clases',
            label: 'Diagrama UML de Clases de los Patrones Integrados',
            expectedType: 'image',
            category: 'uml-diagram',
            suggestedAlt:
              'Diagrama UML de clases del proyecto Juego Espacial en C# mostrando la interacción de patrones GoF',
            suggestedCaption:
              'Diseño polimórfico desacoplado aplicando patrones creacionales, estructurales y de comportamiento.',
            required: true,
          },
          {
            slotId: 'gof-ejecucion-csharp',
            label: 'Captura de Ejecución: PFJuegoEspacialPatrones / ParqueDeAtracciones',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla de la ejecución en C# del proyecto integrador de patrones de diseño GoF',
            suggestedCaption:
              'Demostración en tiempo de ejecución de cambios de estrategia, decoración y estados.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 9. ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS — ITIL 4 (7MO SEMESTRE)
      // ========================================================================
      {
        slug: 'administracion-procesos-tecnologicos-itil4',
        section: 'academic-projects',
        title: 'Gobierno de Servicios TI, Flujos de Valor y Gestión de Riesgos bajo ITIL 4',
        subtitle: 'Administración de Procesos Tecnológicos · Sistema de Valor del Servicio (SVS), Casos DevShop & FoodFast e ISO 31000',
        summary:
          'Arquitectura de gestión de servicios TI aplicando ITIL 4: Sistema de Valor del Servicio (SVS), 4 Dimensiones, Cadena de Valor (SVC), optimización de Lead Time en Caso DevShop (de 16 a 8–10 días) y Gestión de Riesgos con KRIs.',
        publishDate: '2026-10-23',
        featured: true,
        bentoSpan: 'col-span-2',
        draft: false,
        tags: ['ITIL 4', 'Value Stream Mapping', 'Gestión de Riesgos TI', 'SVS & 4 Dimensiones', 'Mejora Continua'],
        techStack: [
          { name: 'ITIL 4 Framework', category: 'methodology', version: 'SVS / SVC' },
          { name: 'Value Stream Mapping', category: 'architecture' },
          { name: 'ISO 31000:2018 & KRIs', category: 'testing-qa' },
          { name: 'Teoría de Restricciones (TOC)', category: 'methodology' },
          { name: 'CI/CD & DevOps Governance', category: 'cloud-devops' },
        ],
        metrics: [
          {
            label: 'Reducción de Lead Time (DevShop)',
            value: '16 → 8–10 días',
            description: 'Optimización proyectada del flujo de valor eliminando cuellos de botella en QA y Aprobación.',
          },
          {
            label: 'Cuellos de Botella Detectados',
            value: '56% del Tiempo',
            description: 'Pruebas (5 días / 31%) y Aprobación (4 días / 25%) frente a solo 3 días (19%) de Desarrollo.',
          },
          {
            label: 'Cobertura Arquitectónica',
            value: 'SVS + 4D + 34 Prácticas',
            description: 'Mapas conceptuales del Sistema de Valor, 4 Dimensiones, Flujos de Valor y Gestión de Riesgos.',
          },
        ],
        deliverables: [
          {
            title: 'Caso DevShop: Flujo de Valor y Mejora Continua con ITIL 4',
            type: 'SAD-Architecture-Doc',
            description: 'Diagnóstico de Lead Time (16 días), identificación de restricciones y plan de mejora en 7 pasos.',
            url: '',
          },
          {
            title: 'Práctica General de Gestión de Riesgos en ITIL 4 y Caso FoodFast',
            type: 'Technical-Report',
            description: 'Alineación con ISO 31000:2018, matriz de riesgos, KRIs y gobierno de plataformas.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Administración de Procesos Tecnológicos',
          semester: '7mo Semestre',
          academicPeriod: 'Otoño 2026',
          professor: '',
          problemStatement:
            'En organizaciones de software como DevShop y plataformas digitales como FoodFast, la desconexión entre desarrollo, pruebas manuales y comités de aprobación burocráticos eleva el tiempo de entrega (Lead Time) a 16 días y multiplica el riesgo de incidentes en producción.',
          architecturePattern: 'Sistema de Valor del Servicio (SVS) + Cadena de Valor del Servicio (SVC) ITIL 4',
          architectureSummary:
            'Articulación de los Principios Guía de ITIL 4, las 4 Dimensiones de Gestión de Servicios (Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, Procesos y Flujos de Valor) y las prácticas de Habilitación del Cambio, Validación y Pruebas, Gestión de Despliegue y Gestión de Riesgos.',
          views4Plus1: {
            logical: 'Arquitectura conceptual del Sistema de Valor del Servicio (Oportunidad/Demanda → Valor) y las 4 Dimensiones de ITIL 4.',
            process: 'Mapeo del Value Stream de 6 etapas (Solicitud 2d → Diseño 1d → Desarrollo 3d → Pruebas 5d → Aprobación 4d → Despliegue 1d = 16d).',
            development: 'Automatización de pruebas en pipeline CI/CD y pre-autorización de cambios estándar de bajo riesgo.',
            physical: 'Entornos segregados de integración continua, staging automatizado y despliegue controlado en producción.',
            scenarios: 'Reducción de ciclo de liberación en DevShop a 8–10 días, continuidad operativa en FoodFast y monitoreo proactivo mediante KRIs.',
          },
          role: 'Analista de Gobierno de TI, Flujos de Valor y Gestión de Riesgos ITIL 4',
          teamSize: 4,
          teamMembers: [
            'Emmanuel Baltazar López',
            'Oscar Juárez Ortiz',
            'Pedro Emiliano Romero Osorio',
            'Luis Gael Bonilla Paleta',
          ],
          methodology: [
            'ITIL 4 Service Value System (SVS)',
            'Modelo de Mejora Continua (7 Pasos)',
            'Teoría de las Restricciones (TOC)',
            'ISO 31000:2018 Risk Management',
          ],
        },
        markdownBody: `### Diagnóstico e Ingeniería de Procesos TI con ITIL 4

1. **Análisis Cuantitativo del Flujo de Valor (Caso DevShop):** Se demostró que el equipo de ingeniería solo invierte **3 días (19%)** codificando, mientras que **Pruebas (5 días / 31%)** y **Aprobación (4 días / 25%)** absorben el **56% del Lead Time total (16 días)**.
2. **Intervención Arquitectónica:** Aplicación combinada de *Service Validation and Testing* (pruebas automatizadas integradas al pipeline), *Change Enablement* (cambios estándar pre-autorizados) y *Release/Deployment Management*, reduciendo el ciclo a **8–10 días**.
3. **Gobierno y Gestión de Riesgos:** Diseño de mapas arquitectónicos para las **4 Dimensiones**, **Sistema de Valor del Servicio (Unidad 5)**, **Flujos de Valor (Unidad 6)**, **Prácticas ITIL (Unidad 7)** y **Gestión de Riesgos con KRIs**.`,
        evidenceSlots: [
          {
            slotId: 'itil4-svs-mapa',
            label: 'Arquitectura Visual del Sistema de Valor del Servicio (SVS) ITIL 4',
            expectedType: 'image',
            category: 'architecture',
            suggestedAlt:
              'Diagrama arquitectónico del Sistema de Valor del Servicio (SVS) de ITIL 4 elaborado por Emmanuel Baltazar López',
            suggestedCaption:
              'Unidad 5: Componentes del Sistema de Valor del Servicio (Principios Guía, Gobernanza, Cadena de Valor, Prácticas y Mejora Continua).',
            required: true,
          },
          {
            slotId: 'itil4-cuatro-dimensiones',
            label: 'Mapa Conceptual de las 4 Dimensiones de Gestión de Servicios',
            expectedType: 'image',
            category: 'architecture',
            suggestedAlt:
              'Mapa conceptual de las Cuatro Dimensiones de la Gestión de Servicios en ITIL 4',
            suggestedCaption:
              'Equilibrio holístico entre Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, y Procesos y Flujos de Valor.',
            required: true,
          },
          {
            slotId: 'itil4-devshop-pdf',
            label: 'Documento PDF: Caso DevShop Flujo de Valor y Mejora Continua con ITIL 4',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento técnico PDF del Caso DevShop sobre flujo de valor y mejora continua con ITIL 4',
            suggestedCaption:
              'Análisis del flujo de valor de 16 días, cuellos de botella y aplicación del modelo de mejora continua.',
            required: true,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 10. ADMINISTRACIÓN DE PROYECTOS DE SISTEMAS — ECOUMAD (5TO SEMESTRE)
      // ========================================================================
      {
        slug: 'administracion-proyectos-ecoumad',
        section: 'academic-projects',
        title: 'ECOUMAD (Campus Verde Digital) — Dirección, Cronograma Gantt y Presupuesto de Sistemas',
        subtitle: 'Administración de Proyectos de Sistemas · Planificación PMI, Matriz Funcional RACI, Costos y Modelos Predictivos',
        summary:
          'Ingeniería de gestión y arquitectura del proyecto ECOUMAD (15/09/2025 – 04/12/2025): cronograma maestro de 5 fases (106 días/unidades), presupuesto financiero de $47,000 MXN, matrices de responsabilidad E/P/C/R/A y modelos de regresión en Python.',
        publishDate: '2025-12-04',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Dirección de Proyectos TI', 'Diagrama de Gantt', 'Presupuesto $47,000 MXN', 'Matriz RACI', 'Python Regresión'],
        techStack: [
          { name: 'PMBOK / Gestión de Proyectos TI', category: 'methodology' },
          { name: 'Gantt & Ruta Crítica', category: 'tool' },
          { name: 'Matriz Funcional (E/P/C/R/A)', category: 'methodology' },
          { name: 'Python (Predicción / Regresión Lineal)', category: 'language' },
          { name: 'Arquitectura Web & BD (Módulo 1)', category: 'database' },
        ],
        metrics: [
          {
            label: 'Presupuesto Total General',
            value: '$47,000 MXN',
            description: '$38,100 MXN en las 5 fases operativas + $9,000 MXN en gastos fijos e indirectos (Sep–Dic 2025).',
          },
          {
            label: 'Horizonte de Ejecución',
            value: '5 Fases · 106 Días',
            description: 'Inicio (8d), Planeación (24d), Ejecución (48d), Control (36d) y Cierre (24d) del 15/09 al 04/12/2025.',
          },
          {
            label: 'Gobernanza de Equipo',
            value: '5 Roles + 2 Matrices',
            description: 'Matriz Funcional de Responsabilidades (E, P, C, R, A) y Matriz Oficial de Comunicación.',
          },
        ],
        deliverables: [
          {
            title: 'Cronograma Maestro de Gantt y Estructura de Desglose de Trabajo (EDT)',
            type: 'Technical-Report',
            description: 'Secuenciación completa de tareas, dependencias, entregables y responsables del 15/09/2025 al 04/12/2025.',
            url: '',
          },
          {
            title: 'Presupuesto Maestro por Fase y Mes + Matrices Funcional y de Comunicación',
            type: 'Technical-Report',
            description: 'Costeo detallado por recurso humano/licencias y protocolos formales de escalamiento.',
            url: '',
          },
          {
            title: 'Scripts de Predicción y Regresión Lineal en Python',
            type: 'Source-Code',
            description: 'Modelos cuantitativos para estimación y análisis predictivo aplicados a la asignatura.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Administración de Proyectos de Sistemas',
          semester: '5to Semestre',
          academicPeriod: 'Septiembre – Diciembre 2025',
          professor: '',
          problemStatement:
            'Los proyectos tecnológicos universitarios suelen fracasar o desfasarse cuando carecen de una línea base integrada de alcance (EDT), cronograma con dependencias reales, presupuesto costeado por hora-rol y canales formales de comunicación y responsabilidad.',
          architecturePattern: 'Gobernanza Integrada de Proyecto (Alcance + Cronograma Gantt + Costos + Matrices RACI/Comunicación)',
          architectureSummary:
            'Planificación integral de la plataforma ECOUMAD (Campus Verde Digital) estructurada en 5 fases formales (Inicio, Planeación, Ejecución, Control y Cierre), asignando a Emmanuel Baltazar López la responsabilidad de programación backend y base de datos del Módulo 1, definición de dependencias del cronograma y diseño de la Matriz de Comunicación.',
          views4Plus1: {
            logical: 'División modular del sistema (Módulo 1 Backend/BD y Módulo 2 Frontend/Integración) cruzada contra la Matriz Funcional E/P/C/R/A.',
            process: 'Flujo de 5 fases del ciclo de vida del proyecto con revisiones quincenales, control de cambios y auditoría de calidad.',
            development: 'Asignación técnica de desarrollo del Módulo 1 (código y base de datos) y scripts analíticos en Python (Regresión Lineal).',
            physical: 'Infraestructura cloud/hosting universitario y herramientas colaborativas (Git, Drive, Slack/Teams).',
            scenarios: 'Control presupuestal mensual (Septiembre $8,100, Octubre $19,700, Noviembre $14,700, Diciembre $4,500 MXN) y seguimiento de hitos.',
          },
          role: 'Programador Backend/BD (Módulo 1) y Especialista en Cronograma de Dependencias y Matriz de Comunicación',
          teamSize: 5,
          teamMembers: [
            'Emmanuel Baltazar López (Programador 1 - Backend y BD)',
            'Oscar Juárez Ortiz (Gerente de Proyecto)',
            'Pedro Emiliano Romero Osorio (Líder Técnico / Arquitecto)',
            'Luis Gael Bonilla Paleta (Programador 2)',
            'David Alejandro (QA / Documentación)',
          ],
          methodology: ['PMBOK Lifecycle', 'Diagrama de Gantt & Ruta Crítica', 'Matriz RACI (E/P/C/R/A)', 'Estimación Financiera por Fase'],
        },
        markdownBody: `### Ingeniería de Planificación y Control del Proyecto ECOUMAD

- **Desglose Presupuestal Exacto (\`$47,000 MXN\`):**
  - *Fase 1 Inicio:* \`$4,100 MXN\` · *Fase 2 Planeación:* \`$7,800 MXN\` · *Fase 3 Ejecución:* \`$12,300 MXN\` · *Fase 4 Control:* \`$10,800 MXN\` · *Fase 5 Cierre:* \`$3,000 MXN\` (Subtotal Fases: \`$38,100 MXN\`).
  - *Gastos Fijos, Administrativos e Indirectos (Sep–Dic):* \`$9,000 MXN\`.
- **Responsabilidad Técnica Directa:** Ejecución del **Módulo 1 (Código y Base de Datos)**, modelado de dependencias del **Diagrama de Gantt** y autoría de la **Matriz Oficial de Comunicación**.`,
        evidenceSlots: [
          {
            slotId: 'ecoumad-gantt-pdf',
            label: 'Cronograma Maestro de Gantt (PDF Oficial)',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Diagrama de Gantt completo del proyecto ECOUMAD con las 5 fases del 15/09/2025 al 04/12/2025',
            suggestedCaption:
              'Planificación temporal de las 5 fases (Inicio, Planeación, Ejecución, Control y Cierre).',
            required: true,
          },
          {
            slotId: 'ecoumad-presupuesto-pdf',
            label: 'Presupuesto Maestro Detallado ($47,000 MXN)',
            expectedType: 'pdf',
            category: 'metrics-chart',
            suggestedAlt:
              'Documento de presupuesto maestro del proyecto ECOUMAD desglosado por fase y por mes de septiembre a diciembre de 2025',
            suggestedCaption:
              'Costeo financiero de recursos humanos, licencias y gastos indirectos por $47,000 MXN.',
            required: true,
          },
          {
            slotId: 'ecoumad-matrices-pdf',
            label: 'Matriz Funcional de Responsabilidades (E/P/C/R/A) y Matriz de Comunicación',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Matriz funcional de asignación de responsabilidades y matriz oficial de comunicación del proyecto ECOUMAD',
            suggestedCaption:
              'Gobernanza operativa y canales formales de reporte entre los 5 integrantes del equipo.',
            required: false,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 11. MARCOS DE DESARROLLO DE SISTEMAS — ERP SAP S/4HANA, ASPEL SAE & GLASSME (4TO SEM.)
      // ========================================================================
      {
        slug: 'marcos-desarrollo-erp-sap-aspel',
        section: 'academic-projects',
        title: 'Sistematización Empresarial ERP: SAP S/4HANA (FI/MM/SD), Aspel SAE 7.0 y Caso Glassme',
        subtitle: 'Marcos de Desarrollo de Sistemas · Configuración Firebird/SAE, Contabilidad G/L & AP en SAP y Modelado de Cadena de Suministro',
        summary:
          'Implementación comparativa de marcos empresariales ERP: modelado de datos y estados para la cadena de suministro Glassme, despliegue técnico de Aspel SAE 7.0 sobre motor Firebird y ejecución de 12 escenarios financieros/logísticos en SAP S/4HANA.',
        publishDate: '2025-04-20',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['SAP S/4HANA FI/MM/SD', 'Aspel SAE 7.0', 'Firebird DB', 'Supply Chain Glassme', 'ERP Architecture'],
        techStack: [
          { name: 'SAP S/4HANA (FI, G/L, AP, MM, SD)', category: 'erp-enterprise', version: 'Global Bike US00' },
          { name: 'Aspel SAE 7.0', category: 'erp-enterprise' },
          { name: 'Firebird SQL', category: 'database', version: 'SAE67001.FDB' },
          { name: 'UML & Diseño Relacional', category: 'architecture' },
        ],
        metrics: [
          {
            label: 'Escenarios SAP FI / G/L / AP',
            value: '12 Prácticas + MM/SD',
            description: 'Cuentas de mayor, acreedores, facturas de gastos/impuestos, cheques y conciliación de $3,500 USD.',
          },
          {
            label: 'Infraestructura ERP Local',
            value: 'Aspel SAE 7.0 + Firebird',
            description: 'Configuración de servidor de datos, parámetros fiscales CFDI 3.3, perfiles y control de inventario.',
          },
          {
            label: 'Modelado Caso Glassme',
            value: 'SCM + 2 BDs + Estados',
            description: 'Arquitectura de cadena de suministro, BD de Compras, BD de Ventas y Diagrama de Estados.',
          },
        ],
        deliverables: [
          {
            title: 'Trabajo Final SAP S/4HANA Finanzas (TF3erP_EBL) + Manuales MM y SD',
            type: 'Technical-Report',
            description: 'Evidencia paso a paso con números de documento y asientos contables verificados en SAP.',
            url: '',
          },
          {
            title: 'Manual Técnico de Instalación y Configuración de Aspel SAE 7.0',
            type: 'SAD-Architecture-Doc',
            description: 'Puesta en marcha de base de datos Firebird, alta de empresa, folios y seguridad por roles.',
            url: '',
          },
          {
            title: 'Modelos Arquitectónicos Caso Glassme (SCM, BD Compras, BD Ventas y Estados)',
            type: 'Database-Model',
            description: 'Diagramas relacionales y de transición de estados del ciclo comercial.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Marcos de Desarrollo de Sistemas',
          semester: '4to Semestre',
          academicPeriod: 'Primavera 2025',
          professor: 'Mtra. Martha Patricia Hernández Zamora',
          problemStatement:
            'Las organizaciones manufactureras y comercializadoras requieren integrar sus procesos de abastecimiento, inventarios, ventas y contabilidad financiera bajo motores ERP confiables, evitando islas de información entre almacén y finanzas.',
          architecturePattern: 'Arquitectura ERP Integrada (Módulos Comerciales MM/SD/SAE ↔ Motor Contable Financiero FI/G/L)',
          architectureSummary:
            'Estudio práctico en tres capas: 1) Diseño conceptual de cadena de suministro y bases de datos transaccionales (Compras y Ventas) para el caso Glassme; 2) Despliegue on-premise del ERP mexicano Aspel SAE 7.0 conectado a Firebird SQL; y 3) Operación corporativa en SAP S/4HANA (sociedad US00, plan de cuentas GL00).',
          views4Plus1: {
            logical: 'Esquemas relacionales normalizados para Compras (Proveedores, Órdenes, Materias Primas) y Ventas (Clientes, Pedidos, Facturación) en Glassme.',
            process: 'Máquina de estados del pedido y flujos Procure-to-Pay (MM/AP) y Order-to-Cash (SD/AR) con contabilización automática en el Libro Mayor (G/L).',
            development: 'Parametrización de tablas de control en Aspel SAE 7.0 y transacciones Fiori/GUI en SAP S/4HANA.',
            physical: 'Motor relacional Firebird local (`C:\\Program Files (x86)\\Common Files\\Aspel\\Sistemas Aspel\\SAE7.00\\Empresa01\\Datos\\SAE67001.FDB`) y tenant cloud SAP S/4HANA.',
            scenarios: 'Creación de cuentas bancarias y de costos (`7403245`, `1013245`), maestro de acreedor (`1003693` Cardinal Properties), contabilización de facturas (`$3,500 USD`) y emisión/anulación de pagos.',
          },
          role: 'Analista de Sistemas ERP, Modelador de Datos y Consultor Funcional Jr. SAP / Aspel',
          teamSize: 2,
          teamMembers: ['Emmanuel Baltazar López', 'José Brian Molina Nochebuena'],
          methodology: ['Integración de Procesos ERP', 'Modelado Entidad-Relación', 'Contabilidad Financiera SAP FI'],
        },
        markdownBody: `### Evidencia Técnica en Ecosistemas ERP

1. **Caso Glassme (Cadena de Suministro y Bases de Datos):** Modelado de la arquitectura logística extremo a extremo respaldada por los esquemas relacionales de **Compras (\`DB_Compras\`)**, **Ventas (\`DBVentas\`)** y su **Diagrama de Estados (\`DEstados\`)**.
2. **Despliegue de Aspel SAE 7.0:** Instalación de motor **Firebird**, configuración de parámetros del sistema, folios fiscales y administración de usuarios/roles.
3. **SAP S/4HANA (FI, MM y SD):** Ejecución documentada de **12 ejercicios financieros en Global Bike (\`US00\`)** con folios reales de contabilización (\`1803245\`, \`3303245\`, \`6313245\`, \`100000200\`, \`5105600401\`, \`1500000155\`), complementado con los manuales prácticos de **SAP MM** y **SAP SD**.`,
        evidenceSlots: [
          {
            slotId: 'marcos-glassme-scm',
            label: 'Arquitectura de Cadena de Suministros — Caso Glassme',
            expectedType: 'image',
            category: 'architecture',
            suggestedAlt:
              'Diagrama de arquitectura de la cadena de suministros para el caso Glassme',
            suggestedCaption:
              'Flujo integral desde abastecimiento de materia prima hasta distribución y entrega al cliente.',
            required: true,
          },
          {
            slotId: 'marcos-db-ventas',
            label: 'Modelo Relacional de Base de Datos de Ventas y Compras',
            expectedType: 'image',
            category: 'er-diagram',
            suggestedAlt:
              'Diagrama relacional de la base de datos de ventas elaborado por Emmanuel Baltazar López y José Brian Molina Nochebuena',
            suggestedCaption:
              'Estructura de tablas transaccionales para el control de pedidos, clientes, productos y entregas.',
            required: true,
          },
          {
            slotId: 'marcos-sap-fi-pdf',
            label: 'Trabajo Final SAP S/4HANA Finanzas (TF3erP_EBL.pdf)',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento PDF del Trabajo Final de Tercer Parcial con 12 ejercicios resueltos en SAP S/4HANA FI',
            suggestedCaption:
              'Evidencia completa de transacciones G/L y Cuentas por Pagar ejecutadas por Emmanuel Baltazar López.',
            required: true,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // 12. MODELADO DE NEGOCIOS Y REQUERIMIENTOS — ARENA & TRAJE HIPERFLEX (2DO SEM.)
      // ========================================================================
      {
        slug: 'modelado-negocios-arena-traje-mnr',
        section: 'academic-projects',
        title: 'Modelado de Negocios y Requerimientos: Arena Plus Ultra & Traje Inteligente "La Flaca Hiperflex"',
        subtitle: 'Modelado de Negocios y Requerimientos (2do Sem.) · 7 Minutas de Cliente, Design Thinking, UML y Prototipo Wearable',
        summary:
          'Ingeniería de requerimientos desde cero con cliente real/simulado: 7 minutas de entrevista, encuesta de mercado, Design Thinking (Point of View), Plan SCM/QA en Rational Rose 7.0, 123 reglas de negocio, diagramas UML y diseño del traje háptico "La Flaca Hiperflex".',
        publishDate: '2024-05-05',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Modelado de Negocios', 'Design Thinking', 'UML (Casos de Uso/Objetos/Estados)', 'Rational Rose 7.0', 'Wearable Tech'],
        techStack: [
          { name: 'UML 2.x (CU, Objetos, Estados, Actividades)', category: 'architecture' },
          { name: 'IBM Rational Rose 7.0 & Draw.io', category: 'tool' },
          { name: 'Design Thinking (PoV)', category: 'methodology' },
          { name: 'Plan de Configuración y Calidad (SCM/QA)', category: 'testing-qa' },
        ],
        metrics: [
          {
            label: 'Levantamiento con Cliente',
            value: '7 Minutas + Encuesta',
            description: 'Sesiones formales de entrevista (febrero–abril 2024) y estudio cuantitativo de mercado gamer.',
          },
          {
            label: 'Catálogo Normativo',
            value: '123 Reglas de Negocio',
            description: 'Trazadas hacia 6 Casos de Uso principales, 11 Formatos (FO_01–11) y 14 Reportes (RE_01–14).',
          },
          {
            label: 'Innovación Hardware/Negocio',
            value: 'Traje "La Flaca Hiperflex"',
            description: 'Propuesta de traje inteligente con sensores de movimiento y retroalimentación háptica.',
          },
        ],
        deliverables: [
          {
            title: 'Memoria Técnica de Modelado de Negocios (103 Páginas)',
            type: 'SAD-Architecture-Doc',
            description: 'Antecedentes, estructura organizacional, minutas, Design Thinking, Plan SCM/QA y especificación UML.',
            url: '',
          },
          {
            title: 'Suite de Diagramas UML (Casos de Uso, Objetos, Generalización, Estados y Arquitectura SW)',
            type: 'SAD-Architecture-Doc',
            description: 'Artefactos visuales del dominio de negocio, software de cliente y software de empleados.',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          course: 'Modelado de Negocios y Requerimientos',
          semester: '2do Semestre',
          academicPeriod: 'Primavera 2024 (05/05/2024)',
          professor: 'Mtra. Martha Patricia Hernández Zamora',
          problemStatement:
            'Necesidad de transformar la visión emprendedora de una arena de videojuegos inmersiva en un modelo de negocio formal, validado con usuarios reales y respaldado por una especificación de software libre de ambigüedades.',
          architecturePattern: 'Arquitectura de Negocio Orientada a Dominio + Especificación Formal UML con Control de Configuración',
          architectureSummary:
            'Cimentación del proyecto Arena de Videojuegos Plus Ultra por PEMMA Industries: definición de misión/visión, organigrama, levantamiento de requerimientos mediante 7 minutas y Design Thinking, establecimiento de estándares de nomenclatura (CU, DCU, DA, FA, CP, DE, RN, MSJ, PA, FO, RE), separación de arquitecturas de software para Clientes y Empleados, y conceptualización del traje háptico "La Flaca Hiperflex".',
          views4Plus1: {
            logical: 'Modelado de Objetos con y sin atributos, Diagrama de Generalización de actores/entidades y catálogo de 123 Reglas de Negocio.',
            process: 'Diagramas de Actividades, flujos alternos (FA) y 11 Diagramas de Estados (DE_01 a DE_11).',
            development: 'Plan de Configuración y Calidad sobre Rational Rose Enterprise Edition 7.0 con control estricto de identificadores.',
            physical: 'Separación de interfaces y subsistemas: Arquitectura de Software para Clientes y Arquitectura de Software para Empleados + Traje Inteligente.',
            scenarios: '6 Casos de Uso troncales (CU_01 Usuarios, CU_02 Membresías, CU_03 Reservaciones, CU_04 Torneos, CU_05 Paquetes, CU_06 Ventas).',
          },
          role: 'Co-fundador de PEMMA Industries, Analista de Negocio y Modelador UML',
          teamSize: 2,
          teamMembers: ['Emmanuel Baltazar López', 'Pedro Emiliano Romero Osorio'],
          methodology: ['Design Thinking (Point of View)', 'Ingeniería de Requerimientos', 'UML', 'Gestión de Configuración (SCM)'],
        },
        markdownBody: `### Cimientos de Ingeniería de Requerimientos y Modelado de Negocio

- **Descubrimiento Empático y Validación:** Realización de **7 minutas de levantamiento** con el cliente, aplicación de encuesta de mercado y síntesis mediante matriz **Design Thinking (Usuario + Necesidad + Insight)** que dio origen al diferenciador del **Traje Inteligente *"La Flaca Hiperflex"*** con sensores hápticos.
- **Rigor en Modelado Visual:** Construcción de los diagramas de **Casos de Uso**, **Modelado de Objetos**, **Generalización**, **Estados**, **Modelo de Arena** y separación arquitectónica entre **SW Cliente** y **SW Empleados**.`,
        evidenceSlots: [
          {
            slotId: 'mnr-casos-uso',
            label: 'Diagrama de Casos de Uso y Modelado de Objetos (UML)',
            expectedType: 'image',
            category: 'uml-diagram',
            suggestedAlt:
              'Diagrama UML de casos de uso del sistema Arena de Videojuegos Plus Ultra elaborado en Modelado de Negocios y Requerimientos',
            suggestedCaption:
              'Interacción de actores con los casos de uso troncales del negocio.',
            required: true,
          },
          {
            slotId: 'mnr-traje-prototipo',
            label: 'Diseño Conceptual del Traje Inteligente "La Flaca Hiperflex" y Design Thinking',
            expectedType: 'image',
            category: 'stand-photo',
            suggestedAlt:
              'Prototipo visual del traje inteligente La Flaca Hiperflex con sensores hápticos para la Arena Plus Ultra',
            suggestedCaption:
              'Propuesta de innovación tecnológica surgida del proceso de Design Thinking.',
            required: true,
          },
          {
            slotId: 'mnr-documento-pdf',
            label: 'Memoria Completa PDF de Modelado de Negocios (103 páginas)',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Documento técnico PDF de 103 páginas de Modelado de Negocios y Requerimientos por Emmanuel Baltazar López y Pedro Emiliano Romero Osorio',
            suggestedCaption:
              'Especificación completa: minutas, encuesta, Design Thinking, Plan SCM/QA, 123 reglas de negocio y diagramas UML.',
            required: true,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // SECCIÓN 6: CERTIFICACIÓN SAP Y CREDENCIALES OFICIALES (/certifications)
      // ========================================================================
      {
        slug: 'sap-erp-s4hana-abap-signavio',
        section: 'certifications',
        title: 'Formación y Especialización en Ecosistema SAP ERP (S/4HANA, ABAP, Signavio & Crystal Reports)',
        subtitle: 'SAP University Alliances / Plan Curricular UMAD · Procesos Empresariales End-to-End',
        summary:
          'Dominio práctico de módulos logísticos y comerciales en SAP S/4HANA (MM y SD con Global Bike v4.2), desarrollo ABAP para datos masivos, modelado BPMN 2.0 en SAP Signavio y reportería Crystal Reports.',
        publishDate: '2026-09-08',
        featured: true,
        bentoSpan: 'col-span-2',
        draft: false,
        tags: ['SAP S/4HANA', 'SAP MM & SD', 'SAP ABAP', 'SAP Signavio', 'SAP Crystal Reports'],
        techStack: [
          { name: 'SAP S/4HANA', category: 'erp-enterprise', version: 'Global Bike v4.2' },
          { name: 'SAP MM (Materials Management)', category: 'erp-enterprise' },
          { name: 'SAP SD (Sales & Distribution)', category: 'erp-enterprise' },
          { name: 'SAP ABAP', category: 'language' },
          { name: 'SAP Signavio', category: 'erp-enterprise' },
          { name: 'SAP Crystal Reports', category: 'erp-enterprise' },
        ],
        metrics: [
          {
            label: 'Pilares SAP Cubiertos',
            value: '4 Tecnologías',
            description: 'ERP S/4HANA (MM/SD), Lenguaje ABAP, BPM Signavio y BI Crystal Reports.',
          },
          {
            label: 'Trayectoria Práctica',
            value: '4to – 7mo Semestre',
            description: 'Aplicación progresiva en asignaturas de ingeniería y procesos empresariales UMAD.',
          },
        ],
        deliverables: [],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          credentialTitle: 'Especialización Académica y Credencialización SAP (S/4HANA, ABAP, Signavio, Crystal Reports)',
          issuer: 'SAP / Universidad Madero (SAP University Alliances)',
          credentialId: 'Editable desde Admin al cargar constancia/certificado oficial',
          verificationUrl: '',
          issueDate: '2025 – 2026',
          expirationDate: 'Vigente',
          modulesLearned: [
            {
              code: 'SAP MM',
              name: 'Materials Management (Gestión de Materiales — S/4HANA)',
              description:
                'Ciclo Procure-to-Pay (P2P): requisición de compra, órdenes de compra, recepción de mercancías, verificación de facturas y gestión de maestros de materiales/proveedores en Global Bike v4.2.',
            },
            {
              code: 'SAP SD',
              name: 'Sales and Distribution (Ventas y Distribución — S/4HANA)',
              description:
                'Ciclo Order-to-Cash (O2C): cotizaciones, pedidos de cliente, verificación de disponibilidad, entrega saliente, picking, contabilización de salida de mercancías y facturación.',
            },
            {
              code: 'SAP ABAP',
              name: 'Programación Empresarial ABAP',
              description:
                'Estructuración de programas, tablas internas y procesamiento eficiente de volúmenes masivos de datos empresariales.',
            },
            {
              code: 'SIGNAVIO & CR',
              name: 'SAP Signavio (BPMN 2.0 / SCOR-DS) & SAP Crystal Reports',
              description:
                'Modelado estandarizado de procesos de negocio orientados a calidad y generación de reportes ejecutivos integrados con .NET.',
            },
          ],
          businessProcessApplications: [
            'Ejecución trazable del flujo Procure-to-Pay (aprovisionamiento e inventario) e integración contable en SAP S/4HANA.',
            'Gestión integral del flujo Order-to-Cash desde solicitud comercial hasta despacho logístico y facturación.',
            'Optimización de tiempos de ciclo logístico mediante simulación y rediseño BPMN 2.0 bajo estándar SCOR-DS.',
            'Explotación de bases de datos operativas en reportes gerenciales auditables con SAP Crystal Reports.',
          ],
        },
        markdownBody: `### Aplicación en Ingeniería de Sistemas Empresariales

Esta entrada consolida la formación verificada en tecnologías **SAP** a lo largo del plan de Ingeniería de Software en UMAD. Desde la **Vista Administrador / Editor** puedes actualizar en cualquier momento el **ID de credencial**, enlace de verificación y subir el **PDF o insignia oficial de certificación SAP** tan pronto desees publicarlo.`,
        evidenceSlots: [
          {
            slotId: 'sap-credencial-oficial',
            label: 'Credencial / Certificado Oficial SAP (Imagen o PDF)',
            expectedType: 'any',
            category: 'credential',
            suggestedAlt:
              'Certificado o constancia oficial de acreditación SAP otorgada a Emmanuel Baltazar López',
            suggestedCaption:
              'Documento acreditativo oficial de competencias en ecosistema empresarial SAP.',
            required: true,
          },
          {
            slotId: 'sap-evidencia-s4hana-abap',
            label: 'Capturas de Prácticas en SAP S/4HANA (Global Bike MM/SD) o Código ABAP',
            expectedType: 'image',
            category: 'ui-screenshot',
            suggestedAlt:
              'Captura de pantalla de ejecución transaccional en SAP S/4HANA Fiori / GUI para módulos MM y SD',
            suggestedCaption:
              'Evidencia práctica de ejecución de procesos Procure-to-Pay y Order-to-Cash en entorno SAP.',
            required: false,
          },
        ],
        evidences: [],
      },

      {
        slug: 'aws-academy-cloud-foundations',
        section: 'certifications',
        title: 'AWS Academy Graduate — AWS Academy Cloud Foundations',
        subtitle: 'Amazon Web Services (AWS) · Arquitectura en la Nube, Cómputo, Redes, Almacenamiento y Seguridad',
        summary:
          'Credencial oficial emitida en 2025 acreditando fundamentos de arquitectura cloud en AWS: IAM, VPC, EC2, EBS, S3, RDS, Elastic Load Balancing y Auto Scaling.',
        publishDate: '2025-11-15',
        featured: true,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['AWS Cloud', 'IAM & VPC', 'EC2 & S3', 'RDS', 'Alta Disponibilidad'],
        techStack: [
          { name: 'AWS IAM & VPC', category: 'cloud-devops' },
          { name: 'Amazon EC2 & EBS', category: 'cloud-devops' },
          { name: 'Amazon S3 & RDS', category: 'cloud-devops' },
          { name: 'ELB & Auto Scaling', category: 'architecture' },
        ],
        metrics: [
          {
            label: 'Año de Emisión',
            value: '2025',
            description: 'Acreditación oficial AWS Academy Cloud Foundations.',
          },
        ],
        deliverables: [],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          credentialTitle: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
          issuer: 'Amazon Web Services (AWS Academy)',
          credentialId: '',
          verificationUrl: '',
          issueDate: '2025',
          expirationDate: 'Sin expiración',
          modulesLearned: [
            {
              code: 'SEC & NET',
              name: 'Seguridad IAM y Redes Virtuales (Amazon VPC)',
              description: 'Políticas de mínimo privilegio, usuarios/roles IAM, subredes públicas/privadas, tablas de ruteo y Security Groups.',
            },
            {
              code: 'COMP & STOR',
              name: 'Cómputo Elástico (EC2) y Almacenamiento (EBS, S3, RDS)',
              description: 'Aprovisionamiento de instancias, volúmenes persistentes, buckets de objetos y bases de datos relacionales administradas.',
            },
            {
              code: 'SCALE',
              name: 'Elastic Load Balancing & Auto Scaling',
              description: 'Diseño de arquitecturas tolerantes a fallos con escalamiento horizontal automático.',
            },
          ],
          businessProcessApplications: [
            'Despliegue de infraestructuras web desacopladas, seguras y elásticas bajo el marco AWS Well-Architected.',
            'Estimación de costos operativos en la nube y selección óptima entre almacenamiento de bloques, objetos y relacional.',
          ],
        },
        markdownBody: `### Laboratorios Técnicos Acreditados

Incluye prácticas documentadas de configuración de seguridad en **AWS IAM**, diseño de topologías aisladas en **Amazon VPC**, despliegue de servidores en **EC2** con **EBS**, bases de datos **Amazon RDS** y balanceo elástico con **Auto Scaling**.`,
        evidenceSlots: [
          {
            slotId: 'aws-badge-pdf',
            label: 'Insignia Credly o Certificado PDF — AWS Cloud Foundations',
            expectedType: 'any',
            category: 'credential',
            suggestedAlt:
              'Certificado e insignia digital AWS Academy Graduate Cloud Foundations de Emmanuel Baltazar López (2025)',
            suggestedCaption:
              'Acreditación oficial emitida por Amazon Web Services Training and Certification.',
            required: true,
          },
        ],
        evidences: [],
      },

      {
        slug: 'cisco-introduction-to-iot',
        section: 'certifications',
        title: 'Introduction to IoT — Cisco Networking Academy',
        subtitle: 'Cisco Systems · Digitalización, Sensores, Conectividad IP y Automatización',
        summary:
          'Certificación emitida por Cisco Networking Academy (2025) sobre arquitectura de soluciones del Internet de las Cosas, redes convergentes, seguridad y transformación digital.',
        publishDate: '2025-10-10',
        featured: false,
        bentoSpan: 'col-span-1',
        draft: false,
        tags: ['Cisco NetAcad', 'IoT', 'Redes IP', 'Automatización'],
        techStack: [
          { name: 'IoT Architecture', category: 'architecture' },
          { name: 'Cisco Networking', category: 'cloud-devops' },
          { name: 'Telemetría & Sensores', category: 'tool' },
        ],
        metrics: [
          {
            label: 'Año de Emisión',
            value: '2025',
            description: 'Credencial oficial Cisco Networking Academy.',
          },
        ],
        deliverables: [],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          credentialTitle: 'Introduction to IoT',
          issuer: 'Cisco Networking Academy',
          credentialId: '',
          verificationUrl: '',
          issueDate: '2025',
          expirationDate: 'Sin expiración',
          modulesLearned: [
            {
              code: 'IOT-ARCH',
              name: 'Ecosistemas Ciberfísicos y Conectividad en Red',
              description: 'Integración de sensores, actuadores, microcontroladores, pasarelas de red y flujos de datos hacia la nube.',
            },
          ],
          businessProcessApplications: [
            'Base conceptual y arquitectónica aplicada posteriormente en proyectos físicos con ESP32, Arduino y APIs REST en Python/Flask.',
          ],
        },
        markdownBody: `### Impacto en Formación Técnica

Fundamenta el diseño de redes de sensores, flujos de datos máquina a máquina (M2M) y consideraciones de ciberseguridad en dispositivos conectados.`,
        evidenceSlots: [
          {
            slotId: 'cisco-iot-certificado',
            label: 'Certificado PDF / Insignia — Cisco Introduction to IoT',
            expectedType: 'any',
            category: 'credential',
            suggestedAlt:
              'Certificado oficial Introduction to IoT de Cisco Networking Academy otorgado a Emmanuel Baltazar López (2025)',
            suggestedCaption:
              'Constancia oficial emitida por Cisco Networking Academy en 2025.',
            required: true,
          },
        ],
        evidences: [],
      },

      // ========================================================================
      // SECCIÓN 7: SERVICIO SOCIAL (/community-service)
      // ========================================================================
      {
        slug: 'hospital-comunitario-ixtacamaxtitlan',
        section: 'community-service',
        title: 'Servicio Social — Hospital Comunitario Ixtacamaxtitlán (IMSS-BIENESTAR)',
        subtitle: 'Servicios de Salud del Estado de Puebla · Área de Administración (480 Horas)',
        summary:
          'Prestación de Servicio Social universitario apoyando la gestión documental, control de información administrativa y sistematización operativa en unidad hospitalaria comunitaria.',
        publishDate: '2026-06-01',
        featured: true,
        bentoSpan: 'col-span-3',
        draft: false,
        tags: ['Servicio Social', 'Sector Salud Público', 'Gestión Administrativa', '480 Horas'],
        techStack: [
          { name: 'Gestión de Información', category: 'tool' },
          { name: 'Control Documental', category: 'methodology' },
          { name: 'Optimización Administrativa', category: 'methodology' },
        ],
        metrics: [
          {
            label: 'Duración Oficial',
            value: '480 Horas',
            description: 'Periodo comprendido del 01 de junio de 2026 al 01 de diciembre de 2026.',
          },
          {
            label: 'Área Asignada',
            value: 'Administración',
            description: 'Hospital Comunitario Ixtacamaxtitlán — Servicios de Salud del Estado de Puebla.',
          },
        ],
        deliverables: [
          {
            title: 'Carta Oficial de Aceptación de Servicio Social (26/05/2026)',
            type: 'Technical-Report',
            description:
              'Emitida por la Dra. Leticia Colín Martínez (Encargada de la Dirección) y L.Arq. Gemalli Edden López Galicia (Administradora).',
            url: '',
          },
        ],
        links: {
          repositoryUrl: '',
          liveDemoUrl: '',
          documentationUrl: '',
          videoUrl: '',
        },
        details: {
          receivingInstitution: 'Hospital Comunitario Ixtacamaxtitlán (Servicios de Salud del Estado de Puebla / IMSS-BIENESTAR)',
          departmentOrArea: 'Área de Administración',
          period: '01 de junio de 2026 – 01 de diciembre de 2026',
          totalHours: 480,
          role: 'Prestador de Servicio Social — Ingeniería de Software (Matrícula UMAD 20124558)',
          socialImpact:
            'Fortalecimiento de la capacidad administrativa de una institución pública de salud comunitaria en Ixtacamaxtitlán, Puebla, agilizando el respaldo documental y el seguimiento de procesos internos en beneficio de la atención a la población.',
          technicalImpact:
            'Organización estructurada de expedientes administrativos, estandarización de formatos digitales, seguimiento de reportes periódicos y apoyo técnico-informático al personal del área.',
          keyActivities: [
            'Organización, digitalización y control de documentación oficial en el Área de Administración hospitalaria.',
            'Apoyo en el registro, validación y seguimiento de reportes operativos e inventarios internos.',
            'Asistencia técnica en herramientas ofimáticas y sistematización de información administrativa.',
            'Elaboración de reportes trimestrales de avance conforme a la normatividad de Servicio Social UMAD.',
          ],
        },
        markdownBody: `### Contexto Institucional Verificado

- **Institución Receptora:** Hospital Comunitario Ixtacamaxtitlán (Servicios de Salud del Estado de Puebla).
- **Autoridades Institucionales:** Dra. Leticia Colín Martínez (*Encargada de la Dirección*) y L.Arq. Gemalli Edden López Galicia (*Administradora*).
- **Nota de Edición:** Puedes subir a continuación la **Carta de Aceptación**, tus **Reportes Trimestrales**, **Carta de Término** y fotografías autorizadas directamente en los espacios preparados.`,
        evidenceSlots: [
          {
            slotId: 'ss-carta-aceptacion',
            label: 'Carta Oficial de Aceptación (PDF o Imagen)',
            expectedType: 'any',
            category: 'official-document',
            suggestedAlt:
              'Carta oficial de aceptación de Servicio Social en el Hospital Comunitario Ixtacamaxtitlán emitida el 26 de mayo de 2026',
            suggestedCaption:
              'Oficio de aceptación para cubrir 480 horas en el Área de Administración (01/06/2026 – 01/12/2026).',
            required: true,
          },
          {
            slotId: 'ss-reportes-trimestrales',
            label: 'Reportes de Actividades / Carta de Liberación (PDF)',
            expectedType: 'pdf',
            category: 'official-document',
            suggestedAlt:
              'Reporte oficial de actividades de Servicio Social de Emmanuel Baltazar López para Universidad Madero',
            suggestedCaption:
              'Seguimiento formal de horas y actividades desempeñadas en la institución receptora.',
            required: false,
          },
          {
            slotId: 'ss-galeria-evidencia',
            label: 'Evidencia Fotográfica Institucional',
            expectedType: 'image',
            category: 'event-photo',
            suggestedAlt:
              'Evidencia fotográfica de prestación de Servicio Social en el Hospital Comunitario Ixtacamaxtitlán',
            suggestedCaption:
              'Registro visual de colaboración en el Área de Administración.',
            required: false,
          },
        ],
        evidences: [],
      },
    ],
  });

  return populateRealUmadEvidencesSync(db);
}
