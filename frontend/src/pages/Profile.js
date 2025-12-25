// src/pages/Profile.jsx
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api"; // Your centralized Axios instance
//import "./Profile.css"; // Optional styling

const Profile = () => {
  const { user, token } = useContext(AuthContext); // Get logged-in user info
  const [notificationSettings, setNotificationSettings] = useState({
    goalReminders: false,
    achievementAlerts: false,
    businessAlerts: false,
  });
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!user) return;
    fetchSettings();
  }, [user]);

  const fetchSettings = async () => {
    try {
      const res = await api.get("/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data && res.data.settings) {
        setNotificationSettings(res.data.settings);
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch notification settings", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/notifications/settings",
        { settings: notificationSettings },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessage("Notification settings updated successfully!");
    } catch (error) {
      console.error("Failed to update notification settings", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container profile-page py-5">
      <h2 className="mb-4">Your Profile</h2>

      <div className="card p-4 mb-5">
        <h4>User Info</h4>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <div className="card p-4">
        <h4>Notification Settings</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="goalReminders"
              name="goalReminders"
              checked={notificationSettings.goalReminders}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="goalReminders">
              Goal Reminders
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="achievementAlerts"
              name="achievementAlerts"
              checked={notificationSettings.achievementAlerts}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="achievementAlerts">
              Achievement Alerts
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="businessAlerts"
              name="businessAlerts"
              checked={notificationSettings.businessAlerts}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="businessAlerts">
              Business Alerts
            </label>
          </div>

          <button type="submit" className="btn btn-success">
            Save Settings
          </button>
          {successMessage && (
            <p className="text-success mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
