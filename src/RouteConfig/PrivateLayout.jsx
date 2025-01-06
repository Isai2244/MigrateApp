import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/Header";
import SideNav from "../Components/Layout/SideNav";

const PrivateLayout = () => {
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

export default PrivateLayout;
