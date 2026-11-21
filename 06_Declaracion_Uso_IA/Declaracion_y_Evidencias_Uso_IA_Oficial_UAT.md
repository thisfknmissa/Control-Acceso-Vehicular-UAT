# Declaración Formal y Evidencias de Uso de Inteligencia Artificial
## Proyecto Hackatón: Sistema de Control de Acceso Vehicular UAT CUTM Sur
**Convocatoria:** Alianza Estratégica Google & Universidad Autónoma de Tamaulipas  
**Unidad Académica:** Facultad de Ingeniería Tampico (Coordinación de Sistemas Computacionales)  
**Fecha de Entrega:** Noviembre de 2026  
**Estatus:** Declaración Oficial de Transparencia y Buenas Prácticas Éticas  

---

### 1. Política de Transparencia Ética y Gobernanza de IA

En cumplimiento con las directrices oficiales del Proyecto Hackatón (páginas 3 y 4 de la convocatoria), el equipo de desarrollo de la Facultad de Ingeniería Tampico presenta esta **Declaración y Evidencias de Uso de Inteligencia Artificial**. 

El equipo adoptó a las tecnologías de Inteligencia Artificial Generativa bajo el paradigma de **asistente de ingeniería cognitiva (*Copilot*)**. En todas las etapas del ciclo de vida del software, el criterio humano, la investigación de campo presencial, la toma de decisiones arquitectónicas y la validación de código fueron conducidos y supervisados directamente por los integrantes del equipo.

---

### 2. Herramientas de Inteligencia Artificial Utilizadas

| Herramienta / Modelo | Proveedor | Versión / Entorno | Propósito Principal en el Proyecto |
| :--- | :--- | :--- | :--- |
| **Google Gemini (Pro / Flash)** | Google Cloud / DeepMind | API v1.5 / v2.0 | Asistencia en el modelado de requisitos funcionales, consulta de sintaxis para expresiones de AppSheet y diseño de endpoints REST en Google Apps Script. |
| **Antigravity AI Agent** | Google Ecosystem | SDK v2.0 | Asistencia en la generación de diagramas Mermaid (Casos de Uso, Actividades y Modelo Entidad-Relación) y automatización en la compilación de documentos técnicos a PDF. |
| **GitHub Copilot** | GitHub / OpenAI | GPT-4o / Codex | Autocompletado contextual y sugerencias de sintaxis en JavaScript moderno (V8 Runtime) para Google Apps Script y estilos CSS de la interfaz web. |

---

### 3. Estimación Porcentual del Apoyo Brindado por IA

De acuerdo con la métrica estipulada en los lineamientos del concurso, se desglosa el porcentaje de asistencia de herramientas de inteligencia artificial versus la intervención y desarrollo humano:

| Actividad de Ingeniería | Porcentaje Apoyo IA | Porcentaje Intervención Humana | Justificación y Responsabilidad del Equipo Humano |
| :--- | :---: | :---: | :--- |
| **Análisis** | **35%** | **65%** | El trabajo de campo en las 3 casetas de CUTM Sur, las 4 entrevistas estructuradas a guardias y usuarios, y la identificación de problemáticas locales (ej. rampa de DiDis en paradas) fue 100% humano. La IA asistió en la clasificación MoSCoW y alineación al estándar ISO/IEC/IEEE 29148. |
| **Diseño** | **40%** | **60%** | La definición conceptual de entidades, reglas de negocio y arquitectura desacoplada fue autoría del equipo. La IA colaboró en la transcripción a sintaxis Mermaid de diagramas y en la paleta de colores institucional UAT. |
| **Programación** | **30%** | **70%** | El código transaccional de Google Apps Script (`Code.gs`), la gestión de bloqueos de concurrencia (`LockService`), y la lógica de formularios en AppSheet fueron programados y depurados por el equipo. La IA sugirió funciones utilitarias de formateo de fechas. |
| **Documentación** | **45%** | **55%** | La redacción de los contenidos técnicos, evidencias fotográficas y datos de campo provienen del equipo. La IA facilitó la estructuración formal del estándar IEEE 830, el Manual de Usuario y la generación automatizada de archivos finales. |

---

### 4. Actividades Específicas, Beneficios y Limitaciones

#### 4.1 Actividades donde se utilizó IA:
1. **Especificación Formal de Requisitos (IEEE 830):** Estructuración de los 22 Requisitos Funcionales (`RF-001` a `RF-022`) y Requisitos No Funcionales bajo la norma ISO/IEC 25010.
2. **Diagramación de Arquitectura de Software:** Generación del código vectorial Mermaid para Diagramas de Casos de Uso, Flujo de Actividades en Carril y Modelo Entidad-Relación (ERD).
3. **Optimización de Backend en Google Apps Script:** Estructuración de la función transaccional `registrarSalidaVehicular` con validación de estados y cálculo de permanencia.
4. **Fórmulas y Columnas Virtuales en AppSheet:** Consulta de expresiones matemáticas para convertir minutos a horas/minutos y condicionar la visualización de avisos viales.
5. **Estructuración Audiovisual:** Elaboración de la escaleta técnica cronometrada para el Video Demostrativo Oficial.

#### 4.2 Beneficios Obtenidos:
* **Reducción de Tiempo en Tareas Documentales:** Aceleración estimada del 60% en la maqueta formal de estándares de ingeniería de software.
* **Calidad y Rigor Normativo:** Adherencia estricta a plantillas internacionales sin omisión de secciones clave.
* **Seguridad Transaccional:** Identificación temprana de riesgos de concurrencia al interactuar simultáneamente desde múltiples casetas.

#### 4.3 Limitaciones Encontradas y Solución Humana Aplicada:
* *Limitación 1 (Contexto Institucional Específico):* Los modelos de IA sugerían inicialmente cobros de estacionamiento y tarifas comerciales. **Solución Humana:** El equipo reorientó el sistema hacia la realidad universitaria pública de la UAT (acceso gratuito para comunidad, control de aforo en 450 cajones y regulación de transporte escolar).
* *Limitación 2 (Gestión de Husos Horarios):* La IA proponía funciones con marcas de tiempo en formato UTC universal. **Solución Humana:** Se configuró explícitamente la zona horaria `America/Monterrey` (GMT-6) tanto en el archivo de manifiesto `appsscript.json` como en las funciones de guardado en Google Sheets.
* *Limitación 3 (Manejo de Concurrencia en Caseta):* Para evitar que dos guardias asignaran el mismo cajón o duplicaran una salida, el equipo humano implementó `LockService.getScriptLock()` con bloqueo transaccional de hasta 30 segundos.

---

### 5. Registro Cronológico de Prompts y Resultados Validados

A continuación se presentan los prompts representativos utilizados durante el desarrollo del proyecto, junto con sus parámetros y los resultados generados:

#### Prompt 1: Fase de Análisis e Ingeniería de Requisitos
* **Herramienta:** Google Gemini
* **Prompt Enviado:**
  > *"Actúa como un Ingeniero de Requisitos Senior especialista en estándares IEEE 830 y normativas ISO/IEC/IEEE 29148. Con base en la siguiente problemática de control vehicular en las 3 casetas del campus CUTM Sur de la Universidad Autónoma de Tamaulipas, redacta una tabla formal de requisitos funcionales numerados del RF-001 en adelante. Clasifícalos con prioridad MoSCoW, especifica la regla de negocio para prevenir dobles entradas, detección de lista negra de vehículos y cálculo automático de minutos de estancia."*
* **Resultado Obtenido:** Tabla estructurada de 22 requisitos funcionales con ID, nombre, descripción y prioridad, que se incorporó íntegramente en la Sección 3 del Documento de Requisitos de Software.

#### Prompt 2: Fase de Diseño de Diagramas UML y Modelo de Datos
* **Herramienta:** Antigravity AI
* **Prompt Enviado:**
  > *"Genera el código Mermaid para un Diagrama de Actividades de estado que modele el flujo completo de un vehículo llegando a caseta, escaneo de QR, bifurcación si la placa está registrada o si es visitante, verificación de lista negra, apertura de pluma, tránsito en campus, y posteriormente el registro de salida 1-click con cálculo de permanencia. Asegura que los nombres de los nodos sean claros y técnicos."*
* **Resultado Obtenido:** Diagrama de actividades de alta legibilidad embebido en la documentación técnica del proyecto.

#### Prompt 3: Fase de Programación en Google Apps Script
* **Herramienta:** GitHub Copilot / Gemini API
* **Prompt Enviado:**
  > *"Escribe una función en Google Apps Script (V8) llamada registrarSalidaVehicular(placa, casetaSalida) que utilice LockService para prevenir condiciones de carrera. La función debe buscar en la hoja 'Registros_Acceso' el último registro activo que tenga Estatus_Transito = 'Dentro' y coincida con la placa, estampar Timestamp_Salida con zona horaria GMT-6, calcular la diferencia en minutos entre la salida y la entrada, actualizar Estatus_Transito a 'Concluido' y registrar la acción en una hoja de Bitacora_Auditoria."*
* **Resultado Obtenido:** Función `registrarSalidaVehicular` implementada con éxito en el archivo `Code.gs` del backend.

#### Prompt 4: Fase de Fórmulas y Automatización en AppSheet
* **Herramienta:** Google Gemini
* **Prompt Enviado:**
  > *"¿Cuál es la fórmula óptima en AppSheet para una columna virtual que muestre el tiempo de permanencia formateado como 'X h Y min' a partir de una columna numérica de minutos [Tiempo_Permanencia_Min], manejando adecuadamente los casos cuando el vehículo aún no ha registrado su salida?"*
* **Resultado Obtenido:** Expresión `IF(ISNOTBLANK([Tiempo_Permanencia_Min]), CONCATENATE(FLOOR([Tiempo_Permanencia_Min] / 60), " h ", MOD([Tiempo_Permanencia_Min], 60), " min"), "En tránsito")` configurada en la tabla de registros.

---

### 6. Conclusión Ética
El uso de inteligencia artificial en este proyecto representó un acelerador técnico que potenció la capacidad de análisis y desarrollo del equipo, cumpliendo plenamente con los principios de transparencia, rigor académico y honestidad profesional exigidos por la Universidad Autónoma de Tamaulipas y Google.
