import "./index.css";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./providers";
import DonorListScreen from "./screens/DonorListScreen";
import LoginScreen from "./screens/LoginScreen";
import DonorScreen from "./screens/DonorScreen";
import DonationScreen from "./screens/DonationScreen";
import DonationListScreen from "./screens/DonationListScreen";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginScreen />} />
      <Route path="/donors" element={<DonorListScreen />} />
      <Route path="/donors/:donorId" element={<DonorScreen />} />
      <Route path="/donations" element={<DonationListScreen />} />
      <Route path="/donations/:donationId" element={<DonationScreen />} />
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
