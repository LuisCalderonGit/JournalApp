import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../Auth/LoginScreen";
import { RegisterScreen } from "../Auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </div>
    </div>
  );
};
