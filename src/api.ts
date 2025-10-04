// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_DOMIN_API}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
