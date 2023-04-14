import React from "react";
import propTypes from "prop-types";

const ModalButtonClose = ({ onClick, children }) => {
  return (
    <button
      className="text-gray-1 hover:text-gray-3 focus:outline-none"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ModalButtonClose.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
};

export default ModalButtonClose;
