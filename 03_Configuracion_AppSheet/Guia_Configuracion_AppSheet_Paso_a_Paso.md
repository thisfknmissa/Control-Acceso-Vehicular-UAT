# Guía Maestra de Configuración en Google AppSheet
## Sistema de Control de Acceso Vehicular - UAT CUTM Sur

Esta guía detalla la configuración paso a paso dentro del editor de **Google AppSheet** para construir una aplicación no-code robusta, visualmente atractiva e intuitiva para los oficiales de caseta y coordinadores de seguridad.

---

### 1. Creación de la Aplicación en AppSheet

1. Ingresa a [AppSheet.com](https://www.appsheet.com) e inicia sesión con tu cuenta de Google.
2. Haz clic en **Create > App > Start with existing data**.
3. Configuración inicial:
   - **App Name:** `Control Acceso Vehicular UAT CUTM Sur`
   - **Category:** `Operations / Security & Facilities`
   - **Data:** Selecciona la Hoja de cálculo de Google creada a partir de `BD_Control_Acceso_Vehicular_UAT.xlsx`.
4. AppSheet creará automáticamente la app conectada a la primera tabla.

---

### 2. Configuración de Tablas y Estructura de Datos (Data > Tables)

Agrega las siguientes tablas desde tu Hoja de cálculo:
1. `Registros_Acceso` (Permisos: **Adds, Updates, Deletes, Reads**)
2. `Vehiculos` (Permisos: **Adds, Updates, Reads**)
3. `Usuarios` (Permisos: **Adds, Updates, Reads**)
4. `Casetas` (Permisos: **Read Only**)
5. `Configuracion` (Permisos: **Read Only**)

#### Configuración de Columnas Clave:

##### A. Tabla `Registros_Acceso`
- `ID_Registro`: **Text** | Key: Sí | Initial Value: `CONCATENATE("REG-", TEXT(TODAY(), "YYYYMMDD-"), UNIQUEID())`
- `Fecha`: **Date** | Initial Value: `TODAY()`
- `Hora_Entrada`: **Time** | Initial Value: `TIMENOW()`
- `Timestamp_Entrada`: **DateTime** | Initial Value: `NOW()`
- `Caseta_Entrada`: **Ref** -> Tabla `Casetas` | Initial Value: `USERSETTINGS(Caseta_Asignada)`
- `Placa`: **Ref** -> Tabla `Vehiculos` | Search: Sí | Scannable: **Sí** (activa la cámara para escaneo de códigos de barra o QR)
- `Tipo_Usuario`: **Enum** (`Estudiante`, `Docente`, `Administrativo`, `Visitante`) | Formula: `IF(ISNOTBLANK([Placa].[Tipo_Usuario]), [Placa].[Tipo_Usuario], "Visitante")`
- `Nombre_Conductor`: **Text** | Formula: `IF(ISNOTBLANK([Placa].[Nombre_Conductor]), [Placa].[Nombre_Conductor], "")`
- `Tipo_Vehiculo`: **Enum** (`Automóvil`, `Motocicleta`, `Camioneta`, `Carga`) | Formula: `IF(ISNOTBLANK([Placa].[Tipo_Vehiculo]), [Placa].[Tipo_Vehiculo], "Automóvil")`
- `Hora_Salida`: **Time** | Editable? `ISNOTBLANK([Timestamp_Salida])`
- `Timestamp_Salida`: **DateTime**
- `Caseta_Salida`: **Ref** -> Tabla `Casetas`
- `Tiempo_Permanencia_Min`: **Number** | Formula: `IF(ISNOTBLANK([Timestamp_Salida]), TOTALMINUTES([Timestamp_Salida] - [Timestamp_Entrada]), "")`
- `Estatus_Transito`: **Enum** (`Dentro`, `Concluido`) | Initial Value: `"Dentro"`
- `Guardia_Registro`: **Text** | Initial Value: `USEREMAIL()`

##### Columnas Virtuales Útiles en `Registros_Acceso`:
- **Nombre:** `Tiempo_Permanencia_Legible`
  - **Tipo:** `Text`
  - **Fórmula:** `IF(ISNOTBLANK([Tiempo_Permanencia_Min]), CONCATENATE(FLOOR([Tiempo_Permanencia_Min] / 60), " h ", MOD([Tiempo_Permanencia_Min], 60), " min"), "En tránsito")`
- **Nombre:** `Alerta_Seguridad`
  - **Tipo:** `Color` / `Show`
  - **Fórmula:** `IF([Placa].[Estatus_Acceso] = "Bloqueado", "ALERTA: VEHÍCULO BLOQUEADO POR SEGURIDAD", "Acceso Normal")`

---

### 3. Slices (Filtros de Datos)

Crea los siguientes Slices en **Data > Slices**:

1. **Slice: `Vehiculos_Actualmente_Dentro`**
   - **Tabla fuente:** `Registros_Acceso`
   - **Row Filter Condition:** `[Estatus_Transito] = "Dentro"`
   - **Update Mode:** Updates, Reads (permite registrar salida directamente desde esta lista).

2. **Slice: `Accesos_Del_Dia`**
   - **Tabla fuente:** `Registros_Acceso`
   - **Row Filter Condition:** `[Fecha] = TODAY()`

3. **Slice: `Visitantes_Activos`**
   - **Tabla fuente:** `Registros_Acceso`
   - **Row Filter Condition:** `AND([Estatus_Transito] = "Dentro", [Tipo_Usuario] = "Visitante")`

---

### 4. Vistas de Experiencia de Usuario (App UX > Views)

Configura las siguientes vistas primarias en la barra inferior de navegación:

#### 1. Vista: `Entrada Rápida` (Primary View)
- **View Type:** `form`
- **For this data:** `Registros_Acceso`
- **Column Order:** `Placa`, `Caseta_Entrada`, `Tipo_Usuario`, `Nombre_Conductor`, `Matricula_ID`, `Tipo_Vehiculo`, `Marca_Modelo`, `Motivo_Visita`, `Observaciones`.
- **Display Icon:** `login` / `arrow-right-square`
- **Finish View:** `Vehiculos_Actualmente_Dentro`

#### 2. Vista: `Vehículos en Campus` (Primary View)
- **View Type:** `deck`
- **For this data:** `Vehiculos_Actualmente_Dentro`
- **Primary Header:** `[Placa]`
- **Secondary Header:** `[Nombre_Conductor]`
- **Summary Column:** `[Hora_Entrada]`
- **Group By:** `Caseta_Entrada`
- **Item Action:** Acción de Salida Rápida (1-click para registrar salida).
- **Display Icon:** `car-front-fill`

#### 3. Vista: `Aforo en Vivo` (Primary View)
- **View Type:** `dashboard`
- **Entries:**
  - Vista gráfica de distribución por tipo de usuario (`chart`).
  - Lista de visitantes activos en instalaciones (`deck`).
  - Total de aforo consumido.
- **Display Icon:** `pie-chart-fill`

#### 4. Vista: `Historial de Accesos` (Menu View)
- **View Type:** `table`
- **For this data:** `Registros_Acceso`
- **Sort By:** `Timestamp_Entrada` (Descending)
- **Display Icon:** `clock-history`

#### 5. Vista: `Padrón Vehicular` (Menu View)
- **View Type:** `table`
- **For this data:** `Vehiculos`
- **Display Icon:** `card-list`

---

### 5. Acciones y Comportamiento (Behavior > Actions)

#### Acción 1: `Registrar Salida Rápida (1-Click)`
- **For a record of table:** `Registros_Acceso`
- **Do this:** `Data: set the values of some columns in this row`
- **Set columns:**
  - `Timestamp_Salida` = `NOW()`
  - `Hora_Salida` = `TIMENOW()`
  - `Caseta_Salida` = `USERSETTINGS(Caseta_Asignada)`
  - `Estatus_Transito` = `"Concluido"`
  - `Tiempo_Permanencia_Min` = `TOTALMINUTES(NOW() - [Timestamp_Entrada])`
- **Only if this condition is true:** `[Estatus_Transito] = "Dentro"`
- **Appearance:** Icon `logout`, Prominence: `Display Prominently` (botón destacado verde o azul).
- **Confirmation Message:** `"¿Confirmar la salida vehicular para la placa " & [Placa] & "?"`

---

### 6. Automatizaciones y Bots (Automation > Bots)

#### Bot 1: `Alerta Inmediata por Vehículo Bloqueado / Lista Negra`
- **Event:** `Registros_Acceso Adds Only`
- **Condition:** `[Placa].[Estatus_Acceso] = "Bloqueado"`
- **Tasks:**
  - Send an email / Push notification:
    - **To:** `seguridad.cutmsur@uat.edu.mx`
    - **Subject:** `URGENTE: Intento de ingreso de vehículo en lista negra ([Placa])`
    - **Body:** `Se registró el ingreso no autorizado o intento de acceso del vehículo con placa <<[Placa]>> en la caseta <<[Caseta_Entrada]>> a las <<[Hora_Entrada]>>.`

#### Bot 2: `Notificación de Visitante a Personal Anfitrión`
- **Event:** `Registros_Acceso Adds Only`
- **Condition:** `[Tipo_Usuario] = "Visitante"`
- **Tasks:**
  - Enviar correo al departamento anfitrión notificando la llegada del visitante para agilizar su recepción en las instalaciones.

---

### 7. Brand y Estilo Visual UAT
- **Primary Color:** Azul Marino UAT (`#0A2240`)
- **Theme:** Light
- **App Logo:** Logotipo institucional de la Facultad de Ingeniería Tampico / UAT.
- **Launch Image:** Fotografía de la fachada principal del Campus Universitario Tampico Madero Sur.
