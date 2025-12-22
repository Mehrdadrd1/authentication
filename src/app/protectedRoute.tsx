import type { JSX } from "react";
import { Navigate } from "react-router-dom";

import { AUTH_TOKEN_KEY } from "../constants";

type ProtectedRouteProps = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = Boolean(localStorage.getItem(AUTH_TOKEN_KEY));

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
