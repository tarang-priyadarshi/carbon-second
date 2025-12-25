import React, { useState } from "react";

const GoalForm = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    targetValue: "",
    unit: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ title: "", targetValue: "", unit: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="goal-form">
      <div className="mb-3">
        <label>Goal Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} className="form-control" required/>
      </div>
      <div className="mb-3">
        <label>Target Value</label>
        <input type="number" name="targetValue" value={form.targetValue} onChange={handleChange} className="form-control" required/>
      </div>
      <div className="mb-3">
        <label>Unit (kg, km, etc.)</label>
        <input type="text" name="unit" value={form.unit} onChange={handleChange} className="form-control" required/>
      </div>
      <div className="mb-3">
        <label>Deadline</label>
        <input type="date" name="deadline" value={form.deadline} onChange={handleChange} className="form-control" required/>
      </div>
      <button type="submit" className="btn btn-success">Add Goal</button>
    </form>
  );
};

export default GoalForm;
