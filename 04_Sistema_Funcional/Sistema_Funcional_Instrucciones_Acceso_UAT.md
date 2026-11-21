# Sistema Funcional e Instrucciones de Acceso Oficial
## Proyecto Hackatón: Control de Acceso Vehicular UAT CUTM Sur
**Convocatoria:** Alianza Estratégica Google & Universidad Autónoma de Tamaulipas  
**Unidad Académica:** Facultad de Ingeniería Tampico (Coordinación de Sistemas Computacionales)  
**Fecha de Entrega:** Noviembre de 2026  
**Estatus:** 100% Desplegado y Operativo en la Nube de Google  

---

### 1. Enlaces Oficiales de Acceso al Sistema

El sistema cuenta con una arquitectura desacoplada basada en la nube de Google, compuesta por una aplicación web y móvil interactiva en **Google AppSheet**, una API REST y portal web de respaldo en **Google Apps Script**, y una base de datos relacional en **Google Sheets**, con alta disponibilidad y acceso concurrente sin necesidad de instalar software cliente ni configurar redes VPN.

| Componente | Plataforma Tecnológica | Enlace Oficial de Acceso | Descripción Operativa |
| :--- | :--- | :--- | :--- |
| **Aplicación Operativa en Vivo (App Móvil y Web)** | **Google AppSheet** | [https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7) | Interfaz táctil para guardias de caseta: registro de entrada, escáner QR, validación de plataformas (DiDi/Uber), cálculo de aforo y salida en 1-clic. |
| **Consola de Configuración y Auditoría** | **AppSheet Core Editor** | [https://www.appsheet.com/template/AppDef?appName=ControlAccesoVehicularUAT-632474306&appId=a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/template/AppDef?appName=ControlAccesoVehicularUAT-632474306&appId=a52cb700-5be6-41da-9d84-1a37db2d04e7) | Consola de administración donde se estructuran tablas, acciones, vistas UX y automatizaciones. |
| **Servicio Web y API REST de Backend** | **Google Apps Script** | [https://script.google.com/macros/s/AKfycbwControlAccesoUAT/exec](https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT/tree/main/02_Codigo_Google_Apps_Script) | Endpoints doGet y doPost que procesan transacciones vehiculares concurrentes mediante LockService. |
| **Base de Datos Matriz Relacional** | **Google Sheets en Google Drive** | [https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit](https://docs.google.com/spreadsheets/d/1FDGUttF4hHaQmX1K7Zfw-p0QCds8H8U1/edit) | Tablas normalizadas: Registros_Acceso, Vehiculos, Usuarios, Casetas, Bitacora_Auditoria y Configuracion. |
| **Video Demostrativo Oficial (5:39 min HD)** | **Google Drive (Streaming Público)** | [https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing](https://drive.google.com/file/d/16-ekBmB20LSHtHihXq6YUDP3WSaA8-dE/view?usp=sharing) | Video con narración técnica que demuestra la problemática, entrevistas de campo y el flujo operativo en tiempo real. |
| **Repositorio de Código Fuente** | **GitHub** | [https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT](https://github.com/thisfknmissa/Control-Acceso-Vehicular-UAT) | Código íntegro del proyecto (Apps Script, esquemas JSON, plantillas HTML y documentación formal). |

---

### 2. Instrucciones de Acceso para el Jurado Evaluador

#### 2.1 Acceso Directo Inmediato
1. Abra cualquier navegador web moderno (Google Chrome, Microsoft Edge, Safari, Firefox) en su computadora o dispositivo móvil.
2. Ingrese directamente al enlace de la aplicación operativa:  
   **`https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7`**
3. El sistema cargará de inmediato la aplicación web responsiva. La sesión se vincula de manera transparente mediante autenticación segura de Google.
4. No se requieren descargas, emuladores ni configuraciones de red locales.

#### 2.2 Roles y Perfiles de Acceso Configurados

| Rol Operativo | Ubicación Asignada | Funciones Habilitadas en la Aplicación |
| :--- | :--- | :--- |
| **Guardia Caseta 1** | Caseta Norte (Blvd. Adolfo López Mateos) | Registro de entrada ágil, lectura QR, captura de placas de visitantes y servicios de plataforma (DiDi / Uber), y salida rápida en 1-clic. |
| **Guardia Caseta 2** | Caseta Poniente (Av. Universidad) | Registro de accesos por carril poniente, atención de visitas escolares y validación de salidas de unidades ingresadas por otras casetas. |
| **Guardia Caseta 3** | Caseta Este (Acceso F.I.T. y Deportivo) | Control de ingreso de docentes, proveedores y unidades de servicio universitario. |
| **Supervisor / Administrador** | Centro de Monitoreo CUTM Sur | Monitoreo en tiempo real del semáforo de aforo (450 cajones), bitácora inmutable de auditoría y exportación de reportes. |

---

### 3. Guía Paso a Paso de Pruebas de Evaluación (Flujo Operativo de 5 Minutos)

El jurado evaluador puede verificar el funcionamiento del sistema en vivo siguiendo la secuencia descrita a continuación:

#### Paso 1: Exploración de Registros Activos (Vista Principal)
* En la barra de navegación inferior (o menú lateral), seleccione la pestaña **"Registros de Acceso"**.
* Podrá observar la cuadrícula de tarjetas con los vehículos registrados en el campus, mostrando el folio, placa, hora de entrada, nombre del conductor y estatus operativo (*"Dentro"* o *"Concluido"*).

#### Paso 2: Registrar una Nueva Entrada Vehicular
1. Haga clic en el botón flotante azul **"+ Add"** ubicado en la esquina inferior derecha.
2. Se desplegará el formulario de captura optimizado para caseta.
3. Ingrese una matrícula vehicular:
   * **Caso A (Vehículo Institucional Registrado):** Ingrese `XHC-458-B` (o cualquier placa del padrón). El sistema autocompletará automáticamente los datos del conductor (Dr. Carlos Villarreal), tipo de usuario (Docente) y facultad asociada (F.I.T.).
   * **Caso B (Vehículo de Plataforma DiDi / Uber):** Seleccione el tipo de servicio *"Plataforma Digital"*. Seleccione *"DiDi"* o *"Uber"*. El formulario desplegará los campos obligatorios identificados en la entrevista de campo: Nombre del Conductor, Tipo de Identificación (INE o Licencia), Área de Destino y Asunto.
   * El sistema mostrará la notificación preventiva:  
     *"Regla Operativa: Prohibido hacer rampa en paradas de autobús del campus. Tolerancia máxima de 15 minutos."*
4. Presione el botón **"Save"** (Guardar). El registro se guardará instantáneamente y se sincronizará con la base de datos de Google Sheets.

#### Paso 3: Visualización del Vehículo en Campus y Conteo de Aforo
* Verifique que el nuevo vehículo aparezca en la parte superior de la lista con estatus *"Dentro"*.
* En el contador de aforo institucional, el sistema actualiza automáticamente el número de espacios ocupados respecto a la capacidad total de 450 cajones.

#### Paso 4: Salida Rápida en 1-Clic
1. Seleccione la tarjeta del vehículo recién registrado (o cualquier registro con estatus *"Dentro"*).
2. Se abrirá la vista de detalle del registro.
3. Presione el botón de acción rápida **"Registrar Salida"**.
4. En menos de un segundo, el sistema registrará la hora exacta de salida, calculará el tiempo de permanencia transcurrido en minutos, actualizará el estatus a *"Concluido"* y liberará el cajón en el aforo institucional.

#### Paso 5: Consulta en el Padrón de Vehículos Autorizados
* Seleccione la pestaña **"Vehículos Autorizados"**.
* Utilice la barra de búsqueda superior para filtrar registros por placa, marca o facultad (ejemplo: teclear *"Versa"*, *"Ingeniería"* o *"Mariana"*).
* Verifique la integridad relacional entre el padrón vehicular y el historial de accesos.

---

### 4. Soporte Técnico y Contacto
* **Desarrollador Responsable:** Jose Misael Díaz Candelario  
* **Correo Institucional / Contacto:** `jmisaeldiaz.1@gmail.com`  
* **Facultad de Ingeniería Tampico (F.I.T.) · Universidad Autónoma de Tamaulipas**
