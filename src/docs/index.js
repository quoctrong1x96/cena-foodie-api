import info from './info.js';
import  servers from './servers.js';
import  tags from './tags.js';
import  components from './component.js';
import apis from './apis.js';
import path from './paths/index.js';

export default {
    swaggerDefinition:{
        openapi: '3.0.1',
        info: info,
        servers: servers,
        components,
        paths: path
    },    
    apis
}