import express from "express";
import { adminVerify } from "../controllers/adminController.js";

const router = express.Router();

router.post("/verify", adminVerify);

export default router;
