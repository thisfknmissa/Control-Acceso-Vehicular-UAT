# Evidencias de Levantamiento de Requisitos y Trabajo de Campo
## Sistema de Control de Acceso Vehicular - UAT Campus CUTM Sur
**Metodología:** Ingeniería de Requisitos (ISO/IEC/IEEE 29148:2018)  
**Institución:** Universidad Autónoma de Tamaulipas - Facultad de Ingeniería Tampico  
**Sede:** Centro Universitario Tampico Madero Sur (CUTM Sur)  

---

## 1. RESUMEN DEL TRABAJO DE CAMPO

Como parte fundamental de la fase de análisis e ingeniería de requisitos del Hackatón, se llevó a cabo un estudio de campo directo en los tres accesos vehiculares del campus CUTM Sur durante los días 14 y 15 de noviembre de 2026. Se realizaron observaciones estructuradas de tráfico en horas pico (06:45 a 08:30 hrs y 13:00 a 14:45 hrs) y se ejecutaron las cuatro entrevistas obligatorias estipuladas en la convocatoria.

### Diagnóstico de la Problemática Actual (Modelo As-Is)
1. **Registro Manual y Dictado entre Guardias:** El registro de un vehículo no recurrente, visitante o plataforma (DiDi / Uber) toma entre **15 y 30 segundos**, con **10 a 15 segundos** dedicados únicamente a que el oficial de carril le dicte de viva voz a su compañero en caseta los datos del conductor, la aplicación y la facultad a la que se dirige.
2. **Infracciones de Plataformas (Rampa en Paradas de Camión):** Conductores de aplicaciones como DiDi permanecen estacionados indebidamente haciendo "rampa" en las paradas de autobuses universitarios, obstruyendo el transporte público sin que exista un control de permanencia ni registro fotográfico formal.
2. **Congestión y Filas en Avenidas Principales:** En la Caseta 1 (Blvd. López Mateos) y Caseta 2 (Av. Universidad), las filas de espera en horario de entrada a clases (07:00 hrs) provocan cuellos de botella que invaden carriles de la vía pública.
3. **Nula Detección de Salidas:** Debido a la prisa en las horas pico de salida, los guardias no pueden registrar la hora exacta de salida de los automóviles, perdiéndose el control de permanencia.
4. **Falta de Validación de Identidad:** No existe un mecanismo ágil para detectar si una placa vehicular pertenece realmente a un estudiante activo, docente o si el vehículo ha sido reportado por alguna infracción o incidente dentro del campus.
5. **Pérdida y Deterioro de Bitácoras Físicas:** Las libretas de papel se desgastan por la lluvia, polvo y manipulación continua, impidiendo realizar análisis estadísticos o responder a auditorías de seguridad.

---

## 2. ENTREVISTAS OBLIGATORIAS DOCUMENTADAS

---

### ENTREVISTA 1: PERSONAL OPERATIVO DE CASETAS
- **Entrevistado:** Oficial Pedro Martínez Cruz (Guardia Operativo de Caseta en Turno Matutino).
- **Entrevistador:** Equipo de Desarrollo Hackatón UAT (Ingeniería en Sistemas Computacionales).
- **Fecha y Hora:** 14 de noviembre de 2026, 09:30 hrs.
- **Lugar:** Caseta 1 - Acceso Principal Blvd. Adolfo López Mateos (Campus CUTM Sur).
- **Objetivo de la Entrevista:** Conocer la dinámica operativa real en carril, la interacción entre guardias, el flujo de vehículos de plataformas digitales (DiDi / Uber), los medios de comunicación y evidencia utilizados, y los tiempos de atención para diseñar la aplicación en Google AppSheet.

#### Preguntas Realizadas y Respuestas Obtenidas:

1. **¿Cómo es la dinámica de trabajo en equipo en la caseta al recibir un vehículo y cuánto tiempo tardan en capturar la información preliminar?**
   > *"Trabajamos en pareja para agilizar el carril: mi compañero se ubica afuera junto a la ventanilla del conductor, revisa la unidad y me dicta en voz alta el nombre del conductor, la aplicación si se trata de un DiDi o Uber, y a qué área o facultad del campus se dirige. Ese proceso de dictado preliminar entre nosotros nos toma aproximadamente entre 10 y 15 segundos por vehículo."*

