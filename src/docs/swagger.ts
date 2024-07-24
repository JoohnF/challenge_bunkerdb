import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    "openapi": "3.0.3",
    "info": {
        "title": "MarTech Documentation",
        "version": "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        schemas: {
            "campaign": {
                "required": [
                    "name",
                    "description",
                    "startDate",
                    "endDate",
                    "budget",
                    "costPerUser"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "example": "Campaign #1"
                    },
                    "description": {
                        "type": "string",
                        "example": "Description of campaign #1"
                    },
                    "startDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "endDate": {
                        "type": "string",
                        "format": "date-time"
                    },
                    "budget": {
                        "type": "number",
                        "format": "double"
                    },
                    "costPerUser": {
                        "type": "number",
                        "format": "double",
                        "description": "Budget cost per user"
                    }
                }
            },
            "interaction": {
                "required": [
                    "campaignId",
                    "userId",
                    "interactionType"
                ],
                "type": "object",
                "properties": {
                    "campaignId": {
                        "type": "string",
                        "example": "669ef25c446wsxeac017d54f"
                    },
                    "userId": {
                        "type": "string",
                        "example": "669ef25c336aeaeac017d54f"
                    },
                    "interactionType": {
                        "type": "string",
                        "example": "record"
                    }
                }
            }
        }
    }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
