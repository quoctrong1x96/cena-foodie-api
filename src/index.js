import httpServer from './app.js';


httpServer.listen( process.env.APP_PORT, () => console.log('Server on port ' + process.env.APP_PORT));