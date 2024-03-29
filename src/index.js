import httpServer from './app.js';


httpServer.listen( process.env.APP_PORT, 
    () => console.log('Server on port ' + process.env.APP_PORT, 
    "\nPlease check docs at: http://" + process.env.DB_HOSTNAME + ":"+ process.env.APP_PORT +"/api-docs/v1",
    "\nAnd API at: http://" + process.env.DB_HOSTNAME + ":"+ process.env.APP_PORT +"/api/v1"));