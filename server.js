import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// ROUTES
import dealsRoutes from "./routes/deals.js";
import blogsRoutes from "./routes/blogs.js";
import settingsRoutes from "./routes/settings.js";
import statsRoutes from "./routes/stats.js";
import seoRoutes from "./routes/seo.js";
import autopilotRoutes from "./routes/autopilot.js";
import adminRoutes from "./routes/admin.js";

app.use("/api/deals", dealsRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/autopilot", autopilotRoutes);
app.use("/api/admin", adminRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
