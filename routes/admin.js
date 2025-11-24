const express = require("express");
const router = express.Router();

router.post("/verify", (req, res) => {
  const { user, pass } = req.body;

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    return res.json({ success: true, token: process.env.ADMIN_LOGIN_TOKEN });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});

module.exports = router;
