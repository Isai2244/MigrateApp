import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (username && password) {
      // Add your authentication logic here
      navigate("/admindashboard");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "200px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "200px" }}
      />
      <button onClick={handleLoginClick} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Log In
      </button>
    </div>
  );
};

export default Login;

