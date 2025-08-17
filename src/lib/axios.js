import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // ganti sesuai API kamu
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Tambahin interceptor kalau perlu (misal untuk token auth)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // atau sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
