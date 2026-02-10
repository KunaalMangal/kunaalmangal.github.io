import React from "react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div>
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
