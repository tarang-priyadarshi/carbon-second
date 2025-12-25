// server/routes/notificationRoutes.js
const express = require("express");
const router = express.Router();
const {
  getSettings,
  saveSettings,
} = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, getSettings);
router.post("/settings", authMiddleware, saveSettings);

module.exports = router;
