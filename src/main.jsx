import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import ThemeProvider from "./Contexts/ThemeProvider.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Contexts/AuthProvider.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
