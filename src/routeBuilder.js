import React from "react";
import { Routes, Route } from "react-router-dom";
import ToolWrapper from "./components/Tools/toolWrapper";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Homescreen from "./containers/Homescreen";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homescreen />} /> 
      <Route path="/about" exact element={<About />} /> 
      <Route path="/contact" exact element={<Contact />} />  
      <Route path="/:category/:toolName" exact element={<ToolWrapper/>}/>
    </Routes>
  );
};

export default RouteBuilder;
