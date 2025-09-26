import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "../src/about";
import Contact from "../src/contact";
import Education from "../src/education";
import Project from "../src/project";
import Layout from "./Layout";
import Counter from '../src/counter';
import Star from '../src/star';
import Input from '../src/input';
import Option from '../src/option';
import Checkbox from '../src/checkBox';
import Multiple from "../src/multiple"; 
import Fruit from '../src/fruit';
import Uncontrolled from '../src/uncontrolled';
import Example from '../src/example';
import Register from '../src/register';

const MainRouter = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/star" element={<Star />} />
        <Route exact path="/input" element={<Input />} />
        <Route exact path="/option" element={<Option />} />
        <Route exact path="/checkbox" element={<Checkbox />} />
        <Route exact path="/multiple" element={<Multiple />} />
        <Route exact path="/fruit" element={<Fruit />} />
        <Route exact path="/uncontrolled" element={<Uncontrolled />} />
        <Route exact path="/example" element={<Example />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};
export default MainRouter;
