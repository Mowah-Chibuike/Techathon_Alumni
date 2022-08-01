import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const userData = sessionStorage.getItem("user");

  return userData !== null ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
