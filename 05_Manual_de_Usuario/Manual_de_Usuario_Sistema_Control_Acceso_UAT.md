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
   • **[https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7](https://www.appsheet.com/start/a52cb700-5be6-41da-9d84-1a37db2d04e7)**
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
