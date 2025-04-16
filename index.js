const http = require("http");
const RED = require("node-red");
const express = require("express");

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: '/',
  httpNodeRoot: '/',
  userDir: './',
  flowFile: 'flows.json',
  credentialSecret: 'replit-secreto', // Cambia esto
  adminAuth: null, 
  uiPort: process.env.PORT || 8080, // Usa el puerto de Replit
  functionGlobalContext: {} 
};

// Inicializa Node-RED con el servidor Express
RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

// Inicia el servidor
server.listen(settings.uiPort, () => {
  console.log(`Node-RED corriendo en http://localhost:${settings.uiPort}`);
});

RED.start();
