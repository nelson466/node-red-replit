// settings.js - configuración para Node-RED (lista para copiar/pegar)
module.exports = {
  // Forzar que Node-RED use 'flows.json' en el userDir
  flowFile: "flows.json",
  // Secret para el cifrado interno de credenciales de Node-RED, aqui no se aplica Hash a "miClaveSecreta123"
  // El valor de credentialSecret solo debe ser una cadena de texto segura
  credentialSecret: "miClaveSecreta123",
  // Configuración del acceso al editor/administración:
  // Nota: Node-RED busca la propiedad `adminAuth` (no "authAdmin").
  adminAuth: {
    type: "credentials",
    users: [
      {
        username: "admin",
        // Hash bcrypt de la contraseña "Nrvana654321"
        // Generado con bcrypt (cost 10) online desde https://bcrypt-generator.com
        password: "$2a$10$N32Qx5P10Np90VFpquUlhOjBPTGNsC2UWRpmM06KXNybeqD38W01C",
        permissions: "*"
      }
    ]
  }
  // (opcional) otras configuraciones mínimas que podrías tener:
  // uiPort: process.env.PORT || 1880,
  // adminUI: { /* ... */ }
};
