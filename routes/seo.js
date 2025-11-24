const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { keyword, limit } = req.body;

        if (!keyword) {
            return res.status(400).json({ error: "Keyword is required" });
        }

        const items = Array.from({ length: limit || 5 }).map((_, i) => ({
            title: `${keyword} - SEO Result ${i + 1}`,
            slug: `${keyword.replace(/ /g, "-")}-${i + 1}`,
            description: `Generated SEO description for ${keyword}`,
        }));

        res.json(items);
    } catch (e) {
        res.status(500).json({ error: "SEO generation error" });
    }
});

module.exports = router;
