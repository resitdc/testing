import React from "react";
import propTypes from "prop-types";

const Modal = ({ isOpen, children }) => {
  const modalClass = isOpen
    ? "bg-white-1 w-full md:max-w-xl mx-auto rounded shadow-lg z-950 overflow-y-auto"
    : "hidden";

  return (
    <div className={modalClass} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: propTypes.node.isRequired,
  isOpen: propTypes.bool,
};

export default Modal;
