import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/Routers/AppRouter";

export const JournalApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
