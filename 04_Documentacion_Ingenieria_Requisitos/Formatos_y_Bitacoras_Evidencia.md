# Formatos de Campo y Bitácoras de Evidencia
## Sistema de Control de Acceso Vehicular - UAT CUTM Sur

---

### 1. Formato de Bitácora Física Tradicional (Formato As-Is Obsoleto)
A continuación se ilustra el formato que se utilizaba previamente en papel dentro de las casetas del campus CUTM Sur, el cual presentaba tachaduras, pérdida de legibilidad y omisión frecuente de la hora de salida:

```
+-----------------------------------------------------------------------------------------------------------------+
|                                UNIVERSIDAD AUTÓNOMA DE TAMAULIPAS - CAMPUS CUTM SUR                             |
|                                       BITÁCORA DE CONTROL VEHICULAR (CASETA 1)                                  |
| Fecha: 14/11/2026                 Guardia en Turno: Pedro Martínez                     Turno: Matutino          |
+-----+----------+-----------+------------+-----------------------+---------------------+---------+---------+-----+
| No. | Placas   | Hora Ent. | Tipo Auto  | Nombre Conductor      | Matrícula / Dep.    | Destino | H. Sal. | Fma |
+-----+----------+-----------+------------+-----------------------+---------------------+---------+---------+-----+
| 01  | XHC-458B | 06:45     | Jetta Gris | Dr. Carlos Villarreal | Docente FIT         | Cubículo|  ----   |  OK |
| 02  | WNB-892A | 07:10     | Versa Azul | Mariana Hernández     | 22130845 ISC        | Salón 12|  ----   |  OK |
| 03  | NXX-120C | 08:05     | Camioneta  | Sandra Vega (Telmex)  | INE-88219401        | Servidor|  11:45  |  OK |
| 04  | [Ilegible]| 08:22     | Tsuru Rojo | [Tachado]             | Visita escolar      | FADU    |  ----   |  -- |
+-----+----------+-----------+------------+-----------------------+---------------------+---------+---------+-----+
```

*Problemas documentados:*
- Omisión de la hora de salida en el 90% de los vehículos particulares.
- Caligrafía apresurada ilegible que imposibilita la reconstrucción de eventos ante incidentes.
- Ausencia de validación de seguros vigentes o estatus disciplinario.

---

### 2. Formato Digital Integrado (Formato To-Be en AppSheet & Sheets)
El nuevo formato estandarizado captura datos atómicos, validados y auditables:

```
[ID_REGISTRO]           REG-20261117-064510
[FECHA_HORA_ENTRADA]    17/11/2026 06:45:10 (Inmutable, GMT-6)
[CASETA_ENTRADA]        CAS-01 (Caseta Principal Norte - Blvd. López Mateos)
[PLACA]                 XHC-458-B (Validada en Padrón)
[TIPO_VEHICULO]         Automóvil (Volkswagen Jetta 2022 Gris Platino)
[CONDUCTOR]             Dr. Carlos Alberto Villarreal Garza
[TIPO_USUARIO]          Docente (Matrícula: D-8941 - Facultad de Ingeniería)
[ESTATUS_ACCESO]        AUTORIZADO (Seguro Vigente: Sí)
[FECHA_HORA_SALIDA]     17/11/2026 14:15:30
[CASETA_SALIDA]         CAS-01
[TIEMPO_PERMANENCIA]    450 minutos (7 h 30 min)
[ESTATUS_FINAL]         Concluido
[GUARDIA_AUDITADO]      juan.garza@uat.edu.mx (IP / Terminal Caseta 1)
```

---

### 3. Registro de Observación de Tráfico en Horas Pico (Levantamiento de Campo)

**Punto de Observación:** Caseta 1 (Acceso Blvd. Adolfo López Mateos)  
**Fecha:** 15 de Noviembre de 2026  
**Intervalo de Muestreo:** 06:45 a 08:00 hrs (Intervalo crítico de ingreso matutino)

| Ventana de Tiempo | Vehículos Registrados | Tiempo Promedio de Espera | Longitud de la Fila (Autos) | Observaciones de Incidencias |
| :---: | :---: | :---: | :---: | :--- |
| **06:45 - 07:00** | 38 vehículos | 18 segundos | 3 a 5 autos | Flujo regular de profesores y personal de intendencia. |
| **07:00 - 07:15** | 72 vehículos | 55 segundos | 12 a 16 autos | **Hora pico máxima.** Fila sale a la lateral del Boulevard. Se interrumpe el registro manual para desfogar tráfico. |
| **07:15 - 07:30** | 45 vehículos | 30 segundos | 6 a 8 autos | Llegada retrasada de alumnos. |
| **07:30 - 07:45** | 24 vehículos | 15 segundos | 2 a 4 autos | Tráfico estabilizado. |
| **07:45 - 08:00** | 31 vehículos | 20 segundos | 3 a 5 autos | Ingreso de personal administrativo y proveedores. |

*Conclusión del Muestreo:*  
La automatización con AppSheet y lectura QR reduce el tiempo promedio de atención de **55 segundos a menos de 4 segundos**, permitiendo procesar hasta 15 vehículos por minuto sin que se generen filas hacia la avenida pública.


---

### 3. Registro Específico de Vehículos de Plataforma (DiDi / Uber) y Visitantes
Con base en la entrevista de campo (Oficial Pedro Martínez Cruz), el formato To-Be integra campos específicos para regular el flujo de transporte por aplicación y visitantes externos:

```
+---------------------------------------------------------------------------------------------------+
|               REGISTRO DE VEHÍCULO DE PLATAFORMA / VISITANTE EXTERNO (AppSheet)                   |
+---------------------------------------------------------------------------------------------------+
| [ID_REGISTRO]         : REG-20261117-081522                                                       |
| [TIPO_SERVICIO]       : Plataforma Digital (DiDi / Uber / Taxi)                                   |
| [APLICACION]          : DiDi México                                                               |
| [PLACA]               : WNB-312-C (Nissan Versa Blanco 2022)                                      |
| [NOMBRE_CONDUCTOR]    : Juan Carlos Morales Saldaña                                               |
| [TIPO_IDENTIFICACION] : Licencia de Conducir (Folio: LIC-TAM-8831092)                             |
| [AREA_VISITADA]       : Facultad de Ingeniería Tampico (F.I.T.) - Edificio B                      |
| [ASUNTO_MOTIVO]       : Dejar pasaje (Estudiante ISC)                                             |
| [REGLA_VIAL_RAMPA]    : AVISO NOTIFICADO: PROHIBIDO HACER RAMPA EN PARADA DE CAMIÓN               |
| [TIEMPO_MAX_PERMITIDO]: 15 Minutos (Tolerancia de circuito universitario)                         |
| [EVIDENCIA_FOTOGRAFICA]: img_evidencia_20261117_081522.jpg (Capturada con cámara del smartphone)  |
| [CANAL_ALERTA]        : Notificación digital automática enviada a supervisión y Casetas 2 y 3     |
+---------------------------------------------------------------------------------------------------+
```

#### Protocolo de Detección de "Rampa Indebida":
1. Si un vehículo de plataforma excede los 15 minutos en el circuito o es reportado por radio/cámara estacionado en la bahía de autobuses de F.I.T. o FADU:
2. El oficial de vigilancia captura una **fotografía de prueba con el smartphone de caseta** directamente dentro de la aplicación AppSheet.
3. El sistema actualiza el registro con estatus `Infracción: Rampa Indebida` y emite una alerta roja para impedir futuros accesos no supervisados.
