# GUION TÉCNICO Y NARRATIVO DEL VIDEO DEMOSTRATIVO
## Proyecto Hackatón: Sistema de Control de Acceso Vehicular UAT CUTM Sur
**Plataforma:** Google AppSheet, Google Apps Script & Google Sheets  
**Duración Total Planificada:** 8:00 minutos (Dentro del rango sugerido de 5 a 10 minutos)  
**Estructura:** Conforme a los criterios oficiales de evaluación (Página 5 de la convocatoria)  
• **Video Demostrativo Oficial:** [https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing](https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing)  

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
- *Imagen:* Oficial de seguridad en Caseta 1 explicando la dinámica en carril junto a su compañero.
- *Audio Testimonio Real de Campo:*
  > *"Trabajamos en pareja en caseta: mi compañero en el carril me dicta en 10 o 15 segundos el nombre, si es DiDi o Uber, el INE o licencia, a qué área va y el asunto. En total nos toma entre 15 y 30 segundos por auto. En la operación general no afecta que entren a dejar o recoger alumnos, pero siempre tenemos problemas con los DiDis porque se quedan haciendo 'rampa' en las paradas de camión del campus. Solo tenemos la radio para comunicarnos, y usamos el celular personal para avisar a los grupos de WhatsApp y tomar fotos de pruebas si hay un percance."*
- *Voz en off:*
  > *"A partir de este levantamiento real, implementamos en Google AppSheet el módulo de plataformas digitales (DiDi / Uber), captura estructurada de INE/Licencia, advertencia automática de 'Prohibido hacer rampa en paradas de camión', toma de fotos de evidencia directamente en la app y escaneo QR en 2 segundos."*

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
  > *"En el centro de monitoreo, el Coordinador de Seguridad observa en tiempo real el Tablero de Aforo: actualmente hay 4 vehículos en campus y 446 cajones disponibles, con un desglose gráfico de estudiantes, docentes y visitantes. Con un solo clic desde la aplicación de AppSheet o el módulo de reportes, el sistema compila un Reporte Ejecutivo oficial en formato PDF y lo guarda en Google Drive, listo para firma institucional o auditoría externa."*

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
