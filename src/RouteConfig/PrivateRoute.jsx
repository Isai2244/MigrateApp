// src/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux

const PrivateRoute = () => {
//   const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  const isLoggedIn = true;
  console.log(isLoggedIn);
  // If the user is logged in, allow access to child routes
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;