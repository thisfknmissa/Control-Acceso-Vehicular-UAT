/**
 * =========================================================================================
 * PROYECTO HACKATÓN GOOGLE & UAT - FACULTAD DE INGENIERÍA TAMPICO
 * SISTEMA DE CONTROL DE ACCESO VEHICULAR - UAT CAMPUS CUTM SUR
 * 
 * Lenguaje: Google Apps Script (V8 Runtime)
 * Backend: Google Sheets
 * Frontend: Google AppSheet & Web App Responsive
 * Autor: Equipo de Desarrollo e Innovación UAT CUTM Sur
 * Fecha de Entrega: Noviembre 2026
 * =========================================================================================
 */

// Constantes de configuración global
const SPREADSHEET_ID = ""; // Dejar vacío para vincular automáticamente a la hoja activa (SpreadsheetApp.getActiveSpreadsheet())
const HOJA_CONFIG = "Configuracion";
const HOJA_CASETAS = "Casetas";
const HOJA_USUARIOS = "Usuarios";
const HOJA_VEHICULOS = "Vehiculos";
const HOJA_REGISTROS = "Registros_Acceso";
const HOJA_BITACORA = "Bitacora_Auditoria";
const HOJA_DASHBOARD = "Dashboard_Metricas";

/**
 * Obtiene la hoja de cálculo activa
 */
