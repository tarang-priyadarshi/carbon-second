import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" }
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Auth APIs
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const forgotPassword = (data) => API.post("/auth/forgot-password", data);
export const resetPassword = (data) => API.post("/auth/reset-password", data);

// Carbon APIs
export const saveCarbonEntries = (entries) => API.post("/carbon", entries);
export const getCarbonEntries = () => API.get("/carbon");

// Goal APIs
export const createGoal = (data) => API.post("/goals", data);
export const getUserGoals = (userId) => API.get(`/goals/user/${userId}`);
export const toggleGoal = (goalId) => API.delete(`/goals/${goalId}_toggle`);



export const getTips = async () => {
  const token = localStorage.getItem("token");
  const res = await API.get("/tips", { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const addTip = async (tipData) => {
  const token = localStorage.getItem("token");
  const res = await API.post("/tips", tipData, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const likeTip = async (tipId) => {
  const token = localStorage.getItem("token");
  const res = await API.post(`/tips/${tipId}/like`, {}, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const searchTips = async (query) => {
  const token = localStorage.getItem("token");
  const res = await API.get(`/tips/search?q=${query}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const getNotifications = () => API.get("/notifications");
export const saveNotificationSettings = (settings) => API.post("/notifications/settings", { settings });


// Default export for backward compatibility
export default {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  saveCarbonEntries,
  getCarbonEntries
};


