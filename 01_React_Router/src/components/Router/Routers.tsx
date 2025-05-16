// src/components/Router/Routers.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import App from "../../App";

const RootLayout: React.FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    <App />
  </>
);

export default RootLayout;