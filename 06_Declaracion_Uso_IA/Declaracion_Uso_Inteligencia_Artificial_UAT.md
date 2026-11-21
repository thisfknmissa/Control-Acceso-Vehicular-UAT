# Declaración Formal de Uso de Inteligencia Artificial
## Proyecto Hackatón: Sistema de Control de Acceso Vehicular UAT CUTM Sur
**Convocatoria:** Alianza Google & Universidad Autónoma de Tamaulipas  
**Unidad Académica:** Facultad de Ingeniería Tampico (Coordinación de Sistemas Computacionales)  
**Fecha de Entrega:** 20 de Noviembre de 2026  

---

### 1. INTRODUCCIÓN Y POLÍTICA DE TRANSPARENCIA ÉTICA

En estricto apego a las bases oficiales del Proyecto Hackatón (especificadas en las páginas 3 y 4 de la convocatoria), los participantes presentan esta **Declaración Formal de Uso de Inteligencia Artificial**. El equipo reconoce a las herramientas de Inteligencia Artificial Generativa como potentes asistentes cognitivos y aceleradores de desarrollo (*Copilots*), manteniendo en todo momento la autoría, el criterio ingenieril, la toma de decisiones arquitectónicas y la responsabilidad de validación técnica en manos del equipo humano.

---

### 2. HERRAMIENTAS DE INTELIGENCIA ARTIFICIAL UTILIZADAS

| Herramienta / Modelo | Proveedor | Versión / Entorno | Propósito Principal en el Proyecto |
| :--- | :--- | :--- | :--- |
| **Google Gemini (Pro / Flash)** | Google Cloud / DeepMind | 1.5 / 2.0 API | Asistencia en análisis de requisitos, redacción de fórmulas AppSheet y estructuración de la API REST en Google Apps Script. |
| **Antigravity AI Agent** | Google Ecosystem | SDK v2.0 | Orquestación del flujo de trabajo, generación de diagramas Mermaid, formateo de especificaciones IEEE 830 y automatización documental. |
| **GitHub Copilot** | GitHub / OpenAI | GPT-4o / Codex | Autocompletado contextual de código JavaScript (V8 Apps Script) y hojas de estilo CSS en la interfaz web. |

---

### 3. ESTIMACIÓN PORCENTUAL DEL APOYO BRINDADO POR IA

Conforme a la tabla oficial requerida en las bases del concurso:

| Actividad de Ingeniería | Porcentaje de Apoyo de IA | Porcentaje de Intervención y Validación Humana | Justificación y Rol del Equipo |
| :--- | :---: | :---: | :--- |
| **Análisis** | **35%** | **65%** | El levantamiento de campo, las 4 entrevistas a oficiales y usuarios, y la identificación de problemáticas en casetas fueron 100% humanas. La IA colaboró en la clasificación MoSCoW y mapeo hacia el estándar ISO/IEC/IEEE 29148. |
| **Diseño** | **40%** | **60%** | La definición de entidades y relaciones fue conceptualizada por el equipo. La IA asistió en la generación de la sintaxis Mermaid de los diagramas UML/ERD y en el diseño visual con paleta de colores institucional UAT. |
| **Programación** | **30%** | **70%** | El núcleo de las funciones transaccionales de Google Apps Script (`Code.gs`), las fórmulas de AppSheet y la gestión de concurrencia (`LockService`) fueron desarrolladas y depuradas por el equipo. La IA asistió en funciones auxiliares de formato y plantillas HTML. |
| **Documentación** | **45%** | **55%** | El equipo redactó los contenidos técnicos, datos de campo y casos de uso. La IA apoyó en la maquetación formal bajo el estándar IEEE 830, el Manual de Usuario y la generación automatizada de los archivos DOCX y PDF. |

---

### 4. DECLARACIÓN DE USO DETALLADA

#### 4.1 Actividades donde se utilizó IA:
1. **Modelado y Especificación de Requerimientos:** Asistencia en la redacción formal de los 22 Requisitos Funcionales (`RF-001` a `RF-022`) y Requisitos No Funcionales bajo la norma ISO/IEC 25010.
2. **Generación de Diagramas Formales:** Apoyo en la codificación en lenguaje Mermaid para Diagramas de Casos de Uso, Diagrama de Actividades de Entrada/Salida y Diagrama Entidad-Relación.
3. **Optimización de Código Apps Script:** Asistencia en la estructura de endpoints `doGet`/`doPost` y en la optimización del cálculo de permanencia en minutos y generación de reportes en PDF.
4. **Diseño de Vistas y Fórmulas AppSheet:** Consulta de sintaxis para expresiones no-code (`TOTALMINUTES`, `USERSETTINGS`, dereferenciación `[Placa].[Tipo_Usuario]`).
5. **Estructuración del Guion Audiovisual:** Apoyo en la escaleta cronometrada segundo a segundo del Video Demostrativo.

#### 4.2 Beneficios Obtenidos:
- **Aceleración en el Tiempo de Entrega:** Reducción estimada de un 60% en el tiempo de elaboración de documentación técnica formal alineada a normas internacionales.
- **Rigor Estructural:** Adherencia impecable a los estándares IEEE 830 y normativas ISO sin omisión de secciones críticas.
- **Calidad de Código y Seguridad:** Implementación de mejores prácticas de control de concurrencia y validación de tipos de datos en Google Apps Script.

#### 4.3 Limitaciones Encontradas y Solución Humana Aplicada:
- *Limitación 1 (Contexto Institucional Local):* Los modelos de lenguaje inicialmente proponían estructuras genéricas de estacionamiento comercial (con cobro de tarifas). El equipo humano intervino para reenfocar todo el modelo hacia el entorno universitario público de la UAT (casetas de CUTM Sur, matrícula, facultades F.I.T./FADU/FCAV y régimen de visitas gratuitas con pase).
- *Limitación 2 (Zona Horaria y Marcas de Tiempo):* Las funciones por defecto sugerían timestamps en UTC. El equipo configuró explícitamente la zona horaria `America/Monterrey` (GMT-6) en el archivo de manifiesto `appsscript.json` y en las funciones de formato de Apps Script.
- *Limitación 3 (Validación de Concurrencia):* Se requirió la intervención manual del equipo de programación para implementar el mecanismo `LockService.getScriptLock()` para impedir condiciones de carrera cuando dos casetas intentan registrar el mismo vehículo al mismo milisegundo.
