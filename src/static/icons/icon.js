import React from "react";
import PropTypes from "prop-types";
import * as icons from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case 'Twitter':
      return <icons.GpsOff />;
    case 'Instagram':
      return <icons.Facebook />;
    case 'WavesLight':
      return <icons.WavesLight />;
    case 'WavesDark':
      return <icons.WavesDark />;
    case 'Wordcount':
      return icons.Wordcount;
    default:
      return <icons.GpsOff />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
