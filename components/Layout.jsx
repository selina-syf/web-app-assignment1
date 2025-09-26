import React from "react";
import { Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/education">Education</Link>|{" "}
        <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>|{" "}
        <Link to="/counter">Counter</Link>| <Link to="/star">Star</Link>|{" "}
        <Link to="/input">Input</Link>| <Link to="/option">Option</Link>| <Link to="/checkbox">Checkbox</Link>|
        <Link to="/multiple">Multiple</Link>| <Link to="/fruit">Fruit</Link>| <Link to="/uncontrolled">Uncontrolled</Link>|
        <Link to="/example">Example</Link>| <Link to="/register">Register</Link>

      </nav>
      <hr />
    </div>
  );
}