function getSpreadsheet() {
  if (SPREADSHEET_ID && SPREADSHEET_ID.trim() !== "") {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

/**
 * Punto de entrada HTTP GET para servir la Interfaz Web Responsive o responder a peticiones API REST
 */
function doGet(e) {
  try {
    // Si la petición solicita un endpoint de API vía parámetro 'action'
    if (e && e.parameter && e.parameter.action) {
      return handleApiGet(e);
    }
    
    // De lo contrario, renderiza la interfaz web de respaldo
    const template = HtmlService.createTemplateFromFile("Index");
    template.titulo = "Control de Acceso Vehicular - UAT CUTM Sur";
    template.campus = "Campus Universitario Tampico Madero Sur";
    
    return template.evaluate()
      .setTitle("UAT CUTM Sur - Control de Acceso Vehicular")
      .addMetaTag("viewport", "width=device-width, initial-scale=1.0")
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Punto de entrada HTTP POST para transacciones desde aplicaciones móviles o clientes externos
 */
function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const action = postData.action;
    let result = {};

    switch (action) {
      case "registrarEntrada":
        result = registrarEntradaVehicular(postData.datos);
        break;
      case "registrarSalida":
        result = registrarSalidaVehicular(postData.placa, postData.casetaSalida, postData.observaciones);
        break;
      case "consultarPlaca":
        result = consultarInformacionPlaca(postData.placa);
        break;
      case "obtenerAforo":
        result = obtenerAforoCampus();
        break;
      case "generarReporte":
        result = generarReportePeriodo(postData.fechaInicio, postData.fechaFin);
        break;
      default:
        result = { success: false, message: "Acción no reconocida: " + action };
    }

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Enrutador de peticiones GET de la API
 */
function handleApiGet(e) {
  const action = e.parameter.action;
  let response = {};

  if (action === "consultarPlaca") {
    response = consultarInformacionPlaca(e.parameter.placa);
  } else if (action === "obtenerAforo") {
    response = obtenerAforoCampus();
  } else if (action === "obtenerCasetas") {
    response = obtenerListadoCasetas();
  } else if (action === "obtenerVehiculosDentro") {
    response = obtenerVehiculosDentro();
  } else {
    response = { success: false, message: "Acción GET no soportada" };
  }

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * =========================================================================================
 * FUNCIONES OPERATIVAS TRANSACCIONALES
 * =========================================================================================
 */

/**
 * Registra la entrada de un vehículo al campus universitario
 */
function registrarEntradaVehicular(datos) {
  const ss = getSpreadsheet();
  const sheetReg = ss.getSheetByName(HOJA_REGISTROS);
  const lock = LockService.getScriptLock();
  
  // Esperar hasta 10 segundos para evitar condiciones de carrera simultáneas
  lock.waitLock(10000);

  try {
    const placaLimpia = (datos.placa || "").trim().toUpperCase();
    if (!placaLimpia) {
      throw new Error("El número de placa es obligatorio.");
    }

    // 1. Validar si el vehículo ya se encuentra registrado dentro del campus
    const vehiculoDentro = verificarVehiculoDentro(placaLimpia);
    if (vehiculoDentro.estaDentro) {
      return {
        success: false,
        message: `El vehículo con placa ${placaLimpia} ya tiene un registro de entrada activo en ${vehiculoDentro.casetaEntrada} a las ${vehiculoDentro.horaEntrada}. Debe registrar su salida antes de volver a ingresar.`
      };
    }

    // 2. Consultar catálogo de vehículos para autocompletar si está registrado
    const infoVehiculo = consultarInformacionPlaca(placaLimpia);

    // Si el vehículo está en lista negra o bloqueado, rechazar acceso
    if (infoVehiculo.registrado && infoVehiculo.estatusAcceso === "Bloqueado") {
      registrarEnBitacora("INTENTO_ACCESO_BLOQUEADO", placaLimpia, datos.casetaEntrada, "Intento de ingreso de vehículo en lista negra");
      return {
        success: false,
        bloqueado: true,
        message: `ACCESO DENEGADO: El vehículo con placa ${placaLimpia} se encuentra BLOQUEADO en el sistema. Motivo: ${infoVehiculo.observaciones}`
      };
    }

    const now = new Date();
    const fechaStr = Utilities.formatDate(now, "GMT-6", "yyyy-MM-dd");
    const horaStr = Utilities.formatDate(now, "GMT-6", "HH:mm:ss");
    const timestampStr = Utilities.formatDate(now, "GMT-6", "yyyy-MM-dd HH:mm:ss");
    
    // Generación de ID único: REG-YYYYMMDD-HHMMSS
    const idRegistro = "REG-" + Utilities.formatDate(now, "GMT-6", "yyyyMMdd-HHmmss");

    const tipoVehiculo = datos.tipoVehiculo || (infoVehiculo.registrado ? infoVehiculo.tipoVehiculo : "Automóvil");
    const marcaModelo = datos.marcaModelo || (infoVehiculo.registrado ? `${infoVehiculo.marca} ${infoVehiculo.modelo}` : "No especificado");
    const tipoUsuario = datos.tipoUsuario || (infoVehiculo.registrado ? infoVehiculo.tipoUsuario : "Visitante");
    const nombreConductor = datos.nombreConductor || (infoVehiculo.registrado ? infoVehiculo.nombreConductor : "Visitante no registrado");
    const matriculaID = datos.matriculaID || (infoVehiculo.registrado ? infoVehiculo.matricula : (datos.identificacion || "N/A"));
    const motivoVisita = datos.motivoVisita || (tipoUsuario === "Visitante" ? "Trámites / Visita General" : "Actividad Universitaria");
    const guardia = Session.getActiveUser().getEmail() || datos.guardia || "Guardia_Caseta";

    // Fila a insertar en Registros_Acceso
    const nuevaFila = [
      idRegistro,
      fechaStr,
      horaStr,
      timestampStr,
      datos.casetaEntrada || "CAS-01",
      placaLimpia,
      tipoVehiculo,
      marcaModelo,
      tipoUsuario,
      nombreConductor,
      matriculaID,
      motivoVisita,
      "", // Hora_Salida
      "", // Timestamp_Salida
      "", // Caseta_Salida
      "", // Tiempo_Permanencia_Min
      "Dentro", // Estatus_Transito
      guardia,
      datos.observaciones || "Ingreso autorizado"
    ];

    sheetReg.appendRow(nuevaFila);

    // Registro de auditoría
    registrarEnBitacora("REGISTRO_ENTRADA", idRegistro, datos.casetaEntrada || "CAS-01", `Entrada: ${placaLimpia} (${tipoUsuario} - ${nombreConductor})`);

    // Notificación en caso de visitante
    if (tipoUsuario === "Visitante" && datos.anfitrionEmail) {
      enviarNotificacionVisitante(datos.anfitrionEmail, nombreConductor, placaLimpia, motivoVisita);
    }

    return {
      success: true,
      idRegistro: idRegistro,
      placa: placaLimpia,
      horaEntrada: horaStr,
      nombreConductor: nombreConductor,
      tipoUsuario: tipoUsuario,
      message: `Entrada registrada exitosamente para placa ${placaLimpia}.`
    };

  } catch (err) {
    return { success: false, error: err.toString() };
  } finally {
    lock.releaseLock();
  }
}

/**
 * Registra la salida vehicular calculando automáticamente el tiempo de permanencia
 */
function registrarSalidaVehicular(placa, casetaSalida, observaciones) {
  const ss = getSpreadsheet();
  const sheetReg = ss.getSheetByName(HOJA_REGISTROS);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const placaLimpia = (placa || "").trim().toUpperCase();
    if (!placaLimpia) {
      throw new Error("Debe proporcionar la placa vehicular.");
    }

    const data = sheetReg.getDataRange().getValues();
    let filaEncontrada = -1;
    let timestampEntradaStr = "";
    let idRegistro = "";
    let nombreConductor = "";

    // Buscar de abajo hacia arriba el último registro activo con Estatus_Transito = "Dentro"
    for (let i = data.length - 1; i >= 1; i--) {
      const rowPlaca = (data[i][5] || "").toString().trim().toUpperCase();
      const estatusTransito = (data[i][16] || "").toString().trim();

      if (rowPlaca === placaLimpia && estatusTransito === "Dentro") {
        filaEncontrada = i + 1; // Fila en base 1
        idRegistro = data[i][0];
        timestampEntradaStr = data[i][3];
        nombreConductor = data[i][9];
        break;
      }
    }

    if (filaEncontrada === -1) {
      return {
        success: false,
        message: `No se encontró ningún registro de entrada activo para la placa ${placaLimpia} que se encuentre actualmente dentro del campus.`
      };
    }

    const now = new Date();
    const horaSalidaStr = Utilities.formatDate(now, "GMT-6", "HH:mm:ss");
    const timestampSalidaStr = Utilities.formatDate(now, "GMT-6", "yyyy-MM-dd HH:mm:ss");

    // Cálculo del tiempo de estancia en minutos
    let minutosEstancia = 0;
    try {
      const entradaDate = new Date(timestampEntradaStr.replace(/-/g, "/"));
      const diffMs = now.getTime() - entradaDate.getTime();
      minutosEstancia = Math.max(1, Math.round(diffMs / (1000 * 60)));
    } catch (e) {
      minutosEstancia = 0;
    }

    // Actualizar columnas en la fila encontrada
    // Columnas: M=Hora_Salida (13), N=Timestamp_Salida (14), O=Caseta_Salida (15), P=Tiempo_Permanencia_Min (16), Q=Estatus_Transito (17), S=Observaciones (19)
    sheetReg.getRange(filaEncontrada, 13).setValue(horaSalidaStr);
    sheetReg.getRange(filaEncontrada, 14).setValue(timestampSalidaStr);
    sheetReg.getRange(filaEncontrada, 15).setValue(casetaSalida || "CAS-01");
    sheetReg.getRange(filaEncontrada, 16).setValue(minutosEstancia);
    sheetReg.getRange(filaEncontrada, 17).setValue("Concluido");
    if (observaciones) {
      const obsAnterior = sheetReg.getRange(filaEncontrada, 19).getValue();
      sheetReg.getRange(filaEncontrada, 19).setValue((obsAnterior ? obsAnterior + " | " : "") + observaciones);
    }

    // Auditoría
    registrarEnBitacora("REGISTRO_SALIDA", idRegistro, casetaSalida || "CAS-01", `Salida: ${placaLimpia} (${minutosEstancia} min de permanencia)`);

    return {
      success: true,
      idRegistro: idRegistro,
      placa: placaLimpia,
      conductor: nombreConductor,
      horaSalida: horaSalidaStr,
      tiempoPermanenciaMin: minutosEstancia,
      tiempoFormateado: formatearMinutos(minutosEstancia),
      message: `Salida completada exitosamente para ${placaLimpia}. Tiempo de estancia: ${formatearMinutos(minutosEstancia)}.`
    };

  } catch (err) {
    return { success: false, error: err.toString() };
  } finally {
    lock.releaseLock();
  }
}

/**
 * =========================================================================================
 * FUNCIONES DE CONSULTA Y BÚSQUEDA
 * =========================================================================================
 */

/**
 * Consulta la información de un vehículo y su propietario a partir de la placa
 */
function consultarInformacionPlaca(placa) {
  const ss = getSpreadsheet();
  const sheetVeh = ss.getSheetByName(HOJA_VEHICULOS);
  const placaLimpia = (placa || "").trim().toUpperCase();

  const data = sheetVeh.getDataRange().getValues();
  // Encabezados en fila 1: Placa(0), ID_Usuario(1), Nombre_Conductor(2), Tipo_Usuario(3), Tipo_Vehiculo(4), Marca(5), Modelo(6), Anio(7), Color(8), Tag_QR(9), Seguro_Vigente(10), Estatus_Acceso(11), Observaciones(12)
  for (let i = 1; i < data.length; i++) {
    const p = (data[i][0] || "").toString().trim().toUpperCase();
    if (p === placaLimpia) {
      return {
        registrado: true,
        placa: p,
        idUsuario: data[i][1],
        nombreConductor: data[i][2],
        tipoUsuario: data[i][3],
        tipoVehiculo: data[i][4],
        marca: data[i][5],
        modelo: data[i][6],
        anio: data[i][7],
        color: data[i][8],
        tagQR: data[i][9],
        seguroVigente: data[i][10],
        estatusAcceso: data[i][11],
        observaciones: data[i][12]
      };
    }
  }

  return {
    registrado: false,
    placa: placaLimpia,
    message: "Vehículo no empadronado. Se registrará como Visitante."
  };
}

/**
 * Verifica si un vehículo se encuentra actualmente dentro del campus
 */
function verificarVehiculoDentro(placa) {
  const ss = getSpreadsheet();
  const sheetReg = ss.getSheetByName(HOJA_REGISTROS);
  const data = sheetReg.getDataRange().getValues();
  const placaLimpia = placa.trim().toUpperCase();

  for (let i = data.length - 1; i >= 1; i--) {
    const rowPlaca = (data[i][5] || "").toString().trim().toUpperCase();
    const estatus = (data[i][16] || "").toString().trim();
    if (rowPlaca === placaLimpia && estatus === "Dentro") {
      return {
        estaDentro: true,
        idRegistro: data[i][0],
        fechaEntrada: data[i][1],
        horaEntrada: data[i][2],
        casetaEntrada: data[i][4],
        nombreConductor: data[i][9]
      };
    }
  }
  return { estaDentro: false };
}

/**
 * Calcula el aforo en tiempo real del campus
 */
function obtenerAforoCampus() {
  const ss = getSpreadsheet();
  const sheetReg = ss.getSheetByName(HOJA_REGISTROS);
  const sheetConf = ss.getSheetByName(HOJA_CONFIG);

  const data = sheetReg.getDataRange().getValues();
  let vehiculosDentro = 0;
  let estudiantes = 0;
  let docentes = 0;
  let administrativos = 0;
  let visitantes = 0;

  for (let i = 1; i < data.length; i++) {
    if ((data[i][16] || "").toString().trim() === "Dentro") {
      vehiculosDentro++;
      const tipo = (data[i][8] || "").toString().trim();
      if (tipo === "Estudiante") estudiantes++;
      else if (tipo === "Docente") docentes++;
      else if (tipo === "Administrativo") administrativos++;
      else if (tipo === "Visitante") visitantes++;
    }
  }

  // Obtener capacidad máxima de la configuración
  let capacidadMaxima = 450;
  const confData = sheetConf.getDataRange().getValues();
  for (let j = 1; j < confData.length; j++) {
    if (confData[j][0] === "Capacidad_Maxima_Aforo") {
      capacidadMaxima = parseInt(confData[j][1], 10) || 450;
      break;
    }
  }

  const porcentajeOcupacion = Math.round((vehiculosDentro / capacidadMaxima) * 100);

  return {
    success: true,
    vehiculosDentro: vehiculosDentro,
    capacidadMaxima: capacidadMaxima,
    porcentajeOcupacion: porcentajeOcupacion,
    lugaresDisponibles: Math.max(0, capacidadMaxima - vehiculosDentro),
    distribucion: {
      estudiantes: estudiantes,
      docentes: docentes,
      administrativos: administrativos,
      visitantes: visitantes
    },
    alertaSaturacion: porcentajeOcupacion >= 85
  };
}

/**
 * Obtiene la lista de vehículos actualmente dentro del campus
 */
function obtenerVehiculosDentro() {
  const ss = getSpreadsheet();
  const sheetReg = ss.getSheetByName(HOJA_REGISTROS);
  const data = sheetReg.getDataRange().getValues();
  const lista = [];

  for (let i = 1; i < data.length; i++) {
    if ((data[i][16] || "").toString().trim() === "Dentro") {
      lista.push({
        idRegistro: data[i][0],
        fecha: data[i][1],
        horaEntrada: data[i][2],
        casetaEntrada: data[i][4],
        placa: data[i][5],
        tipoVehiculo: data[i][6],
        marcaModelo: data[i][7],
        tipoUsuario: data[i][8],
        nombreConductor: data[i][9],
        motivoVisita: data[i][11]
      });
    }
  }

  return { success: true, total: lista.length, vehiculos: lista };
}

/**
 * Obtiene el catálogo de casetas
 */
function obtenerListadoCasetas() {
  const ss = getSpreadsheet();
  const sheetCas = ss.getSheetByName(HOJA_CASETAS);
  const data = sheetCas.getDataRange().getValues();
  const casetas = [];

  for (let i = 1; i < data.length; i++) {
    casetas.push({
      idCaseta: data[i][0],
      nombreCaseta: data[i][1],
      ubicacion: data[i][2],
      responsable: data[i][3],
      telefono: data[i][4],
      estatus: data[i][5]
    });
  }

  return { success: true, casetas: casetas };
}

/**
 * =========================================================================================
 * REPORTES, AUDITORÍA Y NOTIFICACIONES
 * =========================================================================================
 */

/**
 * Registra una acción en la Bitácora de Auditoría
 */
function registrarEnBitacora(accion, registroAfectado, caseta, detalle) {
  try {
    const ss = getSpreadsheet();
    const sheetBit = ss.getSheetByName(HOJA_BITACORA);
    const now = new Date();
    const idLog = "LOG-" + Utilities.formatDate(now, "GMT-6", "yyyyMMdd-HHmmssSSS");
    const timestampStr = Utilities.formatDate(now, "GMT-6", "yyyy-MM-dd HH:mm:ss");
    const userEmail = Session.getActiveUser().getEmail() || "sistema.automatizado@uat.edu.mx";

    sheetBit.appendRow([
      idLog,
      timestampStr,
      userEmail,
      accion,
      registroAfectado,
      caseta,
      detalle
    ]);
  } catch (e) {
    console.error("Error al registrar en bitácora: " + e.toString());
  }
}

/**
 * Genera un reporte estadístico en formato PDF y lo guarda en Google Drive
 */
function generarReportePDF(fechaInicio, fechaFin) {
  const ss = getSpreadsheet();
  const aforo = obtenerAforoCampus();
  const now = new Date();
  const fechaReporte = Utilities.formatDate(now, "GMT-6", "dd/MM/yyyy HH:mm");

  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 30px; color: #1e293b; }
          .header { border-bottom: 3px solid #0a2240; padding-bottom: 15px; margin-bottom: 25px; }
          .logo-title { font-size: 20px; font-weight: bold; color: #0a2240; }
          .subtitle { font-size: 13px; color: #64748b; margin-top: 5px; }
          .kpi-container { display: flex; justify-content: space-between; margin-bottom: 25px; }
          .kpi-card { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 15px; text-align: center; width: 30%; }
          .kpi-val { font-size: 26px; font-weight: bold; color: #0a2240; }
          .kpi-lbl { font-size: 11px; color: #64748b; text-transform: uppercase; margin-top: 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          th { background: #0a2240; color: white; padding: 10px; font-size: 12px; text-align: left; }
          td { border: 1px solid #e2e8f0; padding: 8px; font-size: 11px; }
          tr:nth-child(even) { background: #f8fafc; }
          .footer { margin-top: 40px; font-size: 10px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo-title">UNIVERSIDAD AUTÓNOMA DE TAMAULIPAS</div>
          <div class="subtitle">Campus CUTM Sur - Facultad de Ingeniería Tampico | Sistema de Control de Acceso Vehicular</div>
          <div class="subtitle">Reporte Ejecutivo de Aforo y Operación | Generado: ${fechaReporte}</div>
        </div>

        <div class="kpi-container">
          <div class="kpi-card">
            <div class="kpi-val">${aforo.vehiculosDentro}</div>
            <div class="kpi-lbl">Vehículos en Campus (Aforo Actual)</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-val">${aforo.lugaresDisponibles}</div>
            <div class="kpi-lbl">Lugares Disponibles</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-val">${aforo.porcentajeOcupacion}%</div>
            <div class="kpi-lbl">Índice de Saturación</div>
          </div>
        </div>

        <h3>Distribución de Vehículos por Tipo de Usuario</h3>
        <table>
          <thead>
            <tr>
              <th>Tipo de Usuario</th>
              <th>Vehículos Actuales</th>
              <th>Porcentaje del Aforo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Estudiantes</td><td>${aforo.distribucion.estudiantes}</td><td>${aforo.vehiculosDentro ? Math.round((aforo.distribucion.estudiantes/aforo.vehiculosDentro)*100) : 0}%</td></tr>
            <tr><td>Docentes</td><td>${aforo.distribucion.docentes}</td><td>${aforo.vehiculosDentro ? Math.round((aforo.distribucion.docentes/aforo.vehiculosDentro)*100) : 0}%</td></tr>
            <tr><td>Administrativos</td><td>${aforo.distribucion.administrativos}</td><td>${aforo.vehiculosDentro ? Math.round((aforo.distribucion.administrativos/aforo.vehiculosDentro)*100) : 0}%</td></tr>
            <tr><td>Visitantes Externos</td><td>${aforo.distribucion.visitantes}</td><td>${aforo.vehiculosDentro ? Math.round((aforo.distribucion.visitantes/aforo.vehiculosDentro)*100) : 0}%</td></tr>
          </tbody>
        </table>

        <div class="footer">
          Documento generado automáticamente por el Sistema de Control de Acceso Vehicular UAT CUTM Sur. Validez oficial conforme a las políticas de seguridad universitaria.
        </div>
      </body>
    </html>
  `;

  const blob = Utilities.newBlob(html, "text/html", "Reporte_Aforo_UAT.html");
  const pdfBlob = blob.getAs("application/pdf").setName(`Reporte_Acceso_Vehicular_UAT_${Utilities.formatDate(now, "GMT-6", "yyyyMMdd_HHmm")}.pdf`);
  const archivo = DriveApp.createFile(pdfBlob);

  return {
    success: true,
    fileUrl: archivo.getUrl(),
    fileName: archivo.getName()
  };
}

/**
 * Notificación automática por correo a anfitriones cuando ingresa un visitante
 */
function enviarNotificacionVisitante(emailAnfitrion, nombreVisitante, placa, motivo) {
  try {
    const asunto = `[UAT CUTM Sur] Notificación de Llegada de Visitante: ${nombreVisitante}`;
    const cuerpo = `
Estimado(a) integrante de la comunidad universitaria:

Le informamos que ha ingresado al campus CUTM Sur un visitante registrado a su atención:

- Visitante: ${nombreVisitante}
- Vehículo (Placa): ${placa}
- Motivo de Visita: ${motivo}
- Hora de Ingreso: ${Utilities.formatDate(new Date(), "GMT-6", "HH:mm:ss")}

Atentamente,
Coordinación de Seguridad y Acceso Vehicular
Facultad de Ingeniería Tampico - UAT CUTM Sur
    `;
    MailApp.sendEmail(emailAnfitrion, asunto, cuerpo);
  } catch (e) {
    console.error("Error al enviar email de visitante: " + e.toString());
  }
}

/**
 * Auxiliar para formato de minutos a horas y minutos
 */
function formatearMinutos(totalMinutos) {
  const horas = Math.floor(totalMinutos / 60);
  const minutos = totalMinutos % 60;
  if (horas === 0) return `${minutos} min`;
  return `${horas} h ${minutos} min`;
}
