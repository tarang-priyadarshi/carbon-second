import React, { useState, useEffect, useContext } from "react";
import GoalForm from "../components/goals/GoalForm";
import GoalCard from "../components/goals/GoalCard";
import { createGoal, getUserGoals, toggleGoal } from "../services/api";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Goals = () => {
  const { user } = useContext(AuthContext);
  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {
    try {
      const res = await getUserGoals(user._id);
      setGoals(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleSave = async (goalData) => {
    try {
      await createGoal(goalData);
      toast.success("Goal added successfully!");
      fetchGoals();
    } catch (err) {
      toast.error("Failed to add goal");
    }
  };

  const handleToggle = async (goalId) => {
    try {
      await toggleGoal(goalId);
      fetchGoals();
    } catch (err) {
      toast.error("Failed to update goal");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Sustainability Goals</h2>
      <GoalForm onSave={handleSave} />
      <div className="mt-4">
        {goals.map((goal) => (
          <GoalCard key={goal._id} goal={goal} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
};

export default Goals;
