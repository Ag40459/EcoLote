import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001/api";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("adminAuthToken"); 
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;

export { API_BASE_URL };