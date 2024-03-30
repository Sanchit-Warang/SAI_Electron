import axios from "axios";
import { useAuthStore } from "@renderer/zustand/authStore";

const API = axios.create({
  baseURL: "http://localhost:4000/",
  // baseURL: "https://sai-hosting.onrender.com",
});

API.interceptors.request.use(function (config) {
  const token = useAuthStore.getState().user?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export { API };
