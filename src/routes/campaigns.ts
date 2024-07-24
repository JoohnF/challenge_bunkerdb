import { Router } from "express";
import { createCampaign, deleteCampaign, getAllCampaigns, getCampaign, updateCampaign } from "../controllers/campaigns";

const router = Router();

/**
 * Get all campaigns.
 * @openapi
 * /campaigns:
 *  get:
 *      tags:
 *          - campaigns
 *      summary: "Get all campaigns"
 *      description: "Get all campaigns."
 *      responses:
 *          "200":
 *              description: "Get all campaigns."
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/campaign'
 *          "500":
 *              description: "Internal server error."
 */
router.get("/", getAllCampaigns);
/**
 * Get campaign by ID.
 * @openapi
 * /campaigns/{id}:
 *  get:
 *      tags:
 *          - campaigns
 *      summary: "Get campaigns by ID"
 *      description: "Get campaign by ID."
 *      parameters:
 *          - name: id
 *            in: path
 *            description: "Campaign ID to find."
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          "200":
 *              description: "Campaign data."
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/campaign'
 *          "404":
 *              description: "Campaign not found."
 *          "500":
 *              description: "Internal server error."
 */
router.get("/:id", getCampaign);
/**
 * Create campaign.
 * @openapi
 * /campaigns:
 *  post:
 *      tags:
 *          - campaigns
 *      summary: "Create new campaign."
 *      description: "Create new campaign."
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/campaign"
 *          required: true
 *      responses:
 *          "201":
 *              description: "Campaign saved successfully."
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/campaign'
 *          "500":
 *              description: Internal server error.
 */
router.post("/", createCampaign);
/**
 * Update campaign.
 * @openapi
 * /campaigns/{id}:
 *  put:
 *      tags:
 *          - campaigns
 *      summary: "Update campaign"
 *      description: "Update campaign by ID."
 *      parameters:
 *          - name: id
 *            in: path
 *            description: "Campaign ID to update."
 *            required: true
 *            schema:
 *                type: string
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/campaign"
 *      responses:
 *          "200":
 *              description: "Campaign updated successfully"
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/campaign'
 *          "404":
 *              description: "Campaign not found."
 *          "500":
 *              description: "Internal server error."
 */
router.put("/:id", updateCampaign);
/**
 * Delete campaign.
 * @openapi
 * /campaigns/{id}:
 *  delete:
 *      tags:
 *          - campaigns
 *      summary: "Delete campaign"
 *      description: "Delete campaign by ID."
 *      parameters:
 *          - name: id
 *            in: path
 *            description: "Campaign ID to delete."
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          "200":
 *              description: "Campaign deleted successfully."
 *          "404":
 *              description: "Campaign not found."
 *          "500":
 *              description: "Internal server error."
 */
router.delete("/:id", deleteCampaign);

export { router };
