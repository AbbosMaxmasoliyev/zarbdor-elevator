// api/axiosConfig.js
import axios from "axios";
import config from "./constanta"
const API = axios.create({
    baseURL: config.baseURL+"api", // O'zingizning API bazangizni yozing
    timeout: 10000, // 10 soniya kutadi
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer YOUR_TOKEN`, // kerak bo‘lsa token qo‘shiladi
    },
});

export default API;
