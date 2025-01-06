import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiSolidFileImport } from "react-icons/bi";
import { FaTable, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const SideNav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { path: "/admindashboard", icon: <MdDashboard />, label: "Dashboard" },
    { path: "/upload", icon: <BiSolidFileImport />, label: "Upload" },
    { path: "/datatable", icon: <FaTable />, label: "Table" },
    { path: "/help", icon: <FaQuestionCircle />, label: "Help" },
  ];

  const accountItems = [
    { path: "/profile", icon: <FaUserCircle />, label: "Profile" },
    { path: "/logout", icon: <FiLogOut />, label: "Logout" },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="side-nav">
      <ul>
        {/* Main Navigation Items */}
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="nav-link">
              {item.icon}
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
</ul>
    </nav>
  );
};

export default SideNav;
