import React from "react";
import { Outlet } from "react-router-dom";
import { AppFooter, AppHeader } from "../components";
import "../App.css";

export const AppContent = () => {
  return (
    <>
        <AppHeader />
        <div className="App-Content">
          <Outlet />
        </div>
        <AppFooter />
    </>
  );
};
