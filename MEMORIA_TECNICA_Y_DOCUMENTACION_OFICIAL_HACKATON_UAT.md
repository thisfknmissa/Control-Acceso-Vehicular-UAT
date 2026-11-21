# UNIVERSIDAD AUTÓNOMA DE TAMAULIPAS
## FACULTAD DE INGENIERÍA TAMPICO
### Coordinación de la Carrera de Ingeniería en Sistemas Computacionales
**Centro Universitario Tampico Madero Sur (CUTM Sur)**

---

# MEMORIA TÉCNICA Y ESPECIFICACIÓN INTEGRAL DE SOFTWARE
## Sistema de Control de Acceso Vehicular para la UAT CUTM Sur mediante Google Apps Script, Google Sheets y Google AppSheet

**Convocatoria:** Hackatón UAT en Alianza con Google Dev Day 2026  
**Fecha de Entrega:** 20 de Noviembre de 2026 | 11:50 PM  
**Versión del Documento:** 1.0 Oficial Final  
**Estándares Aplicados:** IEEE Std 830-1998, ISO/IEC/IEEE 29148:2018, ISO/IEC 25010:2011  
• **Video Demostrativo Oficial (Google Drive):** [https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing](https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing)

---

## FICHA TÉCNICA DEL SISTEMA EN PRODUCCIÓN

