// settings.js - configuración para Node-RED (lista para copiar/pegar)
module.exports = {
  // Forzar a Node-RED a usar el puerto que provee Replit y a escuchar en todas las interfaces
  uiPort: process.env.PORT || 3000,
  uiHost: "0.0.0.0",
  // Forzar que Node-RED use 'flows.json' en el userDir
  flowFile: "flows.json",
  // Secret para el cifrado interno de credenciales de Node-RED, aqui no se aplica Hash a "miClaveSecreta123"
  // El valor de credentialSecret solo debe ser una cadena de texto segura
  credentialSecret: "miClaveSecreta123"
};
