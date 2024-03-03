import "./index.css";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./providers";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginScreen />} />
      <Route path="/users" element={<HomeScreen />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>,
);
