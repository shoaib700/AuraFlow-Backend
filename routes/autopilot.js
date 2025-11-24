const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "task is required" });
  }

  res.json({
    status: "success",
    message: `Autopilot executed: ${task}`,
    timestamp: new Date()
  });
});

module.exports = router;
