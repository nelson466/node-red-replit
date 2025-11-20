// settings.js - configuración para Node-RED (lista para copiar/pegar)
module.exports = {
  // Forzar que Node-RED use 'flows.json' en el userDir
  flowFile: "flows.json",
  // Secret para el cifrado interno de credenciales de Node-RED, aqui no se aplica Hash a "miClaveSecreta123"
  // El valor de credentialSecret solo debe ser una cadena de texto segura
  credentialSecret: "miClaveSecreta123"
};
