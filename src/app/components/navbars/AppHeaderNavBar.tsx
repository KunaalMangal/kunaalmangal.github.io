import React from "react";
import { NavLink } from "react-router-dom";

import "../../App.css"


export const AppHeaderNavBar = () => {
  return (
    <nav className="App-Header-Navigation">
      <ul>
        <li>
          <NavLink to="/" className="App-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="App-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="App-link">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="App-link">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/blogs" className="App-link">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="App-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
