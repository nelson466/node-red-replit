// .node-red/settings.js (Pega/reescribe con esto)
console.log(">>> (DEBUG) settings.js cargado desde:", __filename);
console.log(">>> (DEBUG) cwd:", process.cwd());

const portFromEnv = process.env.PORT;
const port = (typeof portFromEnv !== 'undefined' && portFromEnv !== '') ? parseInt(portFromEnv, 10) : 3000;
console.log(">>> (DEBUG) process.env.PORT =", process.env.PORT);
console.log(">>> (DEBUG) Parsed PORT =", port);

module.exports = {
  // Forzar puerto y host (importante en Replit)
  uiPort: port,
  uiHost: "0.0.0.0",

  // Nombre del archivo flows
  flowFile: "flows.json",

  // Tu credentialSecret y adminAuth (mantén tu hash)
  credentialSecret: "miClaveSecreta123",
  
  // Logging para depuración (opcional)
  logging: { console: { level: "debug" } },

  /**************
   * MIDDLEWARE
   * Intercepta peticiones entrantes al admin UI que contengan "%23"
   * (la codificación URL de '#' que a veces envía el proxy de Replit)
   * y redirige al path decodificado con '#'.
   **************/
  httpAdminMiddleware: function(req, res, next) {
    try {
      // Si la URL contiene %23 (hash codificado) -> redirigir a la versión decodificada
      if (req.url && req.url.indexOf('%23') !== -1) {
        const decoded = decodeURIComponent(req.url); // convierte %23 -> #
        // Construir la Location absoluta relativa al host actual
        // (es seguro usar redirección 301 a la URL decodificada)
        res.writeHead(301, { Location: decoded });
        return res.end();
      }
    } catch (err) {
      // si decode falla, simplemente continuar
      console.warn(">>> (DEBUG) httpAdminMiddleware decode error:", err);
    }
    return next();
  }
};

// Debug final
if (module.exports && module.exports.adminAuth) {
  console.log(">>> (DEBUG) adminAuth encontrado. Usuarios:", module.exports.adminAuth.users.map(u=>u.username));
} else {
  console.log(">>> (DEBUG) adminAuth NO encontrado en settings.js");
}
