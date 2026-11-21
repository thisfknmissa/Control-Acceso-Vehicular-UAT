# Repositorio Oficial de Código Fuente
## Proyecto Hackatón: Sistema de Control de Acceso Vehicular UAT CUTM Sur
**Convocatoria:** Alianza Estratégica Google & Universidad Autónoma de Tamaulipas  
**Unidad Académica:** Facultad de Ingeniería Tampico (Coordinación de Sistemas Computacionales)  
**Fecha de Entrega:** Noviembre de 2026  
**Estatus del Repositorio:** Público, Auditado y con Acceso Verificado para el Jurado  

---

### 1. Enlace Oficial del Repositorio en GitHub

El código fuente íntegro, esquemas de bases de datos, scripts de backend, componentes de interfaz y documentación formal de ingeniería de software se encuentran alojados en el siguiente repositorio público:

* **URL Oficial del Repositorio:**  
  [https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT](https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT)

* **Comando de Clonación Git:**  
  `git clone https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT.git`

---

### 2. Verificación de Accesibilidad para el Jurado Evaluador

Conforme a las bases de evaluación del Hackatón, se ha validado de manera exhaustiva que:
1. **Acceso Público Universal:** El repositorio está configurado con visibilidad pública, permitiendo la lectura, descarga de código e inspección de ramas y confirmaciones (commits) por parte de cualquier miembro del jurado sin necesidad de inicio de sesión obligatorio en GitHub ni permisos especiales.
2. **Colaboradores Oficiales Registrados:** Se ha confirmado la incorporación de los colaboradores del equipo de desarrollo institucional:
   - `M4rce11`
   - `capi2008N`
   - `jesu-07`
3. **Historial de Commits Formal y Trazable:** El repositorio contiene el historial cronológico de desarrollo, refactorizaciones y eliminación de caracteres informales, manteniendo un estándar riguroso de ingeniería de software.

---

### 3. Estructura y Organización del Código Fuente

El repositorio se encuentra estructurado en módulos temáticos para facilitar su navegación, auditoría técnica y replicabilidad:

