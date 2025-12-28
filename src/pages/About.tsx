import React from "react";
import { Link } from "react-router";

const About: React.FC = () => {
  return (
    <div>
      <p>About</p>
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default About;
