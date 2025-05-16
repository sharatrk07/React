// src/main.tsx
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/Router/Routers";
import Home from "./components/Router/Pages/Home";
import About from "./components/Router/Pages/About";
import Contact from "./components/Router/Pages/Contact";
import User from "./components/Router/Pages/User";
import Github from "./components/Router/Pages/Github";
import { GitInfoLoader } from "./components/Router/Pages/GitInfoLoader";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "github",
        element: <Github />,
        loader: GitInfoLoader,
      },
      { path: ":userid", element: <User /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);