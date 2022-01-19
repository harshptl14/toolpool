import React from "react";
import { Routes, Route } from "react-router-dom";
import ToolWrapper from "./components/Tools/toolWrapper";
import AboutUs from "./containers/About";
import Contact from "./containers/Contact";
import Homescreen from "./containers/Homescreen";
import ToastContextProvider from "./components/Toast/toastreducer";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homescreen />} />
      <Route path="/about" exact element={<AboutUs />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route
        path="/:category/:toolName"
        exact
        element={
          <ToastContextProvider>
            <ToolWrapper />
          </ToastContextProvider>
        }
      />
    </Routes>
  );
};

export default RouteBuilder;
