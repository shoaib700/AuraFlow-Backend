import express from "express";
import { getBlogs } from "../controllers/blogsController.js";
const router = express.Router();
router.get("/", getBlogs);
export default router;
