import { Router } from "express";
import { createInteraction } from "../controllers/interactions";

const router = Router();
;
router.post("/", createInteraction);

export { router };
