import express from "express";
import { autopilot } from "../controllers/autopilotController.js";
const router = express.Router();
router.post("/", autopilot);
export default router;
