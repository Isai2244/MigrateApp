import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/admindashboard");
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Log In</button>
    </div>
  );
};

export default Login;
