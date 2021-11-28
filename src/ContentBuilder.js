import React from "react";
import { Routes, Route } from "react-router-dom";
import Homescreen from "./containers/Homescreen";

const ContentBuilder = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homescreen />} />
    </Routes>
  );
};

export default ContentBuilder;
