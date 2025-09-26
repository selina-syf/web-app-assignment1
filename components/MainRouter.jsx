import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "../src/about";
import Contact from "../src/contact";
import Education from "../src/education";
import Projects from "../src/projects";
import Layout from "./Layout";
import Services from "../src/services";

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