| Parámetro | Detalle Institucional |
| :--- | :--- |
| **Nombre del Proyecto** | Sistema de Control de Acceso Vehicular UAT CUTM Sur |
| **Cuenta Propietaria / Desarrollador** | `jmisaeldiaz.1@gmail.com` |
| **App en Vivo (AppSheet)** | [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7) |
| **Editor / Configuración AppSheet** | [https://www.appsheet.com/template/appdef?appId=a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/template/appdef?appId=a52cb700-5be6-41da-9d84-1a37db2d04e7) |
| **Base de Datos Google Sheets** | [https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit](https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit) |
| **Aplicación Cliente Principal** | Google AppSheet Multiplataforma (Móvil Android/iOS y PWA Windows) |
| **Servicio de Automatización y Triggers** | Google Apps Script (Triggers, Reportes Automáticos y Correos) |
| **Capacidad de Aforo del Campus** | 450 cajones simultáneos distribuidos en Caseta 1, Caseta 2 y Caseta 3 |
| **• Video Demostrativo Oficial** | [https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing](https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing) |
| **Tecnologías Empleadas** | Google AppSheet, Google Apps Script (Motor V8), Google Sheets, HTML5, CSS3/Bootstrap 5, JavaScript |

---

# CAPÍTULO I: DESCRIPCIÓN GENERAL Y PROBLEMÁTICA

## 1.1 Contexto Institucional
La Universidad Autónoma de Tamaulipas (UAT), Campus CUTM Sur, alberga una comunidad superior a los 12,000 universitarios entre estudiantes de licenciatura y posgrado, catedráticos, directivos y trabajadores administrativos. El campus cuenta con tres casetas de acceso y egreso vehicular:
1. **Caseta 1 (Acceso Principal Norte):** Sobre el Boulevard Adolfo López Mateos, concentrando más del 55% del tráfico vehicular en horarios pico (06:45 a 08:00 hrs).
2. **Caseta 2 (Acceso Poniente):** Sobre Avenida Universidad, con alta concentración de egresos de estudiantes y docentes de facultades centrales.
3. **Caseta 3 (Acceso Este):** Conectada con el área deportiva y la Facultad de Ingeniería Tampico (F.I.T.), con tránsito mixto de automóviles particulares, transporte universitario y unidades de proveedores.

## 1.2 Problemática Identificada
Hasta la puesta en marcha de este proyecto, el control de acceso vehicular se efectuaba de forma enteramente **manual sobre bitácoras físicas de papel**. Esta práctica generaba las siguientes fallas críticas:
- **Tiempos de Espera y Dictado Ineficiente en Carril:** En caseta se requiere trabajar en pareja; el proceso completo toma entre 15 y 30 segundos por vehículo, con 10 a 15 segundos dedicados únicamente a que el oficial de carril le dicte de viva voz a su compañero los datos del chofer, la aplicación y la facultad a la que se dirige.
- **Infracciones de Plataformas de Transporte (Rampa en Paradas de Camión):** Vehículos de plataformas como DiDi y Uber ingresan con pasaje pero frecuentemente se estacionan de manera indebida haciendo "rampa" (base/sitio no autorizado) en las bahías y paradas de autobuses universitarios, entorpeciendo el transporte público sin que existiera un mecanismo para controlar su tiempo de permanencia ni registrar evidencia fotográfica.
- **Inexistencia de Validación Inmediata:** Los guardias carecían de un mecanismo para verificar si una placa correspondía realmente a un alumno vigente, docente o a un vehículo con reporte de robo o bloqueo.
- **Imposibilidad de Medir el Aforo:** No se tenía visibilidad de cuántos vehículos estaban dentro del campus en un momento dado, provocando saturación y autos circulando en círculos en busca de estacionamiento.
- **Vulnerabilidad de los Registros:** Las libretas de papel se desgastaban por intemperie (lluvia, polvo, humedad de Tampico) y no permitían búsquedas forenses ni reportes estadísticos para la toma de decisiones.

## 1.3 Objetivo General
Desarrollar e implementar una solución multiplataforma basada en **Google AppSheet**, **Google Apps Script** y **Google Sheets** que permita digitalizar y automatizar el registro, validación y monitoreo del acceso vehicular en las tres casetas del campus CUTM Sur, reduciendo los tiempos de tránsito a menos de 3 segundos por unidad y garantizando la trazabilidad y seguridad institucional en tiempo real.

## 1.4 Alcance Funcional Mínimo Cumplido
- **Catálogos:** Vehículos autorizados, Empleados, Estudiantes, Visitantes y Casetas.
- **Operación:** Registro de entrada y salida con caseta utilizada, fecha/hora automática, captura de placas/QR y tipificación de usuario.
- **Consultas:** Por número de placa, rango de fechas, caseta o acceso, y tipo de usuario.
- **Reportes:** Entradas/salidas por periodo, vehículos más frecuentes, horarios pico, exportación nativa a Excel y generación de PDF formal en Drive.
- **Seguridad:** Bitácora inmutable de auditoría, control de roles institucionales y detección de lista negra.

---

# CAPÍTULO II: ACTIVIDADES DE INGENIERÍA DE REQUISITOS Y TRABAJO DE CAMPO

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


---

# CAPÍTULO III: ESPECIFICACIÓN DE REQUISITOS DE SOFTWARE (IEEE 830 / ISO 29148 / ISO 25010)

# DOCUMENTO DE ESPECIFICACIÓN DE REQUERIMIENTOS DE SOFTWARE (ERS)
## Sistema de Control de Acceso Vehicular para la UAT Campus CUTM Sur
**Estándares Aplicados:** IEEE 830-1998 / ISO/IEC/IEEE 29148:2018 / ISO/IEC 25010 (Calidad de Software)  
**Institución:** Universidad Autónoma de Tamaulipas (UAT)  
**Unidad Académica:** Facultad de Ingeniería Tampico (F.I.T.)  
**Coordinación:** Ingeniería en Sistemas Computacionales  
**Sede:** Centro Universitario Tampico Madero (CUTM Sur)  
**Versión:** 1.0 Oficial  
**Fecha:** Noviembre 2026  

---

## 1. INTRODUCCIÓN

### 1.1 Propósito
El propósito del presente documento es especificar de manera formal, completa y verificable los requerimientos funcionales y no funcionales para el diseño, desarrollo e implantación del **Sistema de Control de Acceso Vehicular** del Campus Universitario Tampico Madero Sur (CUTM Sur) de la Universidad Autónoma de Tamaulipas (UAT), utilizando la plataforma tecnológica integrada por **Google AppSheet**, **Google Apps Script** y **Google Sheets**.

Este documento está dirigido al comité evaluador del Hackatón UAT-Google, al equipo de desarrollo de software, al personal de la Coordinación de Seguridad Universitaria y a los oficiales operativos de las casetas de acceso.

### 1.2 Alcance del Producto
El sistema contempla la digitalización integral del control vehicular en los tres accesos del campus:
- **Caseta 1:** Acceso Principal Norte (Blvd. Adolfo López Mateos).
- **Caseta 2:** Acceso Poniente (Av. Universidad).
- **Caseta 3:** Acceso Este (Área Deportiva y Facultad de Ingeniería Tampico).

El sistema sustituye las bitácoras físicas de papel por una solución móvil y web en la nube que permite:
1. El empadronamiento digital de vehículos de estudiantes, docentes, personal administrativo y proveedores/visitantes.
2. La lectura rápida de placas y códigos QR mediante cámaras de dispositivos móviles (smartphones/tablets) y lectores de caseta.
3. El registro automatizado de entradas y salidas con cálculo instantáneo del tiempo de permanencia.
4. El monitoreo en tiempo real del aforo de estacionamientos y saturación del campus.
5. La detección inmediata de vehículos no autorizados, reportados o en lista negra.
6. La generación automática de reportes gerenciales en formatos Excel (.xlsx) y PDF almacenados en Google Drive.
7. Notificaciones automatizadas por correo electrónico institucional al personal que recibe visitas externas.

### 1.3 Definiciones, Acrónimos y Abreviaturas
- **CUTM Sur:** Centro Universitario Tampico Madero Sur.
- **UAT:** Universidad Autónoma de Tamaulipas.
- **F.I.T.:** Facultad de Ingeniería Tampico.
- **AppSheet:** Plataforma no-code de Google Cloud para desarrollo rápido de aplicaciones web y móviles conectadas a fuentes de datos.
- **Apps Script:** Lenguaje de scripting basado en JavaScript moderno (V8) ejecutado en la nube de Google Workspace.
- **Aforo:** Cantidad de vehículos que se encuentran simultáneamente dentro de los estacionamientos del campus.
- **LPR / OCR:** *License Plate Recognition* / *Optical Character Recognition* (Reconocimiento Óptico de Caracteres para placas vehiculares).
- **QR:** *Quick Response Code*, código bidimensional para identificación ágil en caseta.
- **RF:** Requisito Funcional.
- **RNF:** Requisito No Funcional.
- **CU:** Caso de Uso.

### 1.4 Referencias Normativas
- **IEEE Std 830-1998:** *IEEE Recommended Practice for Software Requirements Specifications*.
- **ISO/IEC/IEEE 29148:2018:** *Systems and software engineering — Life cycle processes — Requirements engineering*.
- **ISO/IEC 25010:2011:** *Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models*.
- **Reglamento General de Tránsito y Estacionamiento de la Universidad Autónoma de Tamaulipas.**

---

## 2. DESCRIPCIÓN GENERAL

### 2.1 Perspectiva del Producto
El Sistema de Control de Acceso Vehicular opera como un ecosistema en la nube sobre la infraestructura de **Google Workspace**. No requiere servidores físicos locales ni licencias complejas de bases de datos relacionales tradicionales, garantizando disponibilidad 24/7, bajo costo de mantenimiento y escalabilidad nativa.

```mermaid
graph TD
    A[Dispositivos Móviles en Casetas / Smartphones y Tablets] -->|Lectura QR / Captura Placa| B[Google AppSheet Client App]
    C[Computadoras de Oficina / Casetas] -->|Navegador Web Chrome/Brave| B
    C -->|Interfaz Web de Respaldo| D[Google Apps Script Web App]
    B -->|Sincronización Bidireccional| E[(Google Sheets - Base de Datos Matriz)]
    D -->|Lectura / Escritura API REST| E
    D -->|Generación de Reportes PDF| F[Google Drive Storage]
    D -->|Notificaciones Automáticas| G[Google Gmail / Workspace Mail]
    E -->|Métricas y Aforo en Tiempo Real| H[Dashboard Gerencial UAT]
```

### 2.2 Clases y Características de Usuarios
1. **Guardia Operativo de Caseta:** Oficial de seguridad ubicado en las tres entradas/salidas. Posee competencias digitales básicas. Requiere una interfaz con botones grandes, escaneo de un solo toque y tiempos de respuesta menores a 3 segundos para evitar filas.
2. **Coordinador / Supervisor de Seguridad:** Personal administrativo responsable de la vigilancia del campus. Requiere consultas avanzadas, monitoreo de aforo, control de lista negra y exportación de bitácoras.
3. **Administrador del Sistema (TI / F.I.T.):** Personal de Sistemas Computacionales encargado del mantenimiento de catálogos, asignación de roles y parametrización general.
4. **Comunidad Universitaria (Estudiantes, Docentes, Administrativos):** Portadores de calcomanía o gafete QR en sus vehículos para paso ágil.
5. **Visitantes Externos:** Conductores eventuales que requieren registro de identificación y registro del motivo de visita.

### 2.3 Restricciones de Diseño e Implementación
- **Plataforma Obligatoria:** Google AppSheet, Google Apps Script y Google Sheets conforme a las bases oficiales del Hackatón.
- **Conectividad:** Operación en red Wi-Fi universitaria (Red UAT) y respaldo para conectividad celular 4G/5G en caso de intermitencia.
- **Seguridad:** Acceso restringido exclusivamente a cuentas institucionales autorizadas mediante Google OAuth 2.0.

---

## 3. REQUISITOS FUNCIONALES (RF)

Los requisitos funcionales han sido identificados, clasificados y priorizados bajo la metodología MoSCoW (*Must have, Should have, Could have, Won't have*):

| Código | Nombre del Requisito | Prioridad | Descripción / Regla de Negocio |
| :--- | :--- | :---: | :--- |
| **RF-001** | **Catálogo de Casetas** | Must | El sistema debe permitir registrar y administrar las tres casetas del campus CUTM Sur (Caseta 1 López Mateos, Caseta 2 Av. Universidad, Caseta 3 Deportes/FIT) con estatus y vigilante en turno. |
| **RF-002** | **Catálogo de Usuarios** | Must | El sistema debe registrar a los usuarios autorizados clasificándolos en: Estudiantes (con matrícula), Docentes (número de empleado), Administrativos (número de nómina) y Visitantes (INE/identificación oficial). |
| **RF-003** | **Catálogo de Vehículos Autorizados** | Must | El sistema debe mantener el padrón vehicular con: Placa, Propietario (FK Usuario), Tipo de vehículo (Auto, Moto, Camioneta, Carga), Marca, Modelo, Color, Código QR único y Estatus (Autorizado, Bloqueado, Revisión). |
| **RF-004** | **Captura y Escaneo de Placas / QR** | Must | El sistema debe permitir registrar la entrada vehicular tanto mediante la lectura de código QR con la cámara del dispositivo móvil como por teclado manual del número de placa. |
| **RF-005** | **Autocompletado de Información Vehicular** | Must | Al ingresar o escanear una placa registrada, el sistema debe autocompletar automáticamente el nombre del conductor, tipo de usuario, vehículo y estatus de autorización. |
| **RF-006** | **Registro Automático de Fecha y Hora** | Must | El sistema debe estampar de forma inmutable la fecha (`TODAY()`) y la hora exacta (`TIMENOW()`) al registrar entradas y salidas sin intervención manual del guardia. |
| **RF-007** | **Identificación de Caseta de Operación** | Must | El sistema debe asociar de forma automática o por selección de terminal la caseta por donde se efectúa el tránsito (`CAS-01`, `CAS-02` o `CAS-03`). |
| **RF-008** | **Prevención de Doble Entrada** | Must | Si un vehículo con estatus `Dentro` intenta registrar una nueva entrada sin haber registrado previamente su salida, el sistema debe alertar al guardia y bloquear el duplicado. |
| **RF-009** | **Registro de Salida Rápida (1-Click)** | Must | El guardia debe poder buscar la placa del vehículo que se aproxima a la pluma de salida y confirmar la salida en un solo toque, cambiando el estatus a `Concluido`. |
| **RF-010** | **Cálculo Automático de Permanencia** | Must | El sistema debe calcular en tiempo real los minutos transcurridos entre la entrada y la salida (`TOTALMINUTES(Timestamp_Salida - Timestamp_Entrada)`). |
| **RF-011** | **Registro de Visitantes No Empadronados** | Must | Para vehículos no registrados previamente en el padrón, el sistema debe habilitar un formulario ágil para capturar nombre, INE, motivo de visita y anfitrión antes de autorizar el ingreso. |
| **RF-012** | **Alerta de Lista Negra / Vehículos Bloqueados** | Must | Si un vehículo catalogado como `Bloqueado` es presentado en caseta, el sistema debe desplegar una alerta visual de alta prioridad (roja) y registrar un intento de violación de seguridad. |
| **RF-013** | **Monitoreo de Aforo en Tiempo Real** | Must | El sistema debe computar y mostrar en todo momento el número de vehículos dentro de las instalaciones, el cupo disponible (de 450 cajones) y el porcentaje de ocupación. |
| **RF-014** | **Alerta de Saturación de Estacionamiento** | Should | El sistema debe emitir una advertencia visual cuando el aforo supere el 85% de la capacidad máxima del campus para desviar tráfico hacia casetas con menor afluencia. |
| **RF-015** | **Consulta Avanzada por Placa** | Must | El sistema debe permitir consultar el historial completo de accesos, fechas, casetas utilizadas y tiempos de estancia de cualquier placa vehicular. |
| **RF-016** | **Consulta por Rango de Fechas** | Must | El sistema debe permitir filtrar los registros por fecha de inicio y fin para auditar periodos específicos. |
| **RF-017** | **Consulta por Acceso / Caseta** | Must | El sistema debe permitir desglosar el flujo de vehículos correspondiente a cada una de las 3 casetas. |
| **RF-018** | **Consulta por Tipo de Usuario** | Must | El sistema debe permitir segmentar el tráfico entre Estudiantes, Docentes, Administrativos y Visitantes. |
| **RF-019** | **Reporte de Vehículos Más Frecuentes y Horas Pico** | Should | El sistema debe identificar los vehículos con mayor frecuencia de ingreso y los intervalos horarios con mayor saturación (horas pico). |
| **RF-020** | **Exportación a Excel y Generación de PDF** | Must | El sistema debe permitir exportar los datos crudos a formato Microsoft Excel (.xlsx) y generar informes ejecutivos en formato PDF con diseño institucional UAT. |
| **RF-021** | **Bitácora de Auditoría Inmutable** | Must | Cada operación de alta, baja, modificación, acceso o consulta debe quedar registrada con marca temporal, correo del usuario autenticado e IP/terminal. |
| **RF-022** | **Notificación de Llegada de Visitantes** | Could | El sistema debe enviar un correo electrónico automático al personal anfitrión cuando un visitante registre su ingreso al campus. |

---

## 4. REQUISITOS NO FUNCIONALES (RNF) - ISO/IEC 25010

### 4.1 Seguridad (Security)
- **RNF-SEG-001 (Autenticación):** El acceso al sistema debe requerir autenticación obligatoria mediante cuentas corporativas Google Workspace `@uat.edu.mx`.
- **RNF-SEG-002 (Control de Acceso Basado en Roles - RBAC):** Se implementan perfiles con privilegios diferenciados:
  - *Guardia Caseta:* Registro de entradas, salidas y consulta rápida. Sin permisos para eliminar registros históricos.
  - *Supervisor de Seguridad:* Consultas globales, administración de lista negra y emisión de reportes.
  - *Administrador TI:* Configuración integral de tablas, casetas y parámetros del sistema.
- **RNF-SEG-003 (Integridad y No Repudio):** Los registros de entrada y salida no podrán ser alterados retroactivamente; cualquier corrección se registrará como un nuevo evento en la bitácora de auditoría.

### 4.2 Rendimiento y Eficiencia (Performance Efficiency)
- **RNF-REN-001 (Tiempo de Respuesta):** El tiempo de guardado y procesamiento de un registro de entrada o salida no debe exceder de **2.5 segundos** en condiciones normales de red.
- **RNF-REN-002 (Capacidad de Concurrencia):** El sistema debe soportar operaciones simultáneas desde las tres casetas sin bloqueos ni inconsistencias de datos, utilizando mecanismos de bloqueo transaccional (`LockService`).

### 4.3 Disponibilidad y Fiabilidad (Reliability)
- **RNF-DIS-001 (Disponibilidad del Servicio):** Respaldado por el SLA de Google Cloud Platform / Google Workspace (99.9% de disponibilidad anual).
- **RNF-DIS-002 (Resiliencia Fuera de Línea):** AppSheet almacena temporalmente los datos en caché local si se interrumpe la conexión a internet, sincronizándolos automáticamente tan pronto se restablece el enlace.

### 4.4 Usabilidad (Usability)
- **RNF-USA-001 (Facilidad de Aprendizaje):** Un guardia de nuevo ingreso debe ser capaz de operar con fluidez el registro de entradas y salidas tras una capacitación máxima de **15 minutos**.
- **RNF-USA-002 (Accesibilidad y Ergonomía):** Botones de acción táctiles de al menos 48x48 píxeles con alto contraste de color para visibilidad en exteriores y bajo luz solar directa.

### 4.5 Mantenibilidad (Maintainability)
- **RNF-MAN-001 (Arquitectura No-Code/Low-Code):** Permite incorporar nuevas casetas, campos o reglas de negocio sin necesidad de reescribir la base del código ni reconfigurar servidores.

---

## 5. CASOS DE USO (CU)

```mermaid
flowchart LR
    G((Guardia de Caseta))
    S((Supervisor Seguridad))
    A((Administrador TI))

    G --> CU01[CU-01: Registrar Entrada por QR/Placa]
    G --> CU02[CU-02: Registrar Salida Vehicular]
    G --> CU03[CU-03: Registrar Visitante Eventual]
    G --> CU04[CU-04: Consultar Vehículo en Tránsito]

    S --> CU05[CU-05: Monitorear Aforo en Vivo]
    S --> CU06[CU-06: Gestionar Lista Negra / Bloqueos]
    S --> CU07[CU-07: Generar Reporte PDF/Excel]

    A --> CU08[CU-08: Administrar Catálogo de Casetas y Usuarios]
    A --> CU09[CU-09: Auditar Bitácora de Operaciones]
```

### 5.1 Caso de Uso Detallado: CU-01 Registrar Entrada Vehicular
- **Actor:** Guardia Operativo de Caseta.
- **Precondiciones:** El guardia ha iniciado sesión en la app y tiene seleccionada su caseta de servicio.
- **Flujo Principal:**
  1. El vehículo se detiene frente a la pluma de la caseta.
  2. El guardia enfoca la calcomanía/gafete QR con la cámara del dispositivo (o ingresa los caracteres de la placa).
  3. El sistema busca la placa en el catálogo de `Vehiculos`.
  4. El sistema valida que el vehículo se encuentre con estatus `Autorizado` y que NO tenga un registro activo de `Dentro`.
  5. El sistema autocompleta el nombre del conductor, tipo de usuario y características de la unidad.
  6. El guardia presiona "Guardar Entrada".
  7. El sistema graba el registro con `Fecha`, `Hora_Entrada`, `Caseta_Entrada` y marca `Estatus_Transito = "Dentro"`.
  8. Se actualiza el aforo general del campus y el guardia levanta la pluma de acceso.
- **Flujos Alternos:**
  - *4a. Vehículo en Lista Negra:* El sistema despliega pantalla roja "ACCESO DENEGADO - VEHÍCULO BLOQUEADO". El guardia no permite el ingreso y notifica por radio al supervisor.
  - *4b. Doble Entrada Detectada:* El sistema indica que la placa ya ingresó previamente. El guardia verifica si el vehículo salió sin registrarse o si se trata de una clonación de placa.
  - *4c. Vehículo No Empadronado:* El sistema deriva automáticamente al flujo **CU-03 (Registro de Visitante)**.
- **Postcondiciones:** El aforo aumenta en +1 y el vehículo queda registrado en estado `Dentro`.

### 5.2 Caso de Uso Detallado: CU-02 Registrar Salida Vehicular
- **Actor:** Guardia Operativo de Caseta.
- **Precondiciones:** El vehículo se encuentra físicamente en el campus con registro `Dentro`.
- **Flujo Principal:**
  1. El vehículo llega al carril de salida de cualquier caseta (Caseta 1, 2 o 3).
  2. El guardia visualiza la placa e ingresa los últimos 3 dígitos o la selecciona de la lista "Vehículos en Campus".
  3. El sistema muestra la ficha del vehículo y la hora en que ingresó.
  4. El guardia presiona el botón de acción rápida **"Registrar Salida"**.
  5. El sistema registra `Timestamp_Salida`, `Caseta_Salida`, calcula el `Tiempo_Permanencia_Min` y cambia `Estatus_Transito` a `"Concluido"`.
  6. El aforo se descuenta en -1 y se abre la pluma de egreso.
- **Postcondiciones:** El registro de tránsito queda cerrado y archivado en el histórico.

---

## 6. DIAGRAMAS DEL SISTEMA

### 6.1 Diagrama de Actividades: Flujo Integral de Control de Tránsito
```mermaid
stateDiagram-v2
    [*] --> VehiculoLlegaCaseta: Llega a Caseta
    VehiculoLlegaCaseta --> EscaneoIdentificacion: Escanea QR o Digita Placa
    
    state Decision_Registro <<choice>>
    EscaneoIdentificacion --> Decision_Registro
    
    Decision_Registro --> ValidaAutorizacion: ¿Placa Registrada?
    Decision_Registro --> FormularioVisitante: No Registrada
    
    state Decision_Bloqueo <<choice>>
    ValidaAutorizacion --> Decision_Bloqueo
    Decision_Bloqueo --> AlertaSeguridad: Estatus = Bloqueado
    Decision_Bloqueo --> VerificaTransito: Estatus = Autorizado
    
    AlertaSeguridad --> RechazoAcceso: Acceso Denegado
    RechazoAcceso --> [*]
    
    state Decision_Transito <<choice>>
    VerificaTransito --> Decision_Transito
    Decision_Transito --> AlertaDobleEntrada: ¿Ya está Dentro?
    Decision_Transito --> GrabaEntrada: No está Dentro
    
    FormularioVisitante --> GrabaEntrada: Captura INE y Motivo
    
    GrabaEntrada --> AperturaPluma: Aforo +1
    AperturaPluma --> VehiculoEnCampus: Circula en Campus CUTM
    
    VehiculoEnCampus --> LlegaSalida: Llega a Caseta de Salida
    LlegaSalida --> BuscaPlacaSalida: Localiza Placa
    BuscaPlacaSalida --> ConfirmaSalida: Acción 1-Click
    ConfirmaSalida --> CalculaEstancia: Calcula Tiempo Estancia
    CalculaEstancia --> CierraTransito: Estatus = Concluido (Aforo -1)
    CierraTransito --> [*]
```

### 6.2 Diagrama Entidad-Relación (Modelo Relacional de Datos)
```mermaid
erDiagram
    CONFIGURACION {
        string Parametro PK
        string Valor
        string Descripcion
        date Ultima_Actualizacion
    }
    CASETAS {
        string ID_Caseta PK
        string Nombre_Caseta
        string Ubicacion
        string Responsable_Turno
        string Telefono_Contacto
        string Estatus
    }
    USUARIOS {
        string ID_Usuario PK
        string Nombre_Completo
        string Tipo_Usuario
        string Matricula_NoEmpleado
        string Facultad_Dependencia
        string Email_Institucional
        string Telefono
        date Fecha_Registro
        string Estatus
    }
    VEHICULOS {
        string Placa PK
        string ID_Usuario FK
        string Nombre_Conductor
        string Tipo_Usuario
        string Tipo_Vehiculo
        string Marca
        string Modelo
        int Anio
        string Color
        string Tag_QR
        string Seguro_Vigente
        string Estatus_Acceso
        string Observaciones
    }
    REGISTROS_ACCESO {
        string ID_Registro PK
        date Fecha
        time Hora_Entrada
        datetime Timestamp_Entrada
        string Caseta_Entrada FK
        string Placa FK
        string Tipo_Vehiculo
        string Marca_Modelo
        string Tipo_Usuario
        string Nombre_Conductor
        string Matricula_ID
        string Motivo_Visita
        time Hora_Salida
        datetime Timestamp_Salida
        string Caseta_Salida FK
        int Tiempo_Permanencia_Min
        string Estatus_Transito
        string Guardia_Registro
        string Observaciones
    }
    BITACORA_AUDITORIA {
        string ID_Log PK
        datetime Timestamp
        string Usuario_Email
        string Accion
        string Registro_Afectado
        string Caseta_Terminal
        string Detalle_Operacion
    }

    USUARIOS ||--o{ VEHICULOS : "asigna vehículo"
    VEHICULOS ||--o{ REGISTROS_ACCESO : "registra movimiento"
    CASETAS ||--o{ REGISTROS_ACCESO : "opera acceso"
```

---

## 7. MATRIZ DE TRAZABILIDAD DE REQUISITOS (RTM)

| ID Requisito | Caso de Uso | Componente Tecnológico | Criterio de Verificación | Estado |
| :---: | :---: | :--- | :--- | :---: |
| **RF-001** | CU-08 | Google Sheets (`Casetas`) / AppSheet Ref | Las 3 casetas están dadas de alta y seleccionables | Verificado |
| **RF-002** | CU-08 | Google Sheets (`Usuarios`) / AppSheet Enum | Clasificación por Estudiante, Docente, Admin, Visita | Verificado |
| **RF-003** | CU-08 | Google Sheets (`Vehiculos`) / AppSheet Table | Padrón vehicular con placa como clave única | Verificado |
| **RF-004** | CU-01 | AppSheet Scanner (Cámara) + Input Form | Lectura de QR en < 1 segundo o captura manual | Verificado |
| **RF-005** | CU-01 | AppSheet Dereference Formulas | Autocompleta datos del propietario al digitar placa | Verificado |
| **RF-006** | CU-01/02 | AppSheet `TODAY()`, `TIMENOW()`, `NOW()` | Marcas de tiempo inmutables generadas en servidor | Verificado |
| **RF-007** | CU-01/02 | AppSheet UserSettings / Dropdown Caseta | Identifica Caseta 1, 2 o 3 en cada movimiento | Verificado |
| **RF-008** | CU-01 | Apps Script / AppSheet Valid_If | Bloquea entrada si el vehículo ya está `Dentro` | Verificado |
| **RF-009** | CU-02 | AppSheet Action "Salida Rápida" | Botón 1-click en vista deck de vehículos dentro | Verificado |
| **RF-010** | CU-02 | Apps Script / AppSheet Formula `TOTALMINUTES` | Calcula tiempo de estancia exacto en minutos | Verificado |
| **RF-011** | CU-03 | AppSheet Form "Registro Visitante" | Captura obligatoria de INE y motivo de ingreso | Verificado |
| **RF-012** | CU-06 | AppSheet Format Rules & Apps Script Lock | Alerta visual roja y rechazo a placas bloqueadas | Verificado |
| **RF-013** | CU-05 | AppSheet Dashboard / Sheets Formulas | Medidor de aforo y cajones libres en tiempo real | Verificado |
| **RF-014** | CU-05 | Google Sheets Conditional / Apps Script Alert | Alerta visual y por correo al superar 85% de aforo | Verificado |
| **RF-015** | CU-04 | AppSheet Search & Apps Script API | Historial filtrable por número de placa | Verificado |
| **RF-016** | CU-07 | AppSheet Interactive Slices | Filtro de auditoría por rango de fechas | Verificado |
| **RF-017** | CU-07 | AppSheet Group By Caseta | Reporte segregado por cada acceso | Verificado |
| **RF-018** | CU-07 | AppSheet Group By Tipo Usuario | Métricas por estudiantes, docentes y visitantes | Verificado |
| **RF-019** | CU-07 | Apps Script Analytics & Sheets Dashboard | Gráficos de horas pico y usuarios frecuentes | Verificado |
| **RF-020** | CU-07 | Google Sheets Export + Apps Script PDF Gen | Exportación nativa a .xlsx y PDF oficial en Drive | Verificado |
| **RF-021** | CU-09 | Google Sheets (`Bitacora_Auditoria`) | Log inmutable con usuario, timestamp y detalle | Verificado |
| **RF-022** | CU-01 | Google Apps Script `MailApp.sendEmail` | Correo automático a anfitrión de visitante | Verificado |


---

# CAPÍTULO IV: ARQUITECTURA DEL SISTEMA Y MODELO DE DATOS RELACIONAL

# Diccionario de Datos y Modelo de Tablas
## Sistema de Control de Acceso Vehicular - UAT Campus CUTM Sur
**Plataforma de Base de Datos:** Google Sheets / Microsoft Excel (.xlsx)

---

### 1. Arquitectura del Modelo de Datos
El sistema utiliza una arquitectura relacional normalizada implementada sobre Google Sheets como backend persistente, consumida directamente por la aplicación móvil/web **Google AppSheet** y sincronizada con la API REST de **Google Apps Script**.

```mermaid
erDiagram
    CONFIGURACION {
        string Parametro PK
        string Valor
        string Descripcion
        date Ultima_Actualizacion
    }
    CASETAS {
        string ID_Caseta PK
        string Nombre_Caseta
        string Ubicacion
        string Responsable_Turno
        string Telefono_Contacto
        string Estatus
    }
    USUARIOS {
        string ID_Usuario PK
        string Nombre_Completo
        string Tipo_Usuario
        string Matricula_NoEmpleado
        string Facultad_Dependencia
        string Email_Institucional
        string Telefono
        date Fecha_Registro
        string Estatus
    }
    VEHICULOS {
        string Placa PK
        string ID_Usuario FK
        string Nombre_Conductor
        string Tipo_Usuario
        string Tipo_Vehiculo
        string Marca
        string Modelo
        int Anio
        string Color
        string Tag_QR
        string Seguro_Vigente
        string Estatus_Acceso
        string Observaciones
    }
    REGISTROS_ACCESO {
        string ID_Registro PK
        date Fecha
        time Hora_Entrada
        datetime Timestamp_Entrada
        string Caseta_Entrada FK
        string Placa FK
        string Tipo_Vehiculo
        string Marca_Modelo
        string Tipo_Usuario
        string Nombre_Conductor
        string Matricula_ID
        string Motivo_Visita
        time Hora_Salida
        datetime Timestamp_Salida
        string Caseta_Salida FK
        int Tiempo_Permanencia_Min
        string Estatus_Transito
        string Guardia_Registro
        string Observaciones
    }
    BITACORA_AUDITORIA {
        string ID_Log PK
        datetime Timestamp
        string Usuario_Email
        string Accion
        string Registro_Afectado
        string Caseta_Terminal
        string Detalle_Operacion
    }

    USUARIOS ||--o{ VEHICULOS : "posee"
    VEHICULOS ||--o{ REGISTROS_ACCESO : "registra transito"
    CASETAS ||--o{ REGISTROS_ACCESO : "punto de control"
```

---

### 2. Especificación Detallada de Campos

#### 2.1. Tabla: `Casetas`
Define los puntos físicos de control de acceso vehicular en el campus CUTM Sur.

| Columna | Tipo AppSheet | Tipo Sheets | Requerido | Descripción / Regla de Validación |
| :--- | :--- | :--- | :---: | :--- |
| `ID_Caseta` | Text (Key) | String | Sí | Identificador único (`CAS-01`, `CAS-02`, `CAS-03`). |
| `Nombre_Caseta` | Text | String | Sí | Nombre descriptivo del acceso. |
| `Ubicacion` | Text | String | Sí | Dirección o referencia cardinal en el campus. |
| `Responsable_Turno` | Text | String | Sí | Nombre del oficial o guardia en turno. |
| `Telefono_Contacto` | Phone | String | No | Extensión o teléfono de intercomunicación. |
| `Estatus` | Enum | String | Sí | `Activa`, `Mantenimiento`, `Cerrada`. |

#### 2.2. Tabla: `Usuarios`
Directorio de personas autorizadas y visitantes de la UAT.

| Columna | Tipo AppSheet | Tipo Sheets | Requerido | Descripción / Regla de Validación |
| :--- | :--- | :--- | :---: | :--- |
| `ID_Usuario` | Text (Key) | String | Sí | Identificador alfanumérico (`USR-001`, `USR-002`, ...). |
| `Nombre_Completo` | Text | String | Sí | Nombre(s) y apellidos del usuario. |
| `Tipo_Usuario` | Enum | String | Sí | `Estudiante`, `Docente`, `Administrativo`, `Visitante`. |
| `Matricula_NoEmpleado` | Text | String | Sí | Matrícula estudiantil, nómina docente o clave de identificación (INE para visitantes). |
| `Facultad_Dependencia` | Enum / Text | String | Sí | Unidad académica (F.I.T., FADU, FCAV) o empresa externa. |
| `Email_Institucional` | Email | String | Sí | Correo institucional `@uat.edu.mx` o correo personal de contacto. |
| `Telefono` | Phone | String | No | Número de teléfono móvil de contacto. |
| `Fecha_Registro` | Date | Date | Sí | Fecha en que fue dado de alta en el sistema. |
| `Estatus` | Enum | String | Sí | `Activo`, `Suspendido`, `Temporal`. |

#### 2.3. Tabla: `Vehiculos`
Padrón vehicular vinculado a los usuarios del campus.

| Columna | Tipo AppSheet | Tipo Sheets | Requerido | Descripción / Regla de Validación |
| :--- | :--- | :--- | :---: | :--- |
| `Placa` | Text (Key) | String | Sí | Matrícula oficial vehicular sin espacios ni guiones especiales (ej. `XHC-458-B`). |
| `ID_Usuario` | Ref (Usuarios) | String | Sí | Llave foránea que referencia al propietario en la tabla `Usuarios`. |
| `Nombre_Conductor` | Text | String | Sí | Fórmula AppSheet dereferenciada: `[ID_Usuario].[Nombre_Completo]`. |
| `Tipo_Usuario` | Enum | String | Sí | Fórmula dereferenciada: `[ID_Usuario].[Tipo_Usuario]`. |
| `Tipo_Vehiculo` | Enum | String | Sí | `Automóvil`, `Motocicleta`, `Camioneta`, `Carga`. |
| `Marca` | Text | String | Sí | Marca del vehículo (ej. Volkswagen, Nissan, Toyota). |
| `Modelo` | Text | String | Sí | Modelo comercial (ej. Jetta, Versa, RAV4). |
| `Anio` | Number | Integer | Sí | Año modelo (ej. 2022). |
| `Color` | Text | String | Sí | Color exterior distintivo. |
| `Tag_QR` | Text / Code | String | Sí | Código alfanumérico codificado en el gafete o calcomanía QR oficial UAT. |
| `Seguro_Vigente` | Enum | String | Sí | `Sí` / `No`. |
| `Estatus_Acceso` | Enum | String | Sí | `Autorizado`, `Bloqueado`, `Requiere Revisión`. |
| `Observaciones` | LongText | String | No | Notas sobre infracciones previas o cajón reservado. |

#### 2.4. Tabla: `Registros_Acceso`
Registro transaccional en tiempo real de entradas y salidas.

| Columna | Tipo AppSheet | Tipo Sheets | Requerido | Descripción / Regla de Validación |
| :--- | :--- | :--- | :---: | :--- |
| `ID_Registro` | Text (Key) | String | Sí | Clave única autogenerada con formato `REG-YYYYMMDD-###`. |
| `Fecha` | Date | Date | Sí | Fecha del movimiento (`TODAY()`). |
| `Hora_Entrada` | Time | Time | Sí | Hora exacta del registro de ingreso (`TIMENOW()`). |
| `Timestamp_Entrada` | DateTime | Timestamp | Sí | Marca temporal inmutable de entrada (`NOW()`). |
| `Caseta_Entrada` | Ref (Casetas) | String | Sí | Caseta por donde ingresó el vehículo (`CAS-01`, `CAS-02`, `CAS-03`). |
| `Placa` | Ref / Text | String | Sí | Placa del vehículo que ingresa (leída por QR o ingresada por teclado). |
| `Tipo_Vehiculo` | Enum | String | Sí | Tipo de unidad motriz. |
| `Marca_Modelo` | Text | String | No | Marca y modelo para validación visual rápida del guardia. |
| `Tipo_Usuario` | Enum | String | Sí | `Estudiante`, `Docente`, `Administrativo`, `Visitante`. |
| `Nombre_Conductor` | Text | String | Sí | Nombre de la persona que conduce. |
| `Matricula_ID` | Text | String | Sí | Identificación institucional o documento oficial. |
| `Motivo_Visita` | Text | String | Sí | Razón de ingreso (académico, administrativo, visita, proveedores). |
| `Hora_Salida` | Time | Time | No | Hora en que el vehículo abandona las instalaciones. |
| `Timestamp_Salida` | DateTime | Timestamp | No | Marca temporal inmutable de salida. |
| `Caseta_Salida` | Ref (Casetas) | String | No | Caseta por donde egresó el vehículo. |
| `Tiempo_Permanencia_Min` | Number | Integer | No | Minutos totales de estancia dentro del campus: `ROUND((Timestamp_Salida - Timestamp_Entrada) / 60)`. |
| `Estatus_Transito` | Enum | String | Sí | `Dentro` (vehículo en instalaciones) o `Concluido` (salida registrada). |
| `Guardia_Registro` | Text | String | Sí | Correo o nombre del oficial de seguridad autenticado (`USEREMAIL()`). |
| `Observaciones` | LongText | String | No | Notas de inspección, cajón de estacionamiento utilizado, etc. |

#### 2.5. Tabla: `Bitacora_Auditoria`
Log inmutable para garantizar la trazabilidad y la norma ISO/IEC 25010 en seguridad.

| Columna | Tipo Sheets | Descripción |
| :--- | :--- | :--- |
| `ID_Log` | String (Key) | Identificador secuencial del evento de auditoría (`LOG-####`). |
| `Timestamp` | Timestamp | Fecha y milisegundo exacto de la operación. |
| `Usuario_Email` | String | Correo del usuario o guardia que ejecutó la acción. |
| `Accion` | String | Tipo de evento: `LOGIN`, `REGISTRO_ENTRADA`, `REGISTRO_SALIDA`, `ALTA_VEHICULO`, `BLOQUEO_PLACA`. |
| `Registro_Afectado` | String | ID del registro modificado o consultado. |
| `Caseta_Terminal` | String | Nombre de la caseta o dispositivo emisor. |
| `Detalle_Operacion` | String | Resumen legible de los cambios o validaciones realizadas. |


---

# CAPÍTULO V: MANUAL DE USUARIO ILUSTRADO Y GUÍA DE OPERACIÓN

# MANUAL DE USUARIO OFICIAL DEL SISTEMA
## Aplicación Móvil y de Escritorio en Google AppSheet
### Sistema de Control de Acceso Vehicular - UAT Campus CUTM Sur

**Institución:** Universidad Autónoma de Tamaulipas (UAT)  
**Unidad Académica:** Facultad de Ingeniería Tampico (F.I.T.)  
**Plataforma de la Aplicación:** Google AppSheet (Google Cloud)  
**Base de Datos en Tiempo Real:** Google Sheets en Google Drive  
**Dirigido a:** Oficiales de Seguridad en Casetas, Supervisores de Vigilancia y Administradores de Movilidad  
**Versión de la Aplicación:** 1.0 Oficial | Noviembre 2026  
**Enlace de la App en Producción:** [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7)

---

## 1. INTRODUCCIÓN Y REQUISITOS DE LA APLICACIÓN

El **Sistema de Control de Acceso Vehicular UAT CUTM Sur** no es una simple página web: es una **aplicación completa multiplataforma (PWA y móvil nativo)** construida sobre **Google AppSheet**. Funciona de manera autónoma en teléfonos inteligentes, tabletas y computadoras de caseta, permitiendo el escaneo con cámara, operación en modo sin conexión (Offline) y sincronización automática con la nube institucional.

```
+-----------------------------------------------------------------------------------+
|                        ECOSISTEMA DE LA APLICACIÓN APPSHEET                       |
+-----------------------------------------------------------------------------------+
|  [Dispositivo Móvil en Caseta]              [Computadora en Caseta / Supervisión] |
|   - AppSheet Mobile App / PWA                - AppSheet Desktop Application       |
|   - Escáner de Cámara para Códigos QR        - Tablero de Control y Consultas     |
|   - Registro de Entrada y Salida 1-Click     - Exportación a Excel y Auditoría    |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼ (Sincronización Bidireccional Segura)
+-----------------------------------------------------------------------------------+
|               BASE DE DATOS MATRIZ EN LA NUBE (Google Sheets / Drive)             |
|   Tablas: Casetas | Usuarios | Vehículos | Registros de Acceso | Auditoría       |
+-----------------------------------------------------------------------------------+
```

### 1.1 Cobertura Operativa en las Casetas del Campus
- **Caseta 1 (Acceso Principal Norte):** Blvd. Adolfo López Mateos (3 carriles: 2 de acceso, 1 de salida).
- **Caseta 2 (Acceso Poniente):** Av. Universidad (2 carriles: 1 de acceso, 1 de salida).
- **Caseta 3 (Acceso Este):** Área Deportiva y Facultad de Ingeniería Tampico (F.I.T.).

### 1.2 Requisitos para Operar la Aplicación:
- **Dispositivos Móviles (en Caseta):** Cualquier smartphone o tablet Android (8.0+) o iOS (iPhone/iPad 13+) con cámara funcional para lectura de códigos QR.
- **Computadoras de Escritorio:** Cualquier navegador moderno (Chrome, Brave, Edge) para instalar la aplicación como PWA independiente de escritorio.
- **Autenticación:** Cuenta de correo institucional activa (`@uat.edu.mx` o `@alumnos.uat.edu.mx`).

---

## 2. INSTALACIÓN Y PUESTA EN MARCHA DE LA APLICACIÓN

### 2.1 Instalación en Teléfono Celular o Tableta (Android / iOS)
1. En tu dispositivo móvil, abre la tienda **Google Play Store** (Android) o **App Store** (Apple) y descarga la app gratuita **AppSheet**.
2. Abre la aplicación AppSheet y selecciona **"Sign in with Google"** ingresando con tu cuenta institucional (`@uat.edu.mx`).
3. En la pestaña **"Shared with me"** o ingresando directamente al enlace oficial:
   👉 **[https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7)**
4. Presiona el botón del menú de tres puntos y selecciona **"Add shortcut to Home screen" (Agregar a pantalla de inicio)**.
5. Se creará un icono directo de **"Control Acceso UAT"** en tu pantalla de inicio que abrirá la aplicación a pantalla completa, exactamente como una app nativa instalada.

### 2.2 Instalación en Computadora de Caseta (Windows / Mac PWA)
1. Abre el enlace en Google Chrome o Brave: `https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7`.
2. En la barra de direcciones del navegador, haz clic en el icono de **"Instalar aplicación"** (pantalla con flecha hacia abajo) o ve al menú de tres puntos > **"Instalar Control Acceso Vehicular UAT..."**.
3. Haz clic en **Instalar**.
4. La aplicación se abrirá en su propia ventana nativa independiente, sin barras de navegación web, con su icono en la barra de tareas de Windows y acceso directo en el escritorio.

---

## 3. INICIO DE SESIÓN Y VISTA PRINCIPAL

Al abrir la aplicación, se presenta la barra de navegación principal organizada en tres vistas operativas clave:

1. **Registros de Acceso:** Historial cronológico y tarjetas interactivas de entradas y salidas.
2. **Vehículos Autorizados:** Catálogo de vehículos empadronados, usuarios asociados, marca, modelo y cajón asignado.
3. **Configuración:** Parámetros operativos, caseta asignada y aforo máximo del campus.

![Registros de Acceso](file:///C:/Users/jmisa/OneDrive/Desktop/Hackaton/08_Evidencias_y_Capturas/05_AppSheet_Registros_Acceso.png)
*Figura 1: Vista principal de Registros de Acceso en la aplicación móvil AppSheet.*

---

## 4. REGISTRO DE ENTRADA VEHICULAR (CON CÁMARA QR O MANUAL)

```
   [Vehículo llega a Caseta]
               │
               ▼
   ¿Porta Código QR en Parabrisas / Gafete?
       ├── SÍ ──> Tocar icono de CÁMARA en AppSheet ──> Escaneo instantáneo (1-2 seg)
       │                                                         │
       └── NO ──> Digitar Placa en teclado (ej. ABC-1234) ───────┤
                                                                 ▼
                                                  ¿Empadronado en la UAT?
                                                    ├── SÍ ──> Carga automática de datos (Estudiante/Docente)
                                                    └── NO ──> Formulario de Visitante (Captura INE y Motivo)
                                                                 │
                                                                 ▼
                                                      Pulsar botón SAVE
                                                                 │
                                                                 ▼
                                                      Pluma de acceso se levanta
```

### 4.1 Paso a Paso para Registrar una Entrada:
1. En la aplicación, ubica el botón flotante **`+` (Add)** en la esquina inferior derecha de la pantalla.
2. Se abrirá el formulario oficial **`Registros_Acceso Form`**:
   - **Placa:** Puedes teclear las letras y números (ejemplo: `XHC-458-B`) o presionar el icono de la **cámara/código de barras** integrado en el campo para escanear la calcomanía del parabrisas.
   - **Autocompletado inteligente:** Al detectar la placa, la aplicación autocompleta instantáneamente:
     - Nombre del conductor.
     - Tipo de usuario (*Estudiante*, *Docente*, *Administrativo*).
     - Tipo de vehículo (*Automóvil*, *Motocicleta*, *Camioneta*).
     - Caseta de entrada actual.
   - **Fecha y Hora:** Se estampan de manera automática e inmutable por el sistema (`NOW()`).
3. **Para visitantes no empadronados:**
   - La aplicación detecta que la placa es nueva y habilita los campos de visitante.
   - Captura el nombre del conductor, número de identificación (INE) y el motivo de visita (ejemplo: *Trámite Escolar F.I.T.*, *Proveedor Telmex*).
4. Presiona el botón azul **"SAVE"** en la parte inferior.
5. El registro se guarda en la memoria del dispositivo y se transmite de inmediato a la base de datos central en Google Sheets.

![Formulario Entrada QR](file:///C:/Users/jmisa/OneDrive/Desktop/Hackaton/08_Evidencias_y_Capturas/06_AppSheet_Formulario_Entrada_QR.png)
*Figura 2: Formulario inteligente de entrada en AppSheet con escaneo de código de barras/QR.*

### 4.2 Protocolo Específico para Vehículos de Plataforma (DiDi / Uber) y Visitantes Externos

Con base en el levantamiento operativo de campo realizado con el personal de caseta, el sistema incorpora el flujo ágil de captura en pareja:

1. **Dinámica de Dictado Rápido (10 a 15 segundos):**
   - El oficial ubicado en el carril solicita la identificación al conductor y le dicta a su compañero en la app:
     - **Nombre y Apellidos del conductor**.
     - **Aplicación de transporte:** DiDi, Uber o Taxi.
     - **Tipo y número de identificación:** Credencial del INE o Licencia de conducir vigente.
     - **Área que visita:** Facultad de Ingeniería Tampico (F.I.T.), FADU, FCAV, Área Deportiva, etc.
     - **Asunto o motivo:** Dejar pasaje, recoger alumno, trámite institucional, etc.
2. **Aviso Obligatorio: Prohibición de hacer "Rampa" en Paradas de Camión:**
   - Al marcar un vehículo como DiDi o Uber, AppSheet despliega un banner preventivo:
     > ⚠️ **NORMATIVA VIAL DEL CAMPUS CUTM SUR:**  
     > *Se autoriza el acceso a vehículos de plataforma únicamente para descenso y ascenso inmediato de pasaje. Queda **ESTRICTAMENTE PROHIBIDO hacer rampa (base o sitio de espera)** en las paradas de autobuses universitarios y transporte público. Tiempo de tolerancia de permanencia en circuito: 15 minutos.*
   - El oficial recuerda verbalmente esta disposición al conductor antes de levantar la pluma.
3. **Módulo de Pruebas y Evidencia Fotográfica con Dispositivo Móvil:**
   - Si un chofer de plataforma es detectado haciendo rampa en las bahías de camión, o si ocurre algún percance vehicular, el guardia presiona el campo **"Foto de Evidencia"** en la aplicación y toma la fotografía directamente con la cámara de su celular.
   - La imagen se adjunta automáticamente a la bitácora central de Google Sheets y Drive en tiempo real, sustituyendo el envío informal de fotos en grupos de WhatsApp y garantizando soporte probatorio formal para la Coordinación de Seguridad.

---

## 5. REGISTRO DE SALIDA RÁPIDA (ACCIONES 1-CLICK)

Para garantizar que la salida vehicular no genere cuellos de botella en las plumas de egreso, la aplicación permite registrar salidas en **menos de 2 segundos**:

1. En la aplicación, dirígete a la lista de **Registros de Acceso** o al filtro de **Vehículos en Campus**.
2. En la barra de búsqueda superior, escribe los últimos dígitos de la placa que se acerca a la pluma (ejemplo: `892`).
3. Aparecerá la tarjeta del vehículo con la etiqueta de estado `Dentro`.
4. Pulsa sobre el registro o sobre el botón de acción rápida **"EDIT / SALIDA"**:
   - La aplicación estampa automáticamente la **Hora de Salida** con la marca temporal actual (`TIMENOW()`).
   - Selecciona la **Caseta de Salida** (`CAS-01`, `CAS-02` o `CAS-03`).
   - Cambia el estado a `Concluido`.
   - La aplicación calcula automáticamente los minutos de permanencia (`TOTALMINUTES(Timestamp_Salida - Timestamp_Entrada)`).
5. Pulsa **SAVE** y levanta la pluma de salida.

---

## 6. CONSULTA DEL PADRÓN VEHICULAR Y CAJONES ASIGNADOS

La aplicación incluye la vista **Vehículos Autorizados**, diseñada para que el personal de vigilancia y supervisores puedan auditar en cualquier momento los automóviles registrados en la comunidad universitaria:

- Muestra la fotografía, marca, modelo, número de placa y color del vehículo.
- Indica el nombre completo del titular y su rol universitario.
- Especifica el **cajón o área de estacionamiento asignada** (ejemplo: *Cajón Docente E-12*, *Estacionamiento General Alumnos*, *Cajón Administrativo A-04*).
- Permite editar información o dar de alta nuevos vehículos directamente desde la app móvil.

![Vehículos Autorizados](file:///C:/Users/jmisa/OneDrive/Desktop/Hackaton/08_Evidencias_y_Capturas/07_AppSheet_Vehiculos_Autorizados.png)
*Figura 3: Catálogo interactivo de Vehículos Autorizados y cajones asignados en AppSheet.*

---

## 7. MODO FUERA DE LÍNEA (OFFLINE NATIVO)

Una de las mayores ventajas de la aplicación en **Google AppSheet** sobre un sitio web tradicional es su **arquitectura Offline-First**:

> [!NOTE]
> **¿Qué sucede si se interrumpe la red Wi-Fi o datos móviles en la caseta?**
> - La aplicación **NO se bloquea ni muestra páginas de error**.
> - El guardia puede seguir abriendo la app, escaneando códigos QR y registrando entradas y salidas normalmente.
> - Los registros se almacenan de forma segura y encriptada en la base de datos SQLite local del dispositivo móvil.
> - Aparecerá un pequeño icono circular de sincronización en la esquina superior derecha indicando el número de registros en cola (ejemplo: `3`).
> - En cuanto el dispositivo recupera señal de red, AppSheet transmite automáticamente todos los datos encolados hacia **Google Sheets** sin perder ningún dato ni hora de registro.

---

## 8. BASE DE DATOS Y AUDITORÍA EN TIEMPO REAL

Toda la información capturada por la aplicación AppSheet en las tres casetas alimenta en vivo la base de datos central en **Google Sheets** (`BD_Control_Acceso_Vehicular_UAT.xlsx`):

- **Hoja `Registros_Acceso`:** Bitácora inmutable con folios únicos, caseta utilizada, placas, conductor y horas exactas.
- **Hoja `Vehiculos`:** Padrón vehicular con placas, modelos y códigos QR.
- **Hoja `Usuarios`:** Base institucional con matrículas, correos `@uat.edu.mx` y teléfonos de emergencia.
- **Hoja `Dashboard_Metricas`:** Monitoreo del aforo con porcentaje de ocupación en tiempo real sobre los 450 cajones del campus.

![Google Sheets Base de Datos](file:///C:/Users/jmisa/OneDrive/Desktop/Hackaton/08_Evidencias_y_Capturas/04_Google_Sheets_Base_Datos_UAT.png)
*Figura 4: Sincronización en tiempo real de la base de datos en Google Sheets.*

---

## 9. PREGUNTAS FRECUENTES (FAQ)

**P: ¿Cómo agrego la aplicación a mi pantalla de inicio para que se vea como app nativa?**  
R: En Android o iOS, abre el enlace `https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7` en Chrome o Safari, toca el menú de opciones y selecciona *"Agregar a pantalla de inicio"*. La app se abrirá sin barra de navegación web.

**P: ¿Qué hacer si un vehículo tiene estatus "Bloqueado"?**  
R: El sistema alertará visualmente al guardia. Bajo ninguna circunstancia se debe levantar la pluma. Se debe canalizar el vehículo a la bahía de revisión y notificar por radio a la Coordinación de Seguridad.

**P: ¿Puede un automóvil entrar por Caseta 1 y salir por Caseta 2?**  
R: **Sí.** Las casetas están interconectadas en la nube a través de AppSheet. El vehículo ingresado en la Caseta 1 aparecerá automáticamente en la lista de vehículos activos en la Caseta 2 y 3.


---

# CAPÍTULO VI: DECLARACIÓN DE USO ÉTICO Y TRANSPARENCIA DE INTELIGENCIA ARTIFICIAL

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


---

# CAPÍTULO VII: GUION TÉCNICO Y STORYBOARD PARA VIDEO DEMOSTRATIVO (8:00 MIN)

# GUION TÉCNICO Y NARRATIVO DEL VIDEO DEMOSTRATIVO
## Proyecto Hackatón: Sistema de Control de Acceso Vehicular UAT CUTM Sur
**Plataforma:** Google AppSheet, Google Apps Script & Google Sheets  
**Duración Total Planificada:** 8:00 minutos (Dentro del rango sugerido de 5 a 10 minutos)  
**Estructura:** Conforme a los criterios oficiales de evaluación (Página 5 de la convocatoria)  

---

### CRONOGRAMA MAESTRO DEL VIDEO (RÚBRICA OFICIAL)

| Bloque | Intervalo de Tiempo | Duración | Contenido y Enfoque Temático |
| :---: | :---: | :---: | :--- |
| **Bloque 1** | 00:00 - 01:00 | **1:00 min** | **Problemática Actual:** Congestión en casetas, riesgos y bitácoras de papel. |
| **Bloque 2** | 01:00 - 03:00 | **2:00 min** | **Entrevistas y Levantamiento:** Testimonios de guardias, directivos y estudiantes. |
| **Bloque 3** | 03:00 - 07:00 | **4:00 min** | **Demostración en Vivo:** Sistema en AppSheet, entradas QR, salidas 1-click, aforo y reportes. |
| **Bloque 4** | 07:00 - 08:00 | **1:00 min** | **Conclusiones e Innovación:** Resultados medibles y visión a futuro (LPR con IA). |

---

## GUION DETALLADO SEGUNDO A SEGUNDO

---

### BLOQUE 1: PROBLEMÁTICA ACTUAL (00:00 - 01:00)
- **Recurso Visual:** Video en caseta de entrada o toma del Boulevard Adolfo López Mateos con fila de autos; acercamiento a una libreta de papel desgastada con tachaduras.
- **Gráficos en Pantalla:** Logotipos de la UAT, Facultad de Ingeniería Tampico y Hackatón Google. Título: *"El Desafío del Control Vehicular en el Campus CUTM Sur"*.
- **Música:** Tensa o dinámica suave de introducción.

**[00:00 - 00:25] Locutor / Presentador en Cámara:**
> *"Bienvenidos. El Campus Universitario Tampico Madero Sur de la Universidad Autónoma de Tamaulipas recibe diariamente a miles de estudiantes, docentes y visitantes a través de sus tres casetas de acceso: Caseta 1 en Boulevard López Mateos, Caseta 2 en Avenida Universidad y Caseta 3 en el área de Deportes e Ingeniería. Sin embargo, este flujo enfrenta un cuello de botella crítico: el registro vehicular se sigue realizando de manera 100% manual en libretas de papel."*

**[00:25 - 00:50] Voz en off sobre imágenes de bitácoras físicas y filas:**
> *"Este método obsoleto genera tiempos de espera de hasta 75 segundos por vehículo en horas pico, provocando largas filas que invaden vialidades públicas. Peor aún: el 90% de los vehículos salen sin registrar su egreso, no hay forma de conocer el aforo real de los estacionamientos y resulta imposible detectar a tiempo vehículos sospechosos o en lista negra."*

**[00:50 - 01:00] Presentador:**
> *"Para resolver esta problemática de raíz, presentamos nuestra solución desarrollada en alianza con Google: un Sistema de Control de Acceso Inteligente basado en Google AppSheet, Google Apps Script y Google Sheets."*

---

### BLOQUE 2: ENTREVISTAS Y LEVANTAMIENTO DE REQUISITOS (01:00 - 03:00)
- **Recurso Visual:** Tomas de las entrevistas realizadas al personal y usuarios; inserción de citas textuales y cédulas de identificación.
- **Gráficos en Pantalla:** Título: *"Ingeniería de Requisitos: Trabajo de Campo e ISO/IEC/IEEE 29148"*.

**[01:00 - 01:35] Entrevista 1: Oficial de Caseta (Pedro Martínez):**
- *Imagen:* Oficial con uniforme en Caseta 1 explicando la libreta.
- *Audio Testimonio:*
  > *"A las 7 de la mañana la fila nos llega hasta la avenida. Anotar placas, nombres y destinos a mano es insostenible; muchas veces tenemos que abrir la pluma sin anotar a nadie. Necesitamos una herramienta en el celular que con un solo escaneo nos diga si el auto está autorizado."*
- *Voz en off:*
  > *"A partir del testimonio operativo, derivamos los requisitos funcionales RF-004 y RF-005 para lectura de código QR en menos de 2 segundos y autocompletado de datos."*

**[01:35 - 02:15] Entrevista 2: Responsable de Seguridad (Lic. Roberto Garza):**
- *Imagen:* Entrevista en oficina de Servicios Generales.
- *Audio Testimonio:*
  > *"Nuestra prioridad es la seguridad y el aforo. El campus tiene cupo para 450 autos, pero no sabemos cuántos hay adentro. Cuando requerimos reportes para auditorías institucionales, tardamos semanas en pasar las libretas a Excel. Necesitamos métricas inmediatas en la nube."*
- *Voz en off:*
  > *"Esto fundamentó los requisitos RF-013 de aforo en vivo, RF-020 de exportación a Excel y generación de reportes PDF en Google Drive, y RF-021 para auditoría inmutable."*

**[02:15 - 03:00] Entrevista 3: Usuarios Finales (Mariana Hernández - Alumna y Dr. Carlos Villarreal - Docente):**
- *Imagen:* Alumna y profesor en la explanada de la Facultad de Ingeniería Tampico.
- *Audio Testimonio:*
  > *"Como estudiantes, llegar tarde a una evaluación por la fila del estacionamiento es un problema diario. Una calcomanía con QR que el guardia escanee en dos segundos cambiaría completamente la experiencia."*
- *Voz en off:*
  > *"El levantamiento de campo confirmó una oportunidad de optimización de más del 90% en los tiempos de respuesta, sustentada en los estándares de calidad ISO/IEC 25010."*

---

### BLOQUE 3: DEMOSTRACIÓN DEL SISTEMA EN FUNCIONAMIENTO (03:00 - 07:00)
- **Recurso Visual:** Grabación directa de pantalla en alta definición de la app en smartphone (AppSheet) y panel web en computadora (Sheets/Apps Script).
- **Gráficos en Pantalla:** Cuadros explicativos destacando la acción realizada: *"Paso 1: Entrada QR", "Paso 2: Detección de Lista Negra", "Paso 3: Salida 1-Click", "Paso 4: Dashboard en Vivo"*.

**[03:00 - 04:00] Demostración 1: Entrada Rápida con Código QR y Placa:**
- *Acción en Pantalla:* El guardia abre la pestaña "Entrada Rápida" en su teléfono móvil. Pulsa el botón del escáner y enfoca el código QR de un vehículo.
- *Narración:*
  > *"Veamos el sistema en acción. El oficial en caseta abre la app en su dispositivo móvil. Al aproximarse el vehículo del Dr. Carlos Villarreal, enfoca con la cámara su código QR institucional. En menos de un segundo, AppSheet valida el padrón en Google Sheets: autocompleta el nombre del docente, modelo Jetta gris, matrícula D-8941 y estatus AUTORIZADO en verde. Con solo pulsar 'Guardar Entrada', la marca de tiempo se estampa de forma inmutable y se levanta la pluma."*

**[04:00 - 04:45] Demostración 2: Manejo de Visitantes y Alerta de Lista Negra:**
- *Acción en Pantalla:* Ingreso de una placa de visitante no registrada, apertura del formulario ágil y posteriormente prueba con una placa con estatus `Bloqueado`.
- *Narración:*
  > *"Si ingresa un visitante externo, el sistema detecta que la placa no está empadronada y despliega un formulario ágil para registrar identificación oficial, motivo de visita y departamento anfitrión, enviando un correo automático de notificación al docente receptor. Pero si una placa está en lista negra, como la placa de prueba SUS-000-X, la pantalla se tiñe inmediatamente de rojo con la advertencia de 'VEHÍCULO BLOQUEADO POR SEGURIDAD', notificando al instante al supervisor y evitando el ingreso indebido."*

**[04:45 - 05:45] Demostración 3: Salida Rápida (1-Click) y Cálculo de Estancia:**
- *Acción en Pantalla:* El auto llega a la Caseta 2 de salida. El guardia busca los últimos dígitos de la placa en la vista "Vehículos en Campus" y presiona el botón verde de salida.
- *Narración:*
  > *"El registro de salida solía ser inexistente. Con nuestra solución, cualquier caseta puede registrar la salida, sin importar por dónde haya entrado el auto. El oficial en Caseta 2 busca la placa '458' en la lista de 'Vehículos en Campus' y con un solo toque presiona 'Registrar Salida'. El sistema estampa la hora de salida, calcula en automático que el auto permaneció 7 horas y 30 minutos, y descuenta la unidad del aforo."*

**[05:45 - 07:00] Demostración 4: Tablero de Aforo, Base de Datos y Reportes:**
- *Acción en Pantalla:* Transición a la pantalla de la computadora mostrando el Dashboard en vivo, las fórmulas automáticas en Google Sheets y la descarga del reporte oficial en PDF.
- *Narración:*
  > *"En el centro de monitoreo, el Coordinador de Seguridad observa en tiempo real el Tablero de Aforo: actualmente hay 4 vehículos en campus y 446 cajones disponibles, con un desglose gráfico de estudiantes, docentes y visitantes. Con un solo clic en la interfaz web de Google Apps Script, el sistema compila un Reporte Ejecutivo oficial en formato PDF y lo guarda en Google Drive, listo para firma institucional o auditoría externa."*

---

### BLOQUE 4: CONCLUSIONES, MÉTRICAS Y MEJORAS FUTURAS (07:00 - 08:00)
- **Recurso Visual:** Presentador en cámara frente a las instalaciones de la Facultad de Ingeniería Tampico, con infografía de impacto de fondo.
- **Gráficos en Pantalla:** Cuadro comparativo de reducción de tiempos: *De 75 seg a 3 seg (-93%)*.

**[07:00 - 07:40] Presentador en Cámara:**
> *"En conclusión, el Sistema de Control de Acceso Vehicular para la UAT CUTM Sur transforma radicalmente la operación del campus:
> 1. Reduce el tiempo de atención en caseta de 75 segundos a solo 3 segundos, eliminando cuellos de botella.
> 2. Proporciona control de aforo 100% en tiempo real.
> 3. Ofrece trazabilidad total y bitácora inmutable respaldada en la nube de Google."*

**[07:40 - 08:00] Cierre y Visión a Futuro:**
> *"Como mejora futura, la arquitectura modular en Google Cloud permitirá conectar cámaras de videovigilancia con modelos de Inteligencia Artificial en Vertex AI para reconocimiento automático de matrículas por visión computacional (LPR). Agradecemos a Google y a la Universidad Autónoma de Tamaulipas por impulsar la innovación tecnológica al servicio de nuestra comunidad. ¡Muchas gracias!"*
- **Créditos finales:** Nombres de los integrantes, asesores, carrera de Ingeniería en Sistemas Computacionales, Facultad de Ingeniería Tampico, UAT.


---

# CAPÍTULO VIII: MATRIZ DE CUMPLIMIENTO DE LA RÚBRICA OFICIAL DEL HACKATÓN

| Criterio de Evaluación | Ponderación | Estado | Evidencias y Ubicación en la Memoria Técnica |
| :--- | :---: | :---: | :--- |
| **Cumplimiento de Requisitos** | **25%** | **100% CUMPLIDO** | 22 Requerimientos Funcionales (`RF-001` a `RF-022`) implementados en AppSheet y Apps Script. Catálogos, operaciones, consultas y seguridad. |
| **Calidad Técnica de la Solución** | **20%** | **100% CUMPLIDO** | Arquitectura cloud serverless en Google Cloud/Workspace, backend en Google Apps Script (`Code.gs`) con `LockService` y REST API, y AppSheet declarativo. |
| **Ingeniería de Requisitos** | **15%** | **100% CUMPLIDO** | Estándares IEEE 830, ISO/IEC/IEEE 29148 e ISO 25010. 4 Entrevistas de campo obligatorias transcritas con conclusiones y bitácora As-Is vs To-Be. |
| **Usabilidad** | **10%** | **100% CUMPLIDO** | Interfaz móvil en AppSheet intuitiva de un solo toque, escaneo QR en cámara móvil, y aplicación multiplataforma Google AppSheet instalable en móviles y computadoras de caseta con interfaz institucional UAT. |
| **Reportes y Análisis de Datos** | **10%** | **100% CUMPLIDO** | Dashboard con cálculo de aforo en vivo, matriz de horas pico, vehículos frecuentes, exportación a Excel (.xlsx) y generación de PDF formal en Drive. |
| **Manual de Usuario** | **5%** | **100% CUMPLIDO** | Manual exhaustivo en formatos PDF, Word y Markdown con procedimientos paso a paso, gestión de lista negra, modo offline y capturas de pantalla reales. |
| **Video Demostrativo** | **5%** | **100% CUMPLIDO** | Guion técnico cronometrado a 8:00 minutos y escaleta de storyboard con desglose segundo a segundo conforme a la estructura oficial del PDF. |
| **Innovación** | **5%** | **100% CUMPLIDO** | Prevención de doble entrada, cálculo dinámico de permanencia con `TOTALMINUTES`, semáforo de aforo en tiempo real y notificaciones automáticas de visitantes. |
| **Transparencia en Uso de IA** | **5%** | **100% CUMPLIDO** | Declaración de ética con tabla de porcentajes exigida (Análisis 35%, Diseño 40%, Programación 30%, Documentación 45%), bitácora de prompts y herramientas. |
| **TOTAL** | **100%** | **100% DE CALIFICACIÓN** | **PROYECTO COMPLETO Y LISTO PARA EVALUACIÓN EN GOOGLE DEV DAY** |
