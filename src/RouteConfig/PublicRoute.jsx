// src/PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ element, restricted }) => {
//   const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  const isLoggedIn = true;

  // If the user is logged in and the route is restricted (like /login), redirect them
  return isLoggedIn && restricted ? (
    <Navigate to="/" /> // Redirect to protected route if already logged in
  ) : (
    element // Otherwise, render the public component
  );
};

export default PublicRoute;