# Guía de Despliegue de Google Apps Script

Esta carpeta contiene el backend transaccional y la API REST del **Sistema de Control de Acceso Vehicular para la UAT CUTM Sur**.

---

### Pasos para Desplegar el Código en Google Apps Script

1. **Abrir el Editor de Apps Script:**
   - Abre la Hoja de cálculo de Google que creaste a partir de `BD_Control_Acceso_Vehicular_UAT.xlsx`.
   - En la barra de menú superior, haz clic en **Extensiones > Apps Script**.

2. **Copiar los Archivos:**
   - En el editor de Apps Script, reemplaza el contenido del archivo `Código.gs` (o `Code.gs`) con el contenido de `Code.gs` de esta carpeta.
   - Crea un nuevo archivo HTML haciendo clic en el botón `+` (Añadir archivo) > **HTML** y nómbralo `Index`.
   - Pega el código de `Index.html` en este nuevo archivo.
   - En la configuración del proyecto (icono de engranaje ⚙️), activa la opción **"Mostrar archivo de manifiesto 'appsscript.json' en el editor"** y asegúrate de que contenga los permisos de `appsscript.json`.

3. **Guardar el Proyecto:**
   - Asigna al proyecto el nombre: `API_Control_Acceso_Vehicular_UAT`.
   - Haz clic en el icono del disquete (Guardar proyecto).

4. **Desplegar como Aplicación Web:**
   - En la esquina superior derecha, haz clic en el botón azul **Implementar > Nueva implementación**.
   - Haz clic en el icono de engranaje a la izquierda de "Selecciona el tipo" y elige **Aplicación web**.
   - Configura los siguientes parámetros:
     - **Descripción:** `Versión 1.0 - Producción Hackatón UAT`
     - **Ejecutar como:** `Yo (tu_cuenta@gmail.com o @uat.edu.mx)`
     - **Quién tiene acceso:** `Cualquier usuario con cuenta de Google` (o `Cualquier usuario` para acceso desde casetas).
   - Haz clic en **Implementar**.
   - Concede los permisos solicitados de Google Sheets, Drive y correo.
   - Copia la **URL de la aplicación web** generada. Esta URL sirve tanto para la interfaz visual web como para peticiones API REST móviles.
