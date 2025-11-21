// .node-red/settings.js (fragmento principal)
const portFromEnv = process.env.PORT;
const port = (typeof portFromEnv !== 'undefined' && portFromEnv !== '') ? parseInt(portFromEnv, 10) : 3000;

console.log(">>> (DEBUG) process.env.PORT =", process.env.PORT);
console.log(">>> (DEBUG) Parsed PORT =", port);

module.exports = {
  // Forzar puerto y host (importante para Replit)
  uiPort: port,
  uiHost: "0.0.0.0",

  // Forzar nombre de archivo de flows
  flowFile: "flows.json",

  credentialSecret: "miClaveSecreta123",

  logging: { console: { level: "debug" } }
};

// debug detection
if (module.exports && module.exports.adminAuth) {
  console.log(">>> (DEBUG) adminAuth encontrado. Usuarios:", module.exports.adminAuth.users.map(u => u.username));
} else {
  console.log(">>> (DEBUG) adminAuth NO encontrado en settings.js");
}
