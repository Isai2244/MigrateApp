import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate inside the component

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout successful");
    navigate("/"); // Redirect to the login page
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <h2>Migratemap Pro</h2>
        </div>
      </div>
      <div className="header-right">
        <button onClick={handleLogout}>Logout</button>
        <button className="profiledata">GetProfileData</button>
        <button className="example-button">EXAMPLE</button>
      </div>
    </header>
  );
};

export default Header;
