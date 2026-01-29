import axios from "axios";

const api = axios.create({
  baseURL: "https://hrms-backend-mxi8.onrender.com/api/",
});

export default api;
