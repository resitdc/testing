import React from "react";
import propTypes from "prop-types";

const ModalButtonClose = ({ onClick, children }) => {
  return (
    <button
      className="text-red-1"
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
