# Instrucciones de la Base de Datos Google Sheets

El archivo `BD_Control_Acceso_Vehicular_UAT.xlsx` incluido en esta carpeta contiene la estructura relacional completa, fórmulas preconfiguradas, datos de prueba y tablero de control para el **Sistema de Control de Acceso Vehicular de la UAT CUTM Sur**.

---

### Pasos para Subir y Conectar en Google Drive:

1. **Subir a Google Drive:**
   - Abre [Google Drive](https://drive.google.com).
   - Arrastra el archivo `BD_Control_Acceso_Vehicular_UAT.xlsx` a tu unidad (o a una carpeta llamada `Hackaton_UAT`).
   - Haz clic derecho sobre el archivo y selecciona **Abrir con > Hojas de cálculo de Google**.
   - Haz clic en **Archivo > Guardar como Hoja de cálculo de Google** (esto asegurará la compatibilidad nativa con AppSheet y Google Apps Script).

2. **Hojas incluidas en el Libro:**
   - `Configuracion`: Parámetros operativos y umbrales de aforo del campus.
   - `Casetas`: Catálogo de los 3 accesos vehiculares de CUTM Sur.
   - `Usuarios`: Padrón de Estudiantes, Docentes, Administrativos y Visitantes.
   - `Vehiculos`: Padrón vehicular con placas, modelos, QR de identificación y estatus de autorización.
   - `Registros_Acceso`: Base transaccional de entradas y salidas en tiempo real.
   - `Bitacora_Auditoria`: Registro de seguridad y auditoría inmutable de operaciones.
   - `Dashboard_Metricas`: Panel de indicadores en tiempo real con fórmulas dinámicas de aforo, afluencia y distribución.

3. **Conexión en AppSheet:**
   - Al crear una nueva aplicación en [AppSheet](https://www.appsheet.com) (*Create > App > Start with existing data*), selecciona esta Hoja de cálculo de Google como fuente de datos.
   - Agrega las tablas `Casetas`, `Usuarios`, `Vehiculos` y `Registros_Acceso`.
