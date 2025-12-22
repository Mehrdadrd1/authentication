import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Dashboard } from "../pages";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
