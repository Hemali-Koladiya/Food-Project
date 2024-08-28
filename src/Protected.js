import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Cmp }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authToken");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Cmp /> : null; 
};

export default Protected;
