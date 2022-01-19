import React from "react";
import PropTypes from "prop-types";
import * as icons from "./index";

const Icon = ({ name }) => {
  switch (name) {
    case 'lorem':
      return <icons.lorem />;
    case 'resize':
      return <icons.resize />;
    case 'count':
      return <icons.count />;
    case 'binary':
      return <icons.binary />;
    default:
      return <icons.textTools />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
