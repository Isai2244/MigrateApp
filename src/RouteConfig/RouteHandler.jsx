import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // Ensure this file exists
import PrivateLayout from "./PrivateLayout";
import Login from "../Components/Security/Login";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";
import Upload from "../Components/UploadData/Upload";
import ViewTable from "../Components/ViewData/ViewTable";
import Chat from "../Components/Help/Chat";

const Routing = () => {
  const [isUserAllowed, setIsUserAllowed] = useState(false);
  // const isUserAllowed = localStorage.getItem("token") !== null;
  console.log(isUserAllowed);


  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Private Routes */}
        <Route
          path="/admindashboard"
          element={
              <AdminDashboard />
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute condition={isUserAllowed} redirectTo="/">
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/datatable"
          element={
            <ProtectedRoute condition={isUserAllowed} redirectTo="/">
              <ViewTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute condition={isUserAllowed} redirectTo="/">
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