2. **¿Cuáles son los datos exactos que solicitan y deben registrar de cada conductor visitante o de plataformas de transporte (DiDi / Uber)?**
   > *"Los datos obligatorios que debemos registrar son: nombre, apellido, la aplicación que utiliza (DiDi, Uber, Taxi o particular), el tipo y folio de identificación oficial (sea credencial del INE o licencia de conducir vigente), el área o facultad que visita dentro del campus, y el asunto o motivo de su ingreso."*

3. **¿Cómo impacta el flujo de vehículos de plataforma (DiDi / Uber) en la operación del campus y qué problemáticas o restricciones se presentan con ellos?**
   > *"En la operación general no afecta en nada; de hecho, se va a implementar de forma estricta pedir las identificaciones a todos los conductores sin excepción. Sin embargo, siempre tenemos problemas recurrentes con los choferes de DiDi: no hay ningún problema con que ingresen al campus a dejar o recoger alumnos y maestros, el conflicto constante es que suelen quedarse haciendo 'rampa' (base o sitio no autorizado esperando pasaje) en las paradas de camión del campus, bloqueando las bahías de transporte universitario y de autobuses públicos."*

4. **¿Con qué medios de comunicación o herramientas digitales cuentan actualmente en la caseta para reportar incidencias o coordinarse?**
   > *"La radio de dos vías es el único medio digital oficial que tenemos en caseta para comunicarnos entre los accesos. Para todo lo demás usamos el celular personal: lo usamos para avisar a los grupos de WhatsApp de seguridad y vigilancia si se presenta algún problema, o para tomar pruebas y fotos de evidencia en caso de un incidente, golpe vehicular o conductor infractor que se rehúse a acatar indicaciones."*

5. **¿Cuál es el tiempo promedio total de atención y registro de un vehículo antes de autorizarle el paso y levantar la pluma?**
   > *"El tiempo total completo, desde que el vehículo se detiene, se le solicitan los documentos, mi compañero me dicta los datos, se anotan y se levanta la pluma de acceso, oscila entre 15 y 30 segundos por vehículo."*

#### Conclusiones y Requisitos Derivados:
- **Derivación Formal de Requisitos del Sistema:**
  - `RF-004 (Lectura QR y Captura Predictiva):` Sustituir el dictado manual de 10-15 segundos por lectura de código QR vehicular en < 2 segundos o tecleo predictivo de placas.
  - `RF-007 (Selector Rápido de Plataformas de Transporte):` Botones de 1 toque en la app para clasificar el servicio: `DiDi`, `Uber`, `Taxi`, `Particular`, `Proveedor`.
  - `RF-008 (Captura Específica de Identificaciones y Destinos):` Campos normalizados para: Nombre, Apellidos, Tipo de Identificación (`INE` / `Licencia`), Folio de Identificación, Área/Facultad Destino (`F.I.T.`, `FADU`, `FCAV`, `Deportes`, etc.) y Asunto.
  - `RF-013 (Módulo de Evidencia Fotográfica):` Integración con la cámara del dispositivo móvil dentro de AppSheet para tomar fotos y pruebas de incidentes o vehículos infractores directamente en la bitácora en la nube, sustituyendo el envío disperso en grupos de WhatsApp.
  - `RF-014 (Alerta de Regla de Negocio - Prohibición de Rampa en Paradas de Camión):` Aviso preventivo automático en la interfaz de caseta al registrar un DiDi o Uber: *"Tiempo máximo de permanencia: 15 min. Prohibido hacer base/rampa en paradas de autobús"*, con cronómetro de estancia para evitar saturación de bahías.
  - `RF-015 (Canal de Alertas Digitales Inmediatas):` Reemplazo de la dependencia exclusiva del radio de voz mediante notificaciones digitales instantáneas entre casetas y supervisión.
- **Métricas de Impacto Operativo:**
  - *Tiempo de dictado manual entre guardias:* 10 - 15 segundos $\rightarrow$ **0 segundos** (captura directa en app móvil o escaneo QR).
  - *Tiempo total de atención en caseta:* 15 - 30 segundos $\rightarrow$ **3 a 5 segundos** para plataformas/visitantes y **< 2 segundos** para usuarios autorizados.

---

### ENTREVISTA 2: RESPONSABLES ADMINISTRATIVOS DEL PROCESO
- **Entrevistado:** Lic. Roberto Garza Salazar (Coordinador de Servicios Generales y Seguridad Universitaria CUTM).
- **Entrevistador:** Equipo de Desarrollo Hackatón UAT.
- **Fecha y Hora:** 14 de noviembre de 2026, 11:30 hrs.
- **Lugar:** Dirección Administrativa del Campus CUTM Sur.
- **Objetivo de la Entrevista:** Identificar los requerimientos de control institucional, gestión de aforo, reportes periódicos y cumplimiento normativo.

#### Preguntas Realizadas y Respuestas Obtenidas:
1. **¿Cuál es el mayor reto administrativo respecto al control vehicular en el campus?**
   > *"Nuestra mayor preocupación es la seguridad del alumnado y la optimización del espacio. El campus tiene capacidad para unos 450 a 500 automóviles entre los estacionamientos de Ingeniería, FADU y Comercio. Muchas veces se saturan unos y otros están vacíos porque no tenemos visibilidad en tiempo real de cuántos carros hay adentro. Además, cuando Rectoría o el CACEI nos pide reportes de afluencia vehicular, tardamos semanas en capturar a mano las hojas de las libretas a Excel."*

2. **¿Qué tipo de reportes ejecutivos necesitan generar?**
   > *"Necesitamos saber el volumen de entradas por fecha y por hora para identificar las horas pico y coordinar mejor los rondines de vigilancia. También necesitamos conocer la proporción entre estudiantes, maestros y visitas externas, y que todo se pueda descargar en Excel o generar un PDF formal con membrete de la UAT para las juntas directivas."*

3. **¿Qué medidas de seguridad informática exigen para esta plataforma?**
   > *"Todo debe estar vinculado a los correos institucionales `@uat.edu.mx`. Ninguna persona no autorizada debe poder entrar a alterar los registros. Debe haber una bitácora donde se guarde qué guardia registró cada movimiento y a qué hora exacta."*

#### Conclusiones y Requisitos Derivados:
- **Derivación de Requisitos:**
  - `RF-013` y `RF-014`: Monitoreo en vivo de aforo y alerta preventiva al 85% de saturación.
  - `RF-019`: Análisis de horas pico y vehículos más frecuentes.
  - `RF-020`: Exportación a Excel y generación automatizada de reportes PDF en Google Drive.
  - `RF-021`: Bitácora inmutable de auditoría con correo institucional y sello de tiempo.

---

### ENTREVISTA 3: PERSONAL DE SEGURIDAD Y VIGILANCIA
- **Entrevistado:** Comandante Daniel Castillo (Jefe de Turno de Vigilancia CUTM).
- **Entrevistador:** Equipo de Desarrollo Hackatón UAT.
- **Fecha y Hora:** 15 de noviembre de 2026, 08:00 hrs.
- **Lugar:** Caseta 2 - Acceso Av. Universidad.
- **Objetivo de la Entrevista:** Analizar protocolos de atención ante incidentes, control de visitantes no reconocidos y comunicación inter-casetas.

#### Preguntas Realizadas y Respuestas Obtenidas:
1. **¿Qué sucede si un carro entra por la Caseta 1 y sale por la Caseta 3?**
   > *"Ese es el pan de cada día. La gente entra por López Mateos y sale por la Facultad de Ingeniería o por Av. Universidad. Como las casetas no están comunicadas, el guardia de la Caseta 3 no tiene idea de si ese carro entró legalmente o a qué hora ingresó. El sistema debe estar sincronizado en las tres casetas al instante."*

2. **¿Cómo se maneja el acceso de proveedores o personas externas que vienen a un trámite?**
   > *"A ellos se les debe pedir identificación oficial y anotar a qué oficina o maestro van a visitar. A veces los visitantes se quedan horas estacionados indebidamente. Si el sistema pudiera avisar al maestro que su visita ya llegó por correo, agilizaría mucho la atención."*

3. **¿Qué pasa si falla el internet o la luz en la caseta?**
   > *"No nos podemos quedar parados. El guardia debe poder usar los datos de su teléfono o que la app guarde los datos y los mande cuando regrese la señal."*

#### Conclusiones y Requisitos Derivados:
- **Derivación de Requisitos:**
  - `RF-007`: Sincronización en la nube entre las 3 casetas para permitir entradas y salidas cruzadas.
  - `RF-011`: Formulario específico para captura de visitantes con motivo de visita y anfitrión.
  - `RF-022`: Notificación por correo electrónico al personal anfitrión.
  - `RNF-DIS-002`: Funcionamiento offline con sincronización diferida en AppSheet.

---

