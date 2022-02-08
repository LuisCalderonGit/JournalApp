import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { JournalScreen } from "../components/Journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<JournalScreen />} />
        <Route path="*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
};
