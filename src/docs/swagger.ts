import fs from 'fs';
import path from 'path';
import swaggerJSDoc, { OAS3Options } from "swagger-jsdoc";

const swaggerDefinition = JSON.parse(fs.readFileSync(path.join(__dirname, './swagger.json'), 'utf8'));

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
