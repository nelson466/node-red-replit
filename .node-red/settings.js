// settings.js - configuración para Node-RED (lista para copiar/pegar)
// .node-red/settings.js (fragmento principal)
const portFromEnv = process.env.PORT;
const port = (typeof portFromEnv !== 'undefined' && portFromEnv !== '') ? parseInt(portFromEnv, 10) : 3000;

console.log(">>> (DEBUG) process.env.PORT =", process.env.PORT);
console.log(">>> (DEBUG) Parsed PORT =", port);

module.exports = {
  // Forzar puerto y host (importante para Replit)
  uiPort: port,
  uiHost: "0.0.0.0",
  // Forzar que Node-RED use 'flows.json' en el userDir
  flowFile: "flows.json",
  // Secret para el cifrado interno de credenciales de Node-RED, aqui no se aplica Hash a "miClaveSecreta123"
  // El valor de credentialSecret solo debe ser una cadena de texto segura
  credentialSecret: "miClaveSecreta123"
};
