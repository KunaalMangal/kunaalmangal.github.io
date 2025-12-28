import React from "react";
import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <p>Home</p>
      <br />
      <Link to="/about">Want to about me</Link>
    </div>
  );
};

export default Home;
