import { createBrowserRouter, Navigate } from "react-router-dom";

import { Login, Register, Dashboard } from "../pages";

import { ProtectedRoute } from "./protectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("token") ? (
      <Navigate to="/dashboard" replace />
    ) : (
      <Navigate to="/login" replace />
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);
