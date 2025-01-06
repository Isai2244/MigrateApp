import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PrivateLayout from "./PrivateLayout";
import Login from "../Components/Security/Login";
import AdminDashboard from "../Components/Dashboard/AdminDashboard";
import Upload from "../Components/UploadData/Upload";
import ViewTable from "../Components/ViewData/ViewTable";
import Chat from "../Components/Help/Chat";

const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />
        
        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<PrivateLayout />}>
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/datatable" element={<ViewTable />} />
            <Route path="/help" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
