import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Homescreen from "./containers/Homescreen";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homescreen />} /> 
      <Route path="/about" exact element={<About />} /> 
    </Routes>
  );
};

export default RouteBuilder;
