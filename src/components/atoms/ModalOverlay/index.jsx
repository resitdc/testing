import React from "react";
import propTypes from "prop-types";

const ModalOverlay = ({ isOpen, closeModal, children }) => {
  const overlayClass = isOpen
    ? "fixed inset-0 bg-black-1 bg-opacity-80 z-900 flex items-center justify-center"
    : "hidden";

  return (
    <div className={overlayClass} onClick={closeModal}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  children: propTypes.node.isRequired,
  isOpen: propTypes.bool,
  closeModal: propTypes.func,
};

export default ModalOverlay;