### ENTREVISTA 4: USUARIOS FINALES (ESTUDIANTES Y DOCENTES)
- **Participantes:**
  - Mariana Hernández Castillo (Estudiante de 7mo semestre de ISC, F.I.T.).
  - Dr. Carlos Alberto Villarreal Garza (Profesor de Tiempo Completo e Investigador, F.I.T.).
- **Entrevistador:** Equipo de Desarrollo Hackatón UAT.
- **Fecha y Hora:** 15 de noviembre de 2026, 12:45 hrs.
- **Lugar:** Explanada de la Facultad de Ingeniería Tampico.
- **Objetivo de la Entrevista:** Evaluar el impacto en los tiempos de espera del usuario y la aceptación del uso de credencial o código QR vehicular.

#### Preguntas Realizadas y Respuestas Obtenidas:
1. **¿Cuánto tiempo tardan normalmente en ingresar al campus en automóvil o motocicleta?**
   > *Mariana (Estudiante): "A las 6:50 de la mañana para entrar a la clase de las 7:00, la fila por López Mateos llega casi hasta el semáforo. A veces tardamos 10 minutos solo en pasar la pluma porque el guardia se pone a revisar o anotar a personas que no traen calcomanía. Llegar tarde a un examen por la fila del estacionamiento es muy frustrante."*
   > *Dr. Villarreal (Docente): "Coincido totalmente. Como profesores requerimos acceso expedito para iniciar las cátedras a tiempo. Si existiera una calcomanía con QR que el guardia escanee en dos segundos sin bajarnos la ventanilla, el flujo vehicular sería continuo."*

2. **¿Estarían dispuestos a registrar su vehículo previamente en una base de datos institucional?**
   > *Mariana: "Por supuesto, si es un formulario en línea donde subes tus placas y tu matrícula y te dan tu código QR, cualquiera lo haría con gusto con tal de no hacer fila."*
   > *Dr. Villarreal: "Es lo más adecuado. Además nos daría mucha tranquilidad saber que si un vehículo ajeno sufre un percance o choca un auto en el estacionamiento, hay un registro exacto de quién conducía y a qué hora estuvo dentro."*

#### Conclusiones y Requisitos Derivados:
- **Derivación de Requisitos:**
  - `RF-003`: Padrón vehicular previo con asignación de código QR digital o impreso.
  - `RF-010`: Auditoría de tiempos de permanencia para esclarecimiento de percances viales en estacionamientos.
  - `RNF-REN-001`: Meta de tiempo de paso por vehículo reducida a menos de 3 segundos.

---

## 3. COMPARATIVA MÉTRICA: PROCESO ACTUAL VS SISTEMA PROPUESTO

| Indicador Operativo | Proceso Actual (Bitácora de Papel) | Sistema Propuesto (AppSheet + Apps Script) | Impacto / Mejora |
| :--- | :---: | :---: | :---: |
| **Tiempo de registro por vehículo en entrada** | 15 a 30 segundos (10-15 seg solo en dictado) | **2 a 4 segundos (QR) / 5 seg (DiDi/Uber)** | **Reducción de hasta 85% en tiempo de carril** |
| **Control de plataformas DiDi / Uber** | Nulo (hacen rampa en paradas de autobús) | **Alerta preventiva de "No Rampa" + Cronómetro de 15 min** | **Bahías de transporte 100% despejadas** |
| **Registro de evidencia fotográfica** | Fotos aisladas en celular personal y WhatsApp | **Captura fotográfica directa vinculada al folio en la nube** | **Expediente digital auditable con validez institucional** |
| **Medios de comunicación de incidencias** | Solo radio de dos vías y grupos de chat | **Alertas en tiempo real sincronizadas en AppSheet** | **Coordinación inmediata entre las 3 casetas** |
| **Tiempo de registro en salida** | No se registra (0%) | **1 toque en pantalla (< 2 segundos)** | **100% de trazabilidad de egresos** |
| **Capacidad de consulta en tiempo real** | Imposible (hojas físicas dispersas) | **Instantánea (móvil y web)** | **Información en 0 segundos** |
| **Cálculo de aforo en campus** | Desconocido (a ciegas) | **Medidor dinámico continuo** | **Control de saturación 24/7** |
| **Generación de reporte mensual** | 12 a 15 días hábiles de captura | **1 clic (PDF y Excel automático)** | **Ahorro de 100+ horas hombre/mes** |
| **Detección de vehículos bloqueados** | Dependiente de memoria visual del guardia | **Alerta roja automática e inmediata** | **Cero brechas de seguridad** |
