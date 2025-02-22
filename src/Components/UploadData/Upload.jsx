import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate(); // Initialize useNavigate

      useEffect(() => {
        if (localStorage.getItem("token") === null) {
          navigate("/"); // Redirect to the login page if the token is not present
        }
      }, [navigate]); // Add navigate as a dependency
    

  return (
    <div>
      <h3>Upload</h3>
    </div>
  );
};

export default Upload;
