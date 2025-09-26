import React from "react";
import { Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <h1 style={{ display: "flex"}}>
        <img src="/syf.jpg" alt="logo" width="50px" style={{marginRight: "10px" }}/>
        <span>Selina's Portfolio</span>
      </h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/services">Services</Link>
      </nav>
      <hr />
    </div>
  );
}
