import React from "react";
import App from "../App";
import { Outlet } from "react-router-dom";
import { AppFooter, AppHeader } from "../components";

export const AppContent = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