```
Control-Acceso-Vehicular-UAT/
├── .gitignore
├── README.md                                             # Guía técnica principal y resumen ejecutivo
├── README_ENTREGA_HACKATON.md                            # Resumen formal de entregables y enlaces en la nube
├── MEMORIA_TECNICA_Y_DOCUMENTACION_OFICIAL_HACKATON_UAT.md # Memoria técnica integral consolidada
│
├── 01_Base_de_Datos_Google_Sheets/                       # Modelo relacional y almacenamiento estructurado
│   ├── BD_Control_Acceso_Vehicular_UAT.xlsx             # Plantilla de hoja de cálculo con 6 tablas maestras
│   ├── Estructura_Tablas_y_Diccionario_Datos.md         # Diccionario de datos y relaciones de llaves foráneas
│   └── README_Base_de_Datos.md                          # Instrucciones de configuración en Google Drive
│
├── 02_Codigo_Google_Apps_Script/                         # Backend transaccional y API REST
│   ├── Code.gs                                          # 650+ líneas de lógica de negocio en JavaScript V8
│   ├── Index.html                                       # Portal web responsivo de caseta (HTML5 + CSS + JS)
│   ├── appsscript.json                                  # Manifiesto de ejecución, zona horaria y permisos OAuth
│   ├── Repositorio_Codigo_Fuente_GitHub_UAT.md          # Documento de verificación de repositorio
│   └── README_Despliegue_Apps_Script.md                 # Procedimiento paso a paso para despliegue web
│
├── 03_Configuracion_AppSheet/                            # Capa no-code y lógica móvil táctil
│   ├── Esquema_AppSheet_JSON.json                       # Definición de tablas, columnas virtuales y acciones
│   └── Guia_Configuracion_AppSheet_Paso_a_Paso.md       # Guía de expresiones, UX y automatizaciones
│
├── 04_Documentacion_Ingenieria_Requisitos/               # Especificación formal de software
│   ├── Documento_Requerimientos_Software_IEEE830_UAT.md # Estándar IEEE 830 (22 Requisitos Funcionales)
│   ├── Entrevistas_y_Trabajo_de_Campo.md                # 4 entrevistas oficiales y problemáticas de caseta
│   └── Formatos_y_Bitacoras_Evidencia.md                # Formato As-Is físico vs Formato To-Be digital
│
├── 04_Sistema_Funcional/                                 # Enlaces e instructivo de evaluación en vivo
│   └── Sistema_Funcional_Instrucciones_Acceso_UAT.md    # Guía de evaluación para el jurado
│
├── 05_Manual_de_Usuario/                                 # Guía operativa para guardias y supervisores
│   ├── Manual_de_Usuario_Sistema_Control_Acceso_UAT.md  # Manual con procedimientos de entradas y salidas
│   └── Manual_de_Usuario_Sistema_Control_Acceso_UAT.pdf # Versión compilada para impresión y consulta
│
├── 06_Declaracion_Uso_IA/                                # Transparencia y ética en IA
│   ├── Declaracion_Uso_Inteligencia_Artificial_UAT.md   # Tabla oficial de porcentajes de apoyo (35%, 40%, 30%, 45%)
│   └── Evidencias_Prompts_y_Metodologia_IA.md           # Registro cronológico de prompts y respuestas
│
├── 07_Video_Demostrativo_Guion/                          # Producción audiovisual demostrativa
│   ├── Guion_Tecnico_Video_Demostrativo_Hackaton.md     # Escaleta segundo a segundo (5 a 10 min)
│   ├── Storyboard_y_Escaleta_Video.md                   # Flujo visual de escenas
│   └── audio/                                           # Pistas maestras de narración en español neutro
│
└── 08_Evidencias_y_Capturas/                             # Banco de evidencia visual y levantamiento
    ├── caseta_real_campo_uat.jpg                        # Fotografía oficial del levantamiento en Caseta 1
    ├── 01_Portal_Web_Casetas_Desktop.png                # Captura del portal web en modo escritorio
    ├── 03_Portal_Web_Mobile_Responsive.png              # Captura del portal en dispositivo móvil
    ├── 04_Google_Sheets_Base_Datos_UAT.png              # Captura de la base de datos relacional
    ├── 05_AppSheet_Aplicacion_Movil_UAT.png             # Vista de AppSheet en celular para guardias
    ├── 06_AppSheet_Formulario_Entrada_QR.png            # Captura del formulario de entrada y regla de rampa
    └── 07_AppSheet_Vehiculos_Autorizados.png            # Consulta del padrón vehicular institucional
```

---

### 4. Aspectos Técnicos Destacados del Código Fuente

1. **Gestión de Concurrencia con `LockService` (`Code.gs`):**  
   Se implementó el mecanismo `LockService.getScriptLock()` con un tiempo de espera de hasta 30 segundos para garantizar la atomicidad transaccional e impedir colisiones cuando múltiples casetas intentan registrar o dar salida a vehículos simultáneamente.
2. **Cálculo Automático de Tiempos de Permanencia:**  
   Algoritmo matemático que calcula la diferencia exacta en minutos entre el timestamp de ingreso y el timestamp de egreso, vinculando la duración a los límites de tolerancia para visitantes y servicios de transporte.
3. **Control de Flujo para Vehículos de Plataforma (DiDi / Uber):**  
   Validación condicional de campos requeridos (INE/Licencia, destino y motivo) y activación de la regla institucional que prohíbe el estacionamiento en bahías de transporte público.
4. **Sincronización Bidireccional:**  
   Arquitectura híbrida donde las operaciones ejecutadas desde Google AppSheet se reflejan instantáneamente en Google Sheets y quedan disponibles para consumo de la API REST desarrollada en Google Apps Script.

---

### 5. Datos de Contacto y Autoría
* **Autor Principal:** Jose Misael Díaz Candelario  
* **Institución:** Universidad Autónoma de Tamaulipas - Facultad de Ingeniería Tampico (F.I.T.)  
* **Correo Electrónico:** `jmisaeldiaz.1@gmail.com`
