import express from "express";
import { generateSEO } from "../controllers/seoController.js";
const router = express.Router();
router.post("/", generateSEO);
export default router;
