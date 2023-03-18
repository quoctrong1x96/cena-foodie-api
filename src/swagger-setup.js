import swaggerJsDoc from 'swagger-jsdoc';

import swaggerUi from 'swagger-ui-express';
import docs from './docs/index.js';

const swaggerDocs = swaggerJsDoc(docs);

/**
 * Configure o Swagger UI para a application express js.
 * @param {express} app Application express
 */
const setupSwagger = app => app.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

export default setupSwagger;