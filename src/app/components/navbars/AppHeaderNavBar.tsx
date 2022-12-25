import React from "react";
import { NavLink } from "react-router-dom";

export const AppHeaderNavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
