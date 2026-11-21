# Registro de Evidencias y Prompts de Inteligencia Artificial
## Sistema de Control de Acceso Vehicular - UAT CUTM Sur

---

### Registro Cronológico de Prompts Representativos Utilizados

#### 1. Fase de Análisis e Ingeniería de Requisitos
- **Herramienta:** Google Gemini
- **Prompt Utilizado:**
  > *"Actúa como un Ingeniero de Requisitos Senior especialista en estándares IEEE 830 y normativas ISO/IEC/IEEE 29148. Con base en la siguiente problemática de control vehicular en las 3 casetas del campus CUTM Sur de la Universidad Autónoma de Tamaulipas, redacta una tabla formal de requisitos funcionales numerados del RF-001 en adelante. Clasifícalos con prioridad MoSCoW, especifica la regla de negocio para prevenir dobles entradas, detección de lista negra de vehículos y cálculo automático de minutos de estancia."*
- **Resultado Obtenido:** Matriz estructurada de requisitos funcionales que sirvió de base para la sección 3 del Documento de Requisitos de Software.

#### 2. Fase de Diseño de Diagramas UML y Modelo de Datos
- **Herramienta:** Antigravity AI
- **Prompt Utilizado:**
  > *"Genera el código Mermaid para un Diagrama de Actividades de estado que modele el flujo completo de un vehículo llegando a caseta, escaneo de QR, bifurcación si la placa está registrada o si es visitante, verificación de lista negra, apertura de pluma, tránsito en campus, y posteriormente el registro de salida 1-click con cálculo de permanencia. Asegura que los nombres de los nodos sean claros y técnicos."*
- **Resultado Obtenido:** Diagrama Mermaid de alta resolución integrado en la sección 6 del documento formal de requisitos.

#### 3. Fase de Programación en Google Apps Script
- **Herramienta:** GitHub Copilot / Gemini API
- **Prompt Utilizado:**
  > *"Escribe una función en Google Apps Script (V8) llamada registrarSalidaVehicular(placa, casetaSalida) que utilice LockService para prevenir condiciones de carrera. La función debe buscar en la hoja 'Registros_Acceso' el último registro activo que tenga Estatus_Transito = 'Dentro' y coincida con la placa, estampar Timestamp_Salida con zona horaria GMT-6, calcular la diferencia en minutos entre la salida y la entrada, actualizar Estatus_Transito a 'Concluido' y registrar la acción en una hoja de Bitacora_Auditoria."*
- **Resultado Obtenido:** Función `registrarSalidaVehicular` implementada con éxito en `Code.gs`.

#### 4. Fase de Fórmulas y Automatización en AppSheet
- **Herramienta:** Google Gemini
- **Prompt Utilizado:**
  > *"¿Cuál es la fórmula óptima en AppSheet para una columna virtual que muestre el tiempo de permanencia formateado como 'X h Y min' a partir de una columna numérica de minutos [Tiempo_Permanencia_Min], manejando adecuadamente los casos cuando el vehículo aún no ha registrado su salida?"*
- **Resultado Obtenido:** Expresión `IF(ISNOTBLANK([Tiempo_Permanencia_Min]), CONCATENATE(FLOOR([Tiempo_Permanencia_Min] / 60), " h ", MOD([Tiempo_Permanencia_Min], 60), " min"), "En tránsito")` configurada en la guía de AppSheet.
