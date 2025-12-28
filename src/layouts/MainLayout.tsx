import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div>
      <main id="main-content">
        <h1>I'm kunaal mangal</h1>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
