import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//*Swagger config
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Cena Foodie API with Swagger",
            version: "1.0.1",
            description:
                "This is Cena Foodie API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Cena Foodie System",
                url: "https://cena-foodie.com.vn",
                email: "cena-foodie-info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:7070/api/v1",
            },
        ],
    },
    apis: ["src/router/v1/*.routes.js"],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

/**
 * Configure o Swagger UI para a application express js.
 * @param {express} app Application express
 */
const setupSwagger = app => app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { explorer: true }));

export default setupSwagger;