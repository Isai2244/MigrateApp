import React, { useEffect } from "react";
import Header from "../Layout/Header";
import SideNav from "../Layout/SideNav";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/"); // Redirect to the login page if the token is not present
    }
  }, [navigate]); // Add navigate as a dependency

  return (
    <div className="app-layout">
      {/* Header Section */}
      <Header />

      <div className="main-body">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <SideNav />
        </aside>

        {/* Content Section */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
