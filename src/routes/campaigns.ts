import { Router } from "express";
import { createCampaign, deleteCampaign, getAllCampaigns, getCampaign, updateCampaign } from "../controllers/campaigns";

const router = Router();

router.get("/", getAllCampaigns);
router.get("/:id", getCampaign);
router.post("/", createCampaign);
router.put("/:id", updateCampaign);
router.delete("/:id", deleteCampaign);

export { router };
