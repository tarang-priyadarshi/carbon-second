// server/controllers/notificationController.js
const { NotificationSettings } = require("../models/Notification");

// Get settings
exports.getSettings = async (req, res) => {
  try {
    const userId = req.user.id;
    let settings = await NotificationSettings.findOne({ userId });
    if (!settings) {
      // Default settings
      settings = await NotificationSettings.create({ userId });
    }
    res.json({ settings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get settings" });
  }
};

// Save/update settings
exports.saveSettings = async (req, res) => {
  try {
    const userId = req.user.id;
    const { settings } = req.body;

    const updated = await NotificationSettings.findOneAndUpdate(
      { userId },
      { ...settings },
      { new: true, upsert: true }
    );

    res.json({ settings: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save settings" });
  }
};
