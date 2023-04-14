import React from "react";
import propTypes from "prop-types";

const ModalButtonClose = ({ closeModal, children }) => {
  return (
    <Button
      className="text-gray-1 hover:text-gray-3 focus:outline-none"
      onClick={closeModal}
    >
      {children}
    </Button>
  );
};

ModalButtonClose.propTypes = {
  children: propTypes.node.isRequired,
  closeModal: propTypes.func,
};

export default ModalButtonClose;
