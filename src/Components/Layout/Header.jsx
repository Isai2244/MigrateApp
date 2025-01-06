import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <h2>Migratemap Pro</h2>
        </div>
      </div>
      <div className="header-right">
        <button className="user-button">User1</button>
        <button className="example-button">EXAMPLE</button>
      </div>
    </header>
  );
};

export default Header;
