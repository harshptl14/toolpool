import React from "react";
import PropTypes from "prop-types";
import { GpsOff, Facebook } from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case "Twitter":
      return <GpsOff />;
    case "Instagram":
      return <Facebook />;
    default:
      return <GpsOff />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
