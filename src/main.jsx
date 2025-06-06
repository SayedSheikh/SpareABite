import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import ThemeProvider from "./Contexts/ThemeProvider.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Contexts/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
