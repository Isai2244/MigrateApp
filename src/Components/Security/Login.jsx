import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  const handleLoginClick = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character."
      );
      return;
    }

    // setError(""); // Clear any previous errors
    // // Add your authentication logic here
    // navigate("/admindashboard");
    const payload={
      userName:email,
      password:password
    }
    //console.log("output",payload)

  axios.post('http://localhost:5214/api/user/login',payload)
  .then((res)=>{
    localStorage.setItem("token",JSON.stringify(res.data.token));
    console.log("login successfull",res);
    navigate("/admindashboard");
  })
  .catch((err)=>{
    console.log("login failed",err)
  })
};

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
