const express = require("express");
const router = express.Router();
const Goal = require("../models/Goal");
const authMiddleware = require("../middlewares/authMiddleware");

// Create a goal
router.post("/", authMiddleware, async (req, res) => {
  try {
    const goal = new Goal({ userId: req.user.id, ...req.body });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create goal" });
  }
});

// Get all goals for logged-in user
router.get("/user/:id", authMiddleware, async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.id }).sort({ createdAt: -1 });
    res.json(goals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch goals" });
  }
});

// Toggle goal completion or delete
router.delete("/:goalId_toggle", authMiddleware, async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.goalId_toggle);
    if (!goal) return res.status(404).json({ message: "Goal not found" });

    // Toggle status
    goal.status = goal.status === "pending" ? "completed" : "pending";
    await goal.save();

    res.json(goal);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update goal" });
  }
});

module.exports = router;
