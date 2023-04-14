import React from "react";
import propTypes from "prop-types";

const ModalTitle = ({ children }) => {
  return (
    <h2 className="text-lg font-medium">{ children }</h2>
  );
};

ModalTitle.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
};

export default ModalTitle;
