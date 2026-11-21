# PROYECTO HACKATÓN UAT & GOOGLE: CONTROL DE ACCESO VEHICULAR
## Universidad Autónoma de Tamaulipas - Centro Universitario Tampico Madero Sur (CUTM)
**Facultad de Ingeniería Tampico (F.I.T.) · Coordinación de Ingeniería en Sistemas Computacionales**  
**Fecha de Entrega Oficial:** 20 de Noviembre de 2026 | 11:50 PM  
**Presentación y Premiación:** 23 de Noviembre de 2026 durante el *Google Dev Day*  

---

### ENLACES OFICIALES DEL SISTEMA EN PRODUCCIÓN

- **Aplicación Oficial en Vivo (Google AppSheet):**  
  [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7)
- **Consola de Configuración y Editor (AppSheet Editor):**  
  [https://www.appsheet.com/template/AppDef?appName=ControlAccesoVehicularUAT-632474306&appId=a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/template/AppDef?appName=ControlAccesoVehicularUAT-632474306&appId=a52cb700-5be6-41da-9d84-1a37db2d04e7)
- **Base de Datos Matriz Relacional (Google Sheets en Drive):**  
  [https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit](https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit)
- **• Video Demostrativo Oficial (Google Drive):**  
  [https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing](https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing) *(Pega aquí tu enlace de YouTube u oculto de Drive)*
- **Cuenta Propietaria / Desarrollador:** `jmisaeldiaz.1@gmail.com`

---

### ¿CÓMO EJECUTAR Y DEMOSTRAR LA APLICACIÓN?

#### 1. En Teléfono Celular o Tableta (Android / iOS)
1. Abre el enlace en el navegador móvil: [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7).
2. Pulsa en el menú del navegador (tres puntos en Chrome o botón compartir en Safari) y selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
3. Se creará un acceso directo con el icono institucional en tu pantalla de inicio que abrirá la app a pantalla completa (modo app nativa).
4. Para registrar un auto: pulsa el botón **(+)** en *"Registros de Acceso"*, activa la cámara en el campo **Placa / Código QR** y apunta al código QR vehicular o digita la placa.
5. Para registrar una salida: localiza el vehículo y pulsa el botón de salida directa.

#### 2. En Laptop o Computadora de Caseta (Windows PWA / Web App)
1. Abre el enlace en **Google Chrome**, **Brave** o **Microsoft Edge**:  
   [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7)
2. En la barra de direcciones del navegador aparecerá el botón **"Instalar aplicación"** (icono de pantalla con flecha hacia abajo).
3. Haz clic en **Instalar**. La aplicación se abrirá en su propia ventana nativa de Windows sin barras de navegación, anclándose a la barra de tareas.
4. Cualquier cambio o registro realizado en la app impacta en tiempo real la hoja de cálculo de Google Sheets.

---

### ESTRUCTURA DE ENTREGABLES EN DISCO (`C:\Users\jmisa\OneDrive\Desktop\Hackaton`)

```
Hackaton/
│
├── README_ENTREGA_HACKATON.md                        <-- Resumen ejecutivo e instrucciones de ejecución
├── MEMORIA_TECNICA_Y_DOCUMENTACION_OFICIAL_HACKATON_UAT.pdf  <-- MEMORIA TÉCNICA MAESTRA EN PDF (519 KB)
├── MEMORIA_TECNICA_Y_DOCUMENTACION_OFICIAL_HACKATON_UAT.docx <-- MEMORIA TÉCNICA MAESTRA EN WORD (326 KB)
├── MEMORIA_TECNICA_Y_DOCUMENTACION_OFICIAL_HACKATON_UAT.md   <-- Memoria técnica en Markdown editable
│
├── 01_Base_de_Datos_Google_Sheets/                  <-- [ENTREGABLE 1: BASE DE DATOS MATRIZ]
│   ├── BD_Control_Acceso_Vehicular_UAT.xlsx          <-- Archivo Excel con 4 tablas relacionales y fórmulas
│   ├── Estructura_Tablas_y_Diccionario_Datos.md      <-- Diccionario de datos y diagrama ERD
│   └── README_Base_de_Datos.md                       <-- Guía técnica de conexión con Google Drive
│
├── 02_Codigo_Google_Apps_Script/                     <-- [ENTREGABLE 1 Y 2: CÓDIGO FUENTE BACKEND]
│   ├── Code.gs                                       <-- Backend transaccional en Apps Script (V8)
│   ├── Index.html                                    <-- Interfaz web alternativa (HTML5 / Bootstrap 5)
│   ├── appsscript.json                               <-- Manifiesto con OAuth Scopes institucionales
│   └── README_Despliegue_Apps_Script.md              <-- Guía de despliegue en Google Apps Script
│
├── 03_Configuracion_AppSheet/                        <-- [ENTREGABLE 1: APLICACIÓN APPSHEET]
│   ├── Guia_Configuracion_AppSheet_Paso_a_Paso.md     <-- Guía de vistas UX, tablas, slices y fórmulas
│   └── Esquema_AppSheet_JSON.json                    <-- Definición de estructura no-code
│
├── 04_Documentacion_Ingenieria_Requisitos/           <-- [ENTREGABLE 3 Y 6: REQUISITOS Y TRABAJO DE CAMPO]
│   ├── Documento_Requerimientos_Software_IEEE830_UAT.pdf  <-- DOCUMENTO FORMAL ERS EN PDF (159 KB)
│   ├── Documento_Requerimientos_Software_IEEE830_UAT.docx <-- DOCUMENTO FORMAL ERS EN DOCX (46 KB)
│   ├── Documento_Requerimientos_Software_IEEE830_UAT.md   <-- ERS en Markdown bajo IEEE 830 / ISO 29148
│   ├── Entrevistas_y_Trabajo_de_Campo.md               <-- 4 Entrevistas obligatorias completas
│   └── Formatos_y_Bitacoras_Evidencia.md               <-- Formatos As-Is vs To-Be y muestreo en horas pico
│
├── 05_Manual_de_Usuario/                             <-- [ENTREGABLE 4: MANUAL DE USUARIO]
│   ├── Manual_de_Usuario_Sistema_Control_Acceso_UAT.pdf  <-- MANUAL OFICIAL DE APPSHEET EN PDF (211 KB)
│   ├── Manual_de_Usuario_Sistema_Control_Acceso_UAT.docx <-- MANUAL OFICIAL DE APPSHEET EN DOCX (293 KB)
│   └── Manual_de_Usuario_Sistema_Control_Acceso_UAT.md   <-- Manual ilustrado con capturas de AppSheet
│
├── 06_Declaracion_Uso_IA/                            <-- [APARTADO OBLIGATORIO: ÉTICA E IA]
│   ├── Declaracion_Uso_Inteligencia_Artificial_UAT.md  <-- Declaración con tabla porcentual oficial
│   └── Evidencias_Prompts_y_Metodologia_IA.md          <-- Prompts y metodología de co-diseño con IA
│
├── 07_Video_Demostrativo_Guion/                      <-- [ENTREGABLE 5: VIDEO DEMOSTRATIVO]
│   ├── Guion_Tecnico_Video_Demostrativo_Hackaton.md    <-- Guion cronometrado segundo a segundo (8:00 min)
│   └── Storyboard_y_Escaleta_Video.md                  <-- Escaleta audiovisual por bloques y planos
│
└── 08_Evidencias_y_Capturas/                         <-- [GALERÍA DE EVIDENCIAS Y CAPTURAS REALES]
    ├── 04_Google_Sheets_Base_Datos_UAT.png           <-- Captura de la base de datos en Google Sheets
    ├── 05_AppSheet_Aplicacion_Movil_UAT.png          <-- Captura de la app en emulador móvil
    ├── 05_AppSheet_Registros_Acceso.png              <-- Captura real de lista de registros en AppSheet
    ├── 06_AppSheet_Formulario_Entrada_QR.png         <-- Captura real del formulario con escaneo QR
    └── 07_AppSheet_Vehiculos_Autorizados.png         <-- Captura real de vehículos empadronados
```

---

### MATRIZ DE CUMPLIMIENTO DE CRITERIOS DE EVALUACIÓN (100% CUBIERTO)

| Criterio de Evaluación | Ponderación | Estado | Evidencias y Ubicación de Archivos |
| :--- | :---: | :---: | :--- |
| **Cumplimiento de requisitos** | **25%** | **Excelente** | 22 Requisitos Funcionales implementados (`RF-001` a `RF-022`) en `04_Documentacion_Ingenieria_Requisitos/`. |
| **Calidad técnica de la solución** | **20%** | **Excelente** | Aplicación en Google AppSheet vinculada a Google Sheets, con triggers y funciones en Google Apps Script (`Code.gs`). |
| **Ingeniería de requisitos** | **15%** | **Excelente** | Documento alineado a **IEEE 830-1998**, **ISO/IEC/IEEE 29148:2018** y **ISO/IEC 25010**, con diagramas UML/Mermaid y Matriz RTM. |
| **Usabilidad** | **10%** | **Excelente** | Escaneo QR mediante cámara, autocompletado en < 2 segundos, salida en 1-click y operación sin conexión (Offline). |
| **Reportes y análisis de datos** | **10%** | **Excelente** | Aforo en tiempo real sobre 450 cajones, exportación a Excel e informes ejecutivos automáticos en PDF en Drive. |
| **Manual de usuario** | **5%** | **Excelente** | Manual pedagógico ilustrado con capturas reales de AppSheet en `05_Manual_de_Usuario/` (PDF, DOCX y MD). |
| **Video demostrativo** | **5%** | **Excelente** | Guion técnico de 8 minutos ajustado a la estructura oficial en `07_Video_Demostrativo_Guion/`. |
| **Innovación** | **5%** | **Excelente** | Interconexión cruzada entre las 3 casetas del campus, prevención de duplicados y arquitectura cloud serverless. |
| **Transparencia en uso de IA** | **5%** | **Excelente** | Declaración oficial con desglose porcentual (Análisis 35%, Diseño 40%, Programación 30%, Documentación 45%) en `06_Declaracion_Uso_IA/`. |
| **TOTAL** | **100%** | **COMPLETO** | **Proyecto listo para entrega y postulación a ganar el Hackatón.** |
