import { Router } from "express";
import { createInteraction } from "../controllers/interactions";

const router = Router();

/**
 * Save interaction.
 * @openapi
 * /interactions:
 *  post:
 *      tags:
 *          - interactions
 *      summary: "Save interaction."
 *      description: "Save new user interaction."
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/interaction"
 *          required: true
 *      responses:
 *          "201":
 *              description: "Interaction saved successfully."
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/interaction'
 *          "500":
 *              description: Internal server error.
 */
router.post("/", createInteraction);

export { router };
