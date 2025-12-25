import React from "react";
import GoalProgress from "./GoalProgress";

const GoalCard = ({ goal, onToggle }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{goal.title}</h5>
        <p className="card-text">
          Target: {goal.targetValue} {goal.unit} | Status: {goal.status}
        </p>
        <GoalProgress current={goal.currentValue} target={goal.targetValue} />
        <button className="btn btn-outline-primary mt-2" onClick={() => onToggle(goal._id)}>
          Toggle Status
        </button>
      </div>
    </div>
  );
};

export default GoalCard;
