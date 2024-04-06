import axios from "axios";
import { useAuthStore } from "@renderer/zustand/authStore";
// import { useNavigate } from "react-router-dom";

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

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // const navigate = useNavigate();
      useAuthStore.getState().logout();
      // navigate("/login");
    }
    return Promise.reject(error);
  },
);
export { API };
