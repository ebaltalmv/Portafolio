import fsSync from 'node:fs';
import path from 'node:path';
import type { EvidenceCategory, PortfolioDatabase, SectionKey, UploadedEvidence } from './schemas';

const UMAD_ROOT = 'c:\\Users\\emmab\\Desktop\\UMAD';
const DATA_DIR = path.resolve(process.cwd(), 'data');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');

interface SeedFileSpec {
  id: string;
  section: SectionKey;
  slug: string;
  sourceRelPath: string;
  title: string;
  alt: string;
  caption: string;
  category: EvidenceCategory;
  slotId?: string;
  isCover?: boolean;
}

const SEED_EVIDENCE_FILES: SeedFileSpec[] = [
  // ==========================================================================
  // 1. 2doSemestre\MNR — Modelado de Negocios y Requerimientos (Arena & Traje Hiperflex)
  // ==========================================================================
  {
    id: 'ev-mnr-casos-uso',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\DiagramaCasosUso.drawio.png',
    title: 'Diagrama General de Casos de Uso — Arena de Videojuegos Plus Ultra',
    alt: 'Diagrama UML de casos de uso del sistema Arena de Videojuegos Plus Ultra elaborado en Modelado de Negocios y Requerimientos',
    caption: 'Interacción de actores (Cliente, Empleado, Administrador) con los casos de uso troncales CU_01 a CU_06.',
    category: 'uml-diagram',
    slotId: 'mnr-casos-uso',
    isCover: true,
  },
  {
    id: 'ev-mnr-traje-hiperflex',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\Traj.png',
    title: 'Prototipo Conceptual: Traje Inteligente "La Flaca Hiperflex"',
    alt: 'Diseño visual del traje inteligente La Flaca Hiperflex con sensores de movimiento y retroalimentación háptica para la Arena Plus Ultra',
    caption: 'Innovación de hardware wearable diseñada por PEMMA Industries a partir del proceso de Design Thinking.',
    category: 'stand-photo',
    slotId: 'mnr-traje-prototipo',
  },
  {
    id: 'ev-mnr-modelado-objetos',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\ModeladoDeObjetos.drawio.png',
    title: 'Modelado de Objetos del Dominio — Arena Plus Ultra',
    alt: 'Diagrama UML de modelado de objetos con relaciones y atributos del dominio Arena Plus Ultra',
    caption: 'Estructura de objetos del negocio trazada bajo estándares del Plan de Configuración y Calidad.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-mnr-generalizacion',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\Diagramas_Actividades\\Diagrama_Generalizacion.drawio.png',
    title: 'Diagrama de Generalización y Jerarquía de Entidades',
    alt: 'Diagrama UML de generalización y herencia de actores y entidades del sistema Arena Plus Ultra',
    caption: 'Jerarquía de especialización modelada para usuarios, membresías y servicios.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-mnr-sw-cliente',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\SW cliente.drawio.png',
    title: 'Arquitectura de Navegación — Software para Clientes',
    alt: 'Diagrama de arquitectura de módulos del software orientado al cliente en Arena Plus Ultra',
    caption: 'Módulos de autoservicio para registro, compra de membresías, reservaciones e inscripción a torneos.',
    category: 'architecture',
  },
  {
    id: 'ev-mnr-sw-empleados',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\SW para empleados.drawio.png',
    title: 'Arquitectura de Navegación — Software para Empleados',
    alt: 'Diagrama de arquitectura de módulos del software interno para empleados y administración de la arena',
    caption: 'Subsistema administrativo para control operativo de estaciones, paquetes, ventas y reportes.',
    category: 'architecture',
  },
  {
    id: 'ev-mnr-design-thinking',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\DesignThinkingEP.jpg',
    title: 'Matriz Design Thinking y Empatía (PEMMA Industries)',
    alt: 'Evidencia gráfica del proceso de Design Thinking elaborado por Emmanuel Baltazar López y Pedro Emiliano Romero Osorio',
    caption: 'Síntesis de hallazgos de usuario, necesidades e insights del estudio de mercado.',
    category: 'ui-screenshot',
  },
  {
    id: 'ev-mnr-modelo-arena-pdf',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\Modelo de arena de videojuegos.pdf',
    title: 'Layout Arquitectónico de la Arena de Videojuegos (PDF)',
    alt: 'Plano y distribución espacial del modelo de arena de videojuegos Plus Ultra en formato PDF',
    caption: 'Distribución física de zonas de juego, estaciones de realidad virtual, snackbar y recepción.',
    category: 'architecture',
  },
  {
    id: 'ev-mnr-diagrama-estados-pdf',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\Diagramas_Actividades\\Diagrama_Estados.drawio.pdf',
    title: 'Diagramas de Estados UML (DE_01 – DE_11)',
    alt: 'Documento PDF con los diagramas de transición de estados UML del sistema Arena Plus Ultra',
    caption: 'Máquinas de estado para cuentas de usuario, reservaciones, préstamos y torneos.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-mnr-memoria-completa-pdf',
    section: 'academic-projects',
    slug: 'modelado-negocios-arena-traje-mnr',
    sourceRelPath: '2doSemestre\\MNR\\Modelado_de_negocios_Emanmuel-BL_PedroE-RO.docx.pdf',
    title: 'Memoria Técnica Completa: Modelado de Negocios y Requerimientos (103 Págs.)',
    alt: 'Documento oficial PDF de 103 páginas del proyecto de Modelado de Negocios por Emmanuel Baltazar López y Pedro Emiliano Romero Osorio',
    caption: 'Incluye las 7 minutas con cliente, encuesta, Design Thinking, Plan SCM/QA, 123 reglas de negocio y especificación completa.',
    category: 'official-document',
    slotId: 'mnr-documento-pdf',
  },

  // ==========================================================================
  // 2. 3erSemestre\PDS — Proceso de Diseño de Sistemas (Arena Plus Ultra)
  // ==========================================================================
  {
    id: 'ev-pds-objetos-atributos',
    section: 'academic-projects',
    slug: 'arena-videojuegos-plus-ultra',
    sourceRelPath: '2doSemestre\\MNR\\Diagramas_Actividades\\ModeladoDeObjetos01.drawio.png',
    title: 'Diagrama UML de Clases y Objetos con Atributos Tipados',
    alt: 'Diagrama UML de clases y objetos con atributos y cardinalidades para Arena Plus Ultra',
    caption: 'Modelo estructural del sistema utilizado en Proceso de Diseño de Sistemas.',
    category: 'uml-diagram',
    slotId: 'pds-uml-general',
    isCover: true,
  },
  {
    id: 'ev-pds-flujo-actividades',
    section: 'academic-projects',
    slug: 'arena-videojuegos-plus-ultra',
    sourceRelPath: '2doSemestre\\MNR\\Diagramas_Actividades\\FA_04_03.drawio.png',
    title: 'Diagrama de Actividades y Flujo Alterno (FA_04_03)',
    alt: 'Diagrama UML de actividades con carriles detallando el flujo alterno FA_04_03 de gestión de torneos',
    caption: 'Especificación algorítmica de flujos alternos y validaciones de reglas de negocio.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-pds-casos-uso-extendido-pdf',
    section: 'academic-projects',
    slug: 'arena-videojuegos-plus-ultra',
    sourceRelPath: '3erSemestre\\PDS\\Diagrama de CU_240829_092432.pdf',
    title: 'Diagrama Extendido de Casos de Uso (CU_01 a CU_10)',
    alt: 'Diagrama PDF de casos de uso extendidos de Proceso de Diseño de Sistemas',
    caption: 'Ampliación del alcance funcional a 10 casos de uso, 23 formatos y 20 reportes.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-pds-documento-maestro-pdf',
    section: 'academic-projects',
    slug: 'arena-videojuegos-plus-ultra',
    sourceRelPath: '3erSemestre\\PDS\\Modelado_de_sistemas_Emanmuel-BL_JoseB-MN.docx.pdf',
    title: 'Documento Maestro de Diseño de Sistemas y Estudio de Factibilidad ($34,422.31 MXN)',
    alt: 'Documento técnico PDF de Proceso de Diseño de Sistemas elaborado por Emmanuel Baltazar López y José Brian Molina Nochebuena',
    caption: 'Estudio cuádruple de factibilidad (técnica, económica, operativa y legal), 123 reglas de negocio y prototipos.',
    category: 'official-document',
    slotId: 'pds-documento-pdf',
  },
  {
    id: 'ev-pds-navegacion-pptx',
    section: 'academic-projects',
    slug: 'arena-videojuegos-plus-ultra',
    sourceRelPath: '3erSemestre\\PDS\\Diagrama de Navegación del Sistema.pptx',
    title: 'Mapa de Navegación Interactiva del Sistema (.pptx)',
    alt: 'Archivo de presentación con el diagrama de navegación completa de pantallas del sistema Arena Plus Ultra',
    caption: 'Entregable descargable con la arquitectura de navegación entre menús, formatos FO y reportes RE.',
    category: 'deliverable-file',
  },

  // ==========================================================================
  // 3. 4toSemestre\MarcosDesarrollo — ERP SAP S/4HANA, Aspel SAE 7.0 & Caso Glassme
  // ==========================================================================
  {
    id: 'ev-marcos-glassme-scm',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\Cadena de suministros - Glassme.png',
    title: 'Arquitectura de Cadena de Suministros — Caso Glassme',
    alt: 'Diagrama de la cadena de suministros del caso Glassme desde proveedores hasta cliente final',
    caption: 'Modelado de eslabones de aprovisionamiento, transformación, almacén y distribución comercial.',
    category: 'architecture',
    slotId: 'marcos-glassme-scm',
    isCover: true,
  },
  {
    id: 'ev-marcos-db-ventas',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\DBVentas_EBL-JBMN.jpg',
    title: 'Modelo Relacional: Base de Datos de Ventas (Glassme)',
    alt: 'Diagrama entidad-relación de la base de datos de ventas elaborado por Emmanuel Baltazar López y José Brian Molina Nochebuena',
    caption: 'Diseño de entidades transaccionales para clientes, pedidos, detalle de venta, envíos y facturación.',
    category: 'er-diagram',
    slotId: 'marcos-db-ventas',
  },
  {
    id: 'ev-marcos-db-compras-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\DB_Compras_EBL-JBMN.drawio.pdf',
    title: 'Modelo Relacional: Base de Datos de Compras y Proveedores (PDF)',
    alt: 'Diagrama PDF de la base de datos de compras y abastecimiento para Glassme',
    caption: 'Esquema relacional para control de requisiciones, órdenes de compra, proveedores y recepción de insumos.',
    category: 'er-diagram',
  },
  {
    id: 'ev-marcos-destados-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\DEstados_EBL-JBMN.pdf',
    title: 'Diagrama UML de Estados del Ciclo de Pedido (Glassme)',
    alt: 'Diagrama de estados en PDF mostrando las transiciones de una orden comercial en el caso Glassme',
    caption: 'Trazabilidad de estados desde solicitud y validación de stock hasta entrega y cierre contable.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-marcos-aspel-sae-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\Instalacion y configuracion AspeL_EBL-JBMN.pdf',
    title: 'Manual Técnico de Instalación y Configuración de Aspel SAE 7.0 + Firebird',
    alt: 'Documento PDF con capturas paso a paso de la instalación y parametrización de Aspel SAE 7.0 sobre motor Firebird',
    caption: 'Configuración de conexión SAE67001.FDB, datos de empresa, folios fiscales CFDI 3.3 y alta de perfiles.',
    category: 'architecture',
  },
  {
    id: 'ev-marcos-sap-fi-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\TF3erP_EBL.pdf',
    title: 'Trabajo Final SAP S/4HANA Finanzas (12 Ejercicios G/L y AP — Global Bike US00)',
    alt: 'Documento PDF del Trabajo Final de Tercer Parcial de SAP S/4HANA Finanzas por Emmanuel Baltazar López',
    caption: 'Evidencia con capturas y folios SAP reales (1803245, 3303245, 6313245, 1003693, 100000200, 5105600401, 1500000155).',
    category: 'official-document',
    slotId: 'marcos-sap-fi-pdf',
  },
  {
    id: 'ev-marcos-sap-mm-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\MM_EBL.pdf',
    title: 'Prácticas Completas SAP S/4HANA Materials Management (MM_EBL.pdf)',
    alt: 'Documento PDF de prácticas del módulo SAP Materials Management por Emmanuel Baltazar López',
    caption: 'Ciclo de aprovisionamiento Procure-to-Pay ejecutado en SAP S/4HANA.',
    category: 'official-document',
  },
  {
    id: 'ev-marcos-sap-sd-pdf',
    section: 'academic-projects',
    slug: 'marcos-desarrollo-erp-sap-aspel',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\SD_EBL.pdf',
    title: 'Prácticas Completas SAP S/4HANA Sales and Distribution (SD_EBL.pdf)',
    alt: 'Documento PDF de prácticas del módulo SAP Sales and Distribution por Emmanuel Baltazar López',
    caption: 'Ciclo comercial Order-to-Cash ejecutado en SAP S/4HANA.',
    category: 'official-document',
  },

  // ==========================================================================
  // 4. 5toSemestre\Administracion de Proyectos de Sistemas — Proyecto ECOUMAD
  // ==========================================================================
  {
    id: 'ev-ecoumad-gantt-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\Gantt.pdf',
    title: 'Cronograma Maestro de Gantt — Proyecto ECOUMAD (15/09/2025 – 04/12/2025)',
    alt: 'Diagrama de Gantt completo del proyecto ECOUMAD con las 5 fases y dependencias de tareas',
    caption: 'Planificación de 106 días/unidades distribuida en Inicio (8), Planeación (24), Ejecución (48), Control (36) y Cierre (24).',
    category: 'official-document',
    slotId: 'ecoumad-gantt-pdf',
  },
  {
    id: 'ev-ecoumad-presupuesto-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\Presupuesto.pdf',
    title: 'Presupuesto Maestro por Fase y Mes ($47,000 MXN Total General)',
    alt: 'Documento PDF con el desglose presupuestal del proyecto ECOUMAD por fases y flujo mensual',
    caption: '$38,100 MXN en fases operativas + $9,000 MXN en costos fijos, administrativos e indirectos.',
    category: 'metrics-chart',
    slotId: 'ecoumad-presupuesto-pdf',
  },
  {
    id: 'ev-ecoumad-matriz-func-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\MatrizFunc.pdf',
    title: 'Matriz Funcional de Asignación de Responsabilidades (E / P / C / R / A)',
    alt: 'Matriz funcional PDF del proyecto ECOUMAD asignando roles Ejecuta, Participa, Coordina, Revisa y Autoriza',
    caption: 'Gobernanza de entregables entre Gerente de Proyecto, Líder Técnico, Programador 1 (Emmanuel Baltazar), Programador 2 y QA.',
    category: 'official-document',
    slotId: 'ecoumad-matrices-pdf',
  },
  {
    id: 'ev-ecoumad-matriz-comu-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\MatrizComuOF.pdf',
    title: 'Matriz Oficial de Comunicación del Proyecto ECOUMAD',
    alt: 'Documento PDF con la Matriz Oficial de Comunicación diseñada para el proyecto ECOUMAD',
    caption: 'Protocolos de reporte quincenal, alertas técnicas en menos de 24h, canales y niveles de escalamiento.',
    category: 'official-document',
  },
  {
    id: 'ev-ecoumad-mapa-mental-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\Mapa mental.pdf',
    title: 'Mapa Mental de Fundamentos de Dirección de Proyectos TI',
    alt: 'Mapa mental en PDF sobre los procesos y áreas de conocimiento de la administración de proyectos',
    caption: 'Síntesis conceptual del ciclo de vida y restricciones triples de alcance, tiempo y costo.',
    category: 'architecture',
  },
  {
    id: 'ev-ecoumad-habilidades-pm-pdf',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\HabilidadesDelGerenteDeProyectos_EBL.pdf',
    title: 'Análisis de Habilidades del Gerente de Proyectos de Sistemas (EBL)',
    alt: 'Ensayo y análisis técnico en PDF sobre las competencias directivas de un Project Manager por Emmanuel Baltazar López',
    caption: 'Liderazgo técnico, negociación, gestión de riesgos y comunicación efectiva en equipos de ingeniería.',
    category: 'official-document',
  },
  {
    id: 'ev-ecoumad-prediccion-py',
    section: 'academic-projects',
    slug: 'administracion-proyectos-ecoumad',
    sourceRelPath: '5toSemestre\\Administracion de Proyectos de Sistemas\\Ejercicios de prediccion - ebl.py',
    title: 'Script Python: Modelos de Predicción y Regresión Lineal (Ejercicios de prediccion - ebl.py)',
    alt: 'Código fuente en Python con ejercicios de predicción cuantitativa y regresión lineal por Emmanuel Baltazar López',
    caption: 'Implementación programática de modelos predictivos aplicados a estimación en ingeniería.',
    category: 'deliverable-file',
  },

  // ==========================================================================
  // 5. 6toSemestre\Investigación de proyecto — Tesina Tutor Virtual UMAD
  // ==========================================================================
  {
    id: 'ev-tutor-arquitectura',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\ArqTutorVirtual.png',
    title: 'Arquitectura Cliente-Servidor en 3 Capas — Tutor Virtual UMAD',
    alt: 'Diagrama de arquitectura cliente-servidor en 3 capas del sistema Tutor Virtual UMAD (React SPA, API Flask/Node y PostgreSQL)',
    caption: 'Separación física y lógica entre la SPA en React, el servidor de negocio con RBAC y el motor relacional PostgreSQL.',
    category: 'architecture',
    slotId: 'arq-tutor-virtual',
    isCover: true,
  },
  {
    id: 'ev-tutor-estados-uml',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\DiagramaEstados.png',
    title: 'Diagrama UML de Máquina de Estados del Tutor Virtual',
    alt: 'Diagrama UML de transición de estados de las sesiones de tutoría y consultas académicas en Tutor Virtual UMAD',
    caption: 'Modelado formal del ciclo de vida de interacciones del estudiante y el asesor.',
    category: 'uml-diagram',
    slotId: 'uml-tutor-virtual',
  },
  {
    id: 'ev-tutor-metricas-latencia',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\03_columnas_tiempos_respuesta.png',
    title: 'Gráfica de Benchmark: Tiempos de Respuesta de API (Promedio 1.8 s)',
    alt: 'Gráfica de columnas comparando los tiempos de respuesta del backend de Tutor Virtual UMAD con promedio de 1.8 segundos',
    caption: 'Cumplimiento del atributo de calidad de rendimiento (< 2.0 s) bajo carga concurrente.',
    category: 'metrics-chart',
    slotId: 'metricas-latencia-tutor',
  },
  {
    id: 'ev-tutor-tesina-pdf',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\Tesina_Tutor-Virtual.pdf',
    title: 'Tesina Completa: Diseño e Implementación de un Tutor Virtual Web para la UMAD (PDF)',
    alt: 'Documento oficial PDF de la Tesina de Investigación de Proyecto del Tutor Virtual UMAD',
    caption: 'Protocolo de investigación completo con marco teórico, arquitectura 4+1, metodología XP y análisis de resultados.',
    category: 'official-document',
    slotId: 'pdf-tesina-tutor',
  },
  {
    id: 'ev-tutor-navegacion',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\DiagramaNavegaciónTVUMAD.png',
    title: 'Diagrama de Navegación por Rol (Estudiante, Docente y Administrador)',
    alt: 'Mapa de navegación de las vistas web del sistema Tutor Virtual UMAD segmentado por rol RBAC',
    caption: 'Flujo de pantallas y rutas protegidas mediante autenticación JWT.',
    category: 'architecture',
  },
  {
    id: 'ev-tutor-listado-objetos',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\ListadoObjetos.png',
    title: 'Catálogo y Modelo de Objetos del Dominio Académico',
    alt: 'Listado y estructura de objetos del sistema Tutor Virtual UMAD',
    caption: 'Definición de entidades principales para materias, asesorías, usuarios y métricas.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-tutor-marco-teorico',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\Diagrama_MarcoTeorico.png',
    title: 'Arquitectura Conceptual del Marco Teórico',
    alt: 'Diagrama estructurado del marco teórico de la investigación Tutor Virtual UMAD',
    caption: 'Fundamentación pedagógica, tecnológica y de ingeniería de software.',
    category: 'architecture',
  },
  {
    id: 'ev-tutor-gantt',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\Gantt V1.1.png',
    title: 'Cronograma de Ejecución de Iteraciones XP (Gantt V1.1)',
    alt: 'Diagrama de Gantt versión 1.1 del desarrollo del proyecto Tutor Virtual UMAD',
    caption: 'Planificación de entregas incrementales a lo largo de las 16 semanas del semestre.',
    category: 'metrics-chart',
  },
  {
    id: 'ev-tutor-commits',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\01_barras_horas_commits.png',
    title: 'Métrica de Ingeniería: Horas de Desarrollo y Commits por Iteración',
    alt: 'Gráfica de barras de horas invertidas y commits en Git durante el desarrollo del Tutor Virtual UMAD',
    caption: 'Trazabilidad del esfuerzo de programación y ritmo de integración continua.',
    category: 'metrics-chart',
  },
  {
    id: 'ev-tutor-tasa-exito',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\04_linea_tasa_exito.png',
    title: 'Curva de Evolución de Tasa de Éxito en Pruebas Funcionales (92%)',
    alt: 'Gráfica de línea mostrando el incremento en la tasa de éxito de pruebas hasta alcanzar el 92%',
    caption: 'Convergencia de calidad funcional a través de refactorización continua en XP.',
    category: 'metrics-chart',
  },
  {
    id: 'ev-tutor-bugs',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\05_areas_bugs.png',
    title: 'Curva de Detección y Resolución de Defectos (Bugs)',
    alt: 'Gráfica de áreas comparando defectos detectados contra defectos corregidos por iteración',
    caption: 'Reducción sistemática de deuda técnica previo al despliegue piloto.',
    category: 'metrics-chart',
  },
  {
    id: 'ev-tutor-aprobacion',
    section: 'academic-projects',
    slug: 'tutor-virtual-umad',
    sourceRelPath: '6toSemestre\\Investigación de proyecto\\07_barras_aprobacion.png',
    title: 'Evaluación de Aceptación de Usuarios Piloto (88% Satisfacción)',
    alt: 'Gráfica de barras con los resultados de aprobación y usabilidad del sistema por estudiantes y docentes',
    caption: 'Validación empírica con 25 usuarios reales de la comunidad universitaria.',
    category: 'metrics-chart',
  },

  // ==========================================================================
  // 6. 7moSemestre\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS — ITIL 4
  // ==========================================================================
  {
    id: 'ev-itil4-svs-mapa',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\UnidadCincoSVITIL.png',
    title: 'Arquitectura del Sistema de Valor del Servicio (SVS) en ITIL 4',
    alt: 'Infografía arquitectónica de la Unidad 5 sobre el Sistema de Valor del Servicio (SVS) de ITIL 4',
    caption: 'Integración de Oportunidad/Demanda, Principios Guía, Gobernanza, Cadena de Valor del Servicio, Prácticas y Mejora Continua.',
    category: 'architecture',
    slotId: 'itil4-svs-mapa',
    isCover: true,
  },
  {
    id: 'ev-itil4-cuatro-dimensiones',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\MapaConceptual_CuatroDimensiones.png',
    title: 'Mapa Conceptual: Las 4 Dimensiones de la Gestión de Servicios ITIL 4',
    alt: 'Mapa conceptual de las 4 Dimensiones de ITIL 4 (Organizaciones y Personas, Información y Tecnología, Socios y Proveedores, Procesos y Flujos de Valor)',
    caption: 'Análisis de las cuatro perspectivas críticas y los factores externos PESTLE.',
    category: 'architecture',
    slotId: 'itil4-cuatro-dimensiones',
  },
  {
    id: 'ev-itil4-flujos-valor-u6',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\UnidadSeisFV.png',
    title: 'Cadena de Valor del Servicio (SVC) y Mapeo de Flujos de Valor (Unidad 6)',
    alt: 'Diagrama visual de la Unidad 6 sobre las 6 actividades de la Cadena de Valor del Servicio en ITIL 4',
    caption: 'Actividades Planear, Mejorar, Involucrar, Diseño y Transición, Obtener/Construir y Entregar/Soportar.',
    category: 'architecture',
  },
  {
    id: 'ev-itil4-practicas-u7',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\UnidadSiete.png',
    title: 'Arquitectura de Prácticas de Gestión de ITIL 4 (Unidad 7)',
    alt: 'Esquema visual de la Unidad 7 clasificando las prácticas generales, de gestión de servicios y de gestión técnica en ITIL 4',
    caption: 'Desglose de prácticas clave para la operación, transición y aseguramiento de servicios TI.',
    category: 'architecture',
  },
  {
    id: 'ev-itil4-linea-tiempo',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\ITIL-LineaTiempo.png',
    title: 'Evolución Histórica del Marco ITIL (v1 a ITIL 4)',
    alt: 'Línea del tiempo ilustrada de la evolución de ITIL desde su origen en CCTA hasta ITIL 4',
    caption: 'Transición desde procesos aislados hacia la co-creación ágil de valor (SVS) e integración con DevOps/Lean.',
    category: 'architecture',
  },
  {
    id: 'ev-itil4-devshop-pdf',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\Caso DevShop flujo de valor y mejora continua con ITIL 4.docx.pdf',
    title: 'Caso DevShop: Flujo de Valor y Mejora Continua con ITIL 4 (Reducción de 16 a 8–10 días)',
    alt: 'Documento PDF del Caso DevShop elaborado por Emmanuel Baltazar López, Oscar Juárez Ortiz, Pedro Emiliano Romero Osorio y Luis Gael Bonilla Paleta',
    caption: 'Diagnóstico cuantitativo de cuellos de botella (56% del tiempo en Pruebas y Aprobación) y plan de mejora en 7 etapas.',
    category: 'official-document',
    slotId: 'itil4-devshop-pdf',
  },
  {
    id: 'ev-itil4-riesgos-pdf',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\Gestion-de-Riesgos-en-ITIL-4-EBL.pdf',
    title: 'Práctica General de Gestión de Riesgos en ITIL 4 (ISO 31000 & KRIs)',
    alt: 'Presentación y documento técnico PDF sobre Gestión de Riesgos en ITIL 4 elaborado por Emmanuel Baltazar López',
    caption: 'Factores críticos de éxito (CSF), indicadores clave de riesgo (KRI), matriz de calor e integración con seguridad y continuidad.',
    category: 'official-document',
  },
  {
    id: 'ev-itil4-foodfast-pdf',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\Caso Práctico FoodFast.docx.pdf',
    title: 'Caso Práctico FoodFast: Continuidad y Gestión de Servicios en Plataforma de Delivery',
    alt: 'Documento PDF con la resolución del Caso Práctico FoodFast aplicando principios y dimensiones de ITIL 4',
    caption: 'Estrategia de estabilización operativa para una aplicación móvil crítica de entrega de alimentos.',
    category: 'official-document',
  },
  {
    id: 'ev-itil4-svs-doc-pdf',
    section: 'academic-projects',
    slug: 'administracion-procesos-tecnologicos-itil4',
    sourceRelPath: '7moSemestre\\ADMINISTRACIÓN DE PROCESOS TECNOLÓGICOS\\UnidadCinco_SistemaValorITIL-EBL.pdf',
    title: 'Reporte Técnico Unidad 5: El Sistema de Valor del Servicio (SVS)',
    alt: 'Documento PDF de análisis del Sistema de Valor del Servicio en ITIL 4 por Emmanuel Baltazar López',
    caption: 'Fundamentación documental de los componentes del SVS y su aplicación contra silos organizacionales.',
    category: 'official-document',
  },

  // ==========================================================================
  // 7. Evidencias Reales Adicionales de Otras Asignaturas y Secciones
  // ==========================================================================
  // Mi Colección (7mo Semestre Móviles II)
  {
    id: 'ev-micoleccion-video-mp4',
    section: 'academic-projects',
    slug: 'mi-coleccion-moviles-ii',
    sourceRelPath: '7moSemestre\\DESARROLLO PARA PLATAFORMAS MÓVILES II\\MIColeccion_EBL-OJO-LGBP.mp4',
    title: 'Video Demostrativo Funcional: App Móvil "Mi Colección" (React Native + Supabase)',
    alt: 'Video MP4 mostrando la ejecución completa de la aplicación móvil Mi Colección con login mágico, captura de cámara y geolocalización',
    caption: 'Demostración en tiempo real del flujo de autenticación OTP, alta de coleccionables con cámara/GPS y persistencia cloud en Supabase.',
    category: 'video-demo',
  },
  {
    id: 'ev-micoleccion-doc-pdf',
    section: 'academic-projects',
    slug: 'mi-coleccion-moviles-ii',
    sourceRelPath: '7moSemestre\\DESARROLLO PARA PLATAFORMAS MÓVILES II\\MIColeccion_EBL-OJO-LGBP.pdf',
    title: 'Reporte Técnico de Arquitectura Móvil — Mi Colección (PDF)',
    alt: 'Documento técnico PDF del proyecto Mi Colección elaborado por Emmanuel Baltazar López, Oscar Juárez Ortiz y Luis Gael Bonilla Paleta',
    caption: 'Especificación de arquitectura React Native/Expo, modelo de tabla items y políticas RLS en PostgreSQL.',
    category: 'official-document',
  },

  // Arquitectura de Procesos SAP Signavio & Crystal Reports (7mo Semestre)
  {
    id: 'ev-signavio-arch-overview',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\Software Architecture-2026-09-29-190459.png',
    title: 'Mapa de Arquitectura de Software yAtributos de Calidad',
    alt: 'Diagrama de arquitectura de software elaborado en la asignatura Arquitectura y Calidad de Sistemas de Cómputo',
    caption: 'Estructuración de estilos arquitectónicos, componentes y criterios de calidad.',
    category: 'architecture',
    isCover: true,
  },
  {
    id: 'ev-signavio-ej1-cupcakes',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\EJ1-EBL - Cupcakes Inc.png',
    title: 'Modelo BPMN 2.0 en SAP Signavio — Caso Cupcakes Inc (Optimización 43.8 a 25 min)',
    alt: 'Diagrama BPMN 2.0 en SAP Signavio del proceso operativo de Cupcakes Inc Puebla elaborado por Emmanuel Baltazar López',
    caption: 'Ejercicio 1: Rediseño de proceso orientado a reducir el tiempo de ciclo de entrega de 43.8 a 25 minutos.',
    category: 'uml-diagram',
    slotId: 'signavio-bpmn-cupcakes',
  },
  {
    id: 'ev-signavio-ej2-envio',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\EJ2_EBL - Envío de pedidos de Cupcakes.png',
    title: 'Modelo BPMN 2.0 — Ejercicio 2: Envío de Pedidos de Cupcakes',
    alt: 'Diagrama BPMN 2.0 en SAP Signavio del proceso de envío y logística de pedidos',
    caption: 'Coordinación entre carriles de preparación, empaque y despacho.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-signavio-ej3-repostero',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\Ej3.EBL - Revisión de un repostero en sucursal.png',
    title: 'Modelo BPMN 2.0 — Ejercicio 3: Evaluación y Revisión de Repostero en Sucursal',
    alt: 'Diagrama BPMN 2.0 en SAP Signavio para el proceso de auditoría de calidad de un repostero en sucursal',
    caption: 'Compuertas de decisión y eventos para evaluación de desempeño operativo.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-signavio-ej4-produccion',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\Ej4.EBL - Producción de Cupcakes.png',
    title: 'Modelo BPMN 2.0 — Ejercicio 4: Línea de Producción de Cupcakes',
    alt: 'Diagrama BPMN 2.0 en SAP Signavio modelando el flujo de horneado, decorado y control de calidad',
    caption: 'Sincronización de actividades paralelas y control de lote en planta.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-signavio-ej5-ingredientes',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\EJ5_EBL - Recepción de Ingredientes en el Centro de Producción.png',
    title: 'Modelo BPMN 2.0 — Ejercicio 5: Recepción de Ingredientes en Centro de Producción',
    alt: 'Diagrama BPMN 2.0 en SAP Signavio del proceso de recepción e inspección de materias primas',
    caption: 'Alineación con el proceso Source (sS1) del modelo SCOR-DS.',
    category: 'uml-diagram',
  },
  {
    id: 'ev-signavio-pdf',
    section: 'academic-projects',
    slug: 'arquitectura-procesos-signavio-crystal',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\EjerciciosSAPSignavio-EBL.pdf',
    title: 'Compendio Documental de Procesos en SAP Signavio (PDF)',
    alt: 'Documento PDF con los 5 modelos BPMN 2.0 desarrollados en SAP Signavio por Emmanuel Baltazar López',
    caption: 'Memoria técnica de modelado de procesos empresariales.',
    category: 'official-document',
    slotId: 'doc-procesos-pdf',
  },

  // Ecosistema IoT ESP32 + Flask (Verano 2026)
  {
    id: 'ev-iot-dfcu1',
    section: 'academic-projects',
    slug: 'iot-monitoreo-esp32-flask',
    sourceRelPath: 'Verano2026\\TopicosAvanzadosIngenieria\\DFCU1.png',
    title: 'Diagrama Funcional y de Arquitectura IoT (DFCU1)',
    alt: 'Diagrama de arquitectura funcional del sistema IoT con nodos sensores y backend',
    caption: 'Diseño de flujo de señales e interacción entre sensores físicos, microcontrolador y servidor.',
    category: 'architecture',
    slotId: 'iot-prototipo-hardware',
    isCover: true,
  },
  {
    id: 'ev-iot-dfcm',
    section: 'academic-projects',
    slug: 'iot-monitoreo-esp32-flask',
    sourceRelPath: 'Verano2026\\TopicosAvanzadosIngenieria\\DFCM.png',
    title: 'Diagrama de Flujo y Control de Monitoreo IoT (DFCM)',
    alt: 'Diagrama de control modular para el procesamiento de lecturas de sensores IoT',
    caption: 'Lógica de adquisición, validación de umbrales y disparo de actuadores/alertas.',
    category: 'architecture',
  },
  {
    id: 'ev-iot-video-invernadero',
    section: 'academic-projects',
    slug: 'iot-monitoreo-esp32-flask',
    sourceRelPath: 'Verano2026\\TopicosAvanzadosIngenieria\\SISTEMA-DE-ALERTA-PARA-UN-INVERNADERO.mp4',
    title: 'Video Demostrativo: Sistema de Alerta para un Invernadero en Tiempo Real',
    alt: 'Video MP4 demostrando el funcionamiento físico del sistema IoT de alerta para invernadero',
    caption: 'Prueba experimental de lectura de humedad/temperatura y activación de alertas.',
    category: 'video-demo',
    slotId: 'iot-video-funcionamiento',
  },
  {
    id: 'ev-iot-video-inundacion',
    section: 'academic-projects',
    slug: 'iot-monitoreo-esp32-flask',
    sourceRelPath: 'Verano2026\\TopicosAvanzadosIngenieria\\SISTEMA-DE-ALARMA-POR-INUNDACIÓN.mp4',
    title: 'Video Demostrativo: Sistema de Alarma Temprana por Inundación',
    alt: 'Video MP4 mostrando la detección de nivel de agua y activación de alarma por inundación',
    caption: 'Validación física del transductor de nivel hidrométrico y respuesta inmediata del sistema.',
    category: 'video-demo',
  },
  {
    id: 'ev-iot-video-esp32-web',
    section: 'academic-projects',
    slug: 'iot-monitoreo-esp32-flask',
    sourceRelPath: 'Verano2026\\TopicosAvanzadosIngenieria\\ESP32_WEB_SENSORES.mp4',
    title: 'Video Demostrativo: Telemetría ESP32 hacia Interfaz Web de Sensores',
    alt: 'Video MP4 mostrando el microcontrolador ESP32 transmitiendo datos de sensores en vivo hacia el dashboard web',
    caption: 'Integración Wi-Fi/HTTP entre el nodo ESP32 y la visualización web.',
    category: 'video-demo',
  },

  // Sistema de Gestión de Mantenimiento bajo Scrum & Kanban (Verano 2025)
  {
    id: 'ev-scrum-dcu',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\D-CU.png',
    title: 'Diagrama UML de Casos de Uso — Sistema de Mantenimiento (D-CU)',
    alt: 'Diagrama de casos de uso del Sistema Web de Gestión de Mantenimiento elaborado por el Equipo 1',
    caption: 'Alcance funcional priorizado en el Product Backlog.',
    category: 'uml-diagram',
    slotId: 'scrum-diagramas-cu-er',
    isCover: true,
  },
  {
    id: 'ev-scrum-der',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\D-ER.png',
    title: 'Diagrama Entidad-Relación de la Base de Datos (D-ER)',
    alt: 'Diagrama entidad-relación para el esquema mantenimientobd.sql',
    caption: 'Modelo de datos relacional que soporta el registro y seguimiento de órdenes de mantenimiento.',
    category: 'er-diagram',
  },
  {
    id: 'ev-scrum-mapa-talentos',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\MapaVisualTalentosAgiles.png',
    title: 'Mapa Visual de Talentos Ágiles del Equipo Scrum',
    alt: 'Mapa visual de habilidades y talentos ágiles de los integrantes del equipo',
    caption: 'Artefacto de Sprint Cero para autoorganización multidisciplinaria.',
    category: 'architecture',
  },
  {
    id: 'ev-scrum-sql',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\mantenimientobd.sql',
    title: 'Script de Base de Datos Relacional (mantenimientobd.sql)',
    alt: 'Archivo SQL con la definición de tablas y relaciones de la base de datos de mantenimiento',
    caption: 'Entregable técnico descargable con el esquema SQL del proyecto.',
    category: 'deliverable-file',
  },
  {
    id: 'ev-scrum-retrospectiva-pdf',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\12 Retrospectiva Verano 2025.pdf',
    title: 'Evidencia de Ceremonia: Retrospectiva de Sprint (Verano 2025)',
    alt: 'Documento PDF con los acuerdos y hallazgos de la Retrospectiva de Sprint del Equipo 1',
    caption: 'Inspección y adaptación continua del proceso ágil del equipo.',
    category: 'official-document',
  },
  {
    id: 'ev-scrum-refinamiento-pdf',
    section: 'academic-projects',
    slug: 'sistema-mantenimiento-scrum',
    sourceRelPath: 'Verano2025\\MA\\Refinamiento-Backlog_Equipo1.pdf',
    title: 'Refinamiento del Product Backlog y Estimación (Equipo 1)',
    alt: 'Documento PDF del refinamiento de historias de usuario y criterios de aceptación del Equipo 1',
    caption: 'Desglose de épicas, historias de usuario y estimación en Story Points.',
    category: 'official-document',
  },

  // Certificación SAP (/certifications/sap-erp-s4hana-abap-signavio)
  {
    id: 'ev-cert-sap-signavio-cover',
    section: 'certifications',
    slug: 'sap-erp-s4hana-abap-signavio',
    sourceRelPath: '7moSemestre\\ARQUITECTURA Y CALIDAD DE SISTEMAS DE CÓMPUTO\\EJ1-EBL - Cupcakes Inc.png',
    title: 'Modelado de Procesos en SAP Signavio (BPMN 2.0 / SCOR-DS)',
    alt: 'Diagrama de proceso empresarial modelado en SAP Signavio por Emmanuel Baltazar López',
    caption: 'Evidencia de modelado formal en la suite SAP Signavio Process Manager.',
    category: 'uml-diagram',
    isCover: true,
  },
  {
    id: 'ev-cert-sap-fi-pdf',
    section: 'certifications',
    slug: 'sap-erp-s4hana-abap-signavio',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\TF3erP_EBL.pdf',
    title: 'Portafolio de Ejecución SAP S/4HANA Financial Accounting (G/L & AP)',
    alt: 'Documento PDF con capturas de ejecución en SAP S/4HANA Fiori para Finanzas y Cuentas por Pagar',
    caption: '12 casos prácticos completados en Global Bike (US00) con folios de documento verificados.',
    category: 'official-document',
    slotId: 'sap-gui-fiori-evidencia',
  },
  {
    id: 'ev-cert-sap-mm-pdf',
    section: 'certifications',
    slug: 'sap-erp-s4hana-abap-signavio',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\MM_EBL.pdf',
    title: 'Manual de Ejecución SAP S/4HANA Materials Management (MM_EBL.pdf)',
    alt: 'Documento PDF con evidencias prácticas del módulo SAP MM por Emmanuel Baltazar López',
    caption: 'Gestión de materiales, órdenes de compra, recepción de mercancías y verificación de facturas.',
    category: 'official-document',
  },
  {
    id: 'ev-cert-sap-sd-pdf',
    section: 'certifications',
    slug: 'sap-erp-s4hana-abap-signavio',
    sourceRelPath: '4toSemestre\\MarcosDesarrollo\\SD_EBL.pdf',
    title: 'Manual de Ejecución SAP S/4HANA Sales & Distribution (SD_EBL.pdf)',
    alt: 'Documento PDF con evidencias prácticas del módulo SAP SD por Emmanuel Baltazar López',
    caption: 'Gestión de pedidos de venta, entrega saliente, picking y facturación a clientes.',
    category: 'official-document',
  },

  // Servicio Social (/community-service/hospital-comunitario-ixtacamaxtitlan)
  {
    id: 'ev-ss-carta-aceptacion',
    section: 'community-service',
    slug: 'hospital-comunitario-ixtacamaxtitlan',
    sourceRelPath: 'ServicioSocial\\CartaAceptacion.pdf',
    title: 'Carta Oficial de Aceptación — Hospital Comunitario de Ixtacamaxtitlán',
    alt: 'Documento oficial PDF de la Carta de Aceptación de Servicio Social de Emmanuel Baltazar López',
    caption: 'Acreditación institucional emitida para el periodo 19 de mayo al 18 de noviembre de 2026 (480 horas).',
    category: 'official-document',
    slotId: 'ss-carta-aceptacion',
  },
  {
    id: 'ev-ss-reporte-trimestral',
    section: 'community-service',
    slug: 'hospital-comunitario-ixtacamaxtitlan',
    sourceRelPath: 'ServicioSocial\\REPORTE-TRIMESTRAL-DE-ACTIVIDADES.pdf',
    title: 'Reporte Trimestral Oficial de Actividades de Servicio Social (PDF)',
    alt: 'Documento PDF del Reporte Trimestral de Actividades en el área de Estadística y Archivo Clínico',
    caption: 'Desglose de captura SINBA-SIS-CE, mantenimiento preventivo de cómputo y apoyo administrativo.',
    category: 'official-document',
    slotId: 'ss-reportes-trimestrales',
  },
];

