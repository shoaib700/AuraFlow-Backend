const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");

// ROUTES
const dealsRoutes = require("./routes/deals.js");
const blogsRoutes = require("./routes/blogs.js");
const settingsRoutes = require("./routes/settings.js");
const statsRoutes = require("./routes/stats.js");
const seoRoutes = require("./routes/seo.js");
const autopilotRoutes = require("./routes/autopilot.js");
const adminRoutes = require("./routes/admin.js");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// ROUTES
app.use("/api/deals", dealsRoutes);
app.use("/api/blogs", blogsRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/autopilot", autopilotRoutes);
app.use("/api/admin", adminRoutes);

// Default home
app.get("/", (req, res) => {
    res.send("AuraFlow Backend Running ✓");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