function cleanStoredFileName(rawName: string): string {
  const ext = path.extname(rawName).toLowerCase();
  const base = path
    .basename(rawName, path.extname(rawName))
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9-_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 70);
  return `${base || 'evidencia'}${ext || ''}`;
}

function detectKind(ext: string): 'image' | 'pdf' | 'video' | 'document' {
  if (['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'].includes(ext)) return 'image';
  if (ext === '.pdf') return 'pdf';
  if (['.mp4', '.webm', '.mov', '.m4v'].includes(ext)) return 'video';
  return 'document';
}

function detectMime(ext: string): string {
  const map: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.mp4': 'video/mp4',
    '.sql': 'text/plain; charset=utf-8',
    '.py': 'text/plain; charset=utf-8',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  };
  return map[ext] || 'application/octet-stream';
}

export function populateRealUmadEvidencesSync(db: PortfolioDatabase): PortfolioDatabase {
  try {
    // 1. Importar CV Oficial si existe
    const cvSource = path.join(UMAD_ROOT, 'CV_Emmanuel-Baltazar-Lopez_V1.pdf');
    if (fsSync.existsSync(cvSource)) {
      const profileDir = path.join(UPLOADS_DIR, 'profile');
      fsSync.mkdirSync(profileDir, { recursive: true });
      const targetFileName = 'CV_Emmanuel-Baltazar-Lopez_V1.pdf';
      const targetAbs = path.join(profileDir, targetFileName);
      if (!fsSync.existsSync(targetAbs)) {
        fsSync.copyFileSync(cvSource, targetAbs);
      }
      const stat = fsSync.statSync(targetAbs);
      db.profile.cvDocument = {
        fileName: 'CV_Emmanuel-Baltazar-Lopez_V1.pdf',
        storedPath: `profile/${targetFileName}`,
        url: `/api/uploads/profile/${targetFileName}`,
        fileSize: stat.size,
        uploadedAt: '2026-11-10T09:50:00.000Z',
      };
    }

    // 2. Importar evidencias por proyecto
    for (const spec of SEED_EVIDENCE_FILES) {
      const absSource = path.join(UMAD_ROOT, spec.sourceRelPath);
      if (!fsSync.existsSync(absSource)) {
        continue;
      }

      const entry = db.entries.find(
        (e) => e.section === spec.section && e.slug === spec.slug
      );
      if (!entry) {
        continue;
      }

      const originalName = path.basename(absSource);
      const ext = path.extname(originalName).toLowerCase();
      const safeFile = `${spec.id}${ext}`;
      const relDir = `${spec.section}/${spec.slug}`;
      const absDir = path.join(UPLOADS_DIR, spec.section, spec.slug);
      fsSync.mkdirSync(absDir, { recursive: true });

      const absTarget = path.join(absDir, safeFile);
      if (!fsSync.existsSync(absTarget)) {
        fsSync.copyFileSync(absSource, absTarget);
      }

      const stat = fsSync.statSync(absTarget);
      const storedPath = `${relDir}/${safeFile}`;

      const item: UploadedEvidence = {
        id: spec.id,
        slotId: spec.slotId,
        title: spec.title,
        alt: spec.alt,
        caption: spec.caption,
        category: spec.category,
        mimeType: detectMime(ext),
        mediaKind: detectKind(ext),
        fileName: originalName,
        storedPath,
        url: `/api/uploads/${storedPath}`,
        fileSize: stat.size,
        uploadedAt: '2026-11-10T09:50:00.000Z',
        isCover: Boolean(spec.isCover),
      };

      const existingIdx = entry.evidences.findIndex((ev) => ev.id === spec.id);
      if (existingIdx >= 0) {
        entry.evidences[existingIdx] = item;
      } else {
        entry.evidences.push(item);
      }
    }
  } catch (err) {
    console.warn('Aviso al importar evidencias locales UMAD:', err);
  }

  return db;
}
