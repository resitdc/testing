import React from "react";
import propTypes from "prop-types";
import {
  ModalOverlay,
  Modal as ModalBox
} from "components/atoms";
import { ModalHeader } from "components/molecules";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalBox isOpen={isOpen}>
        <ModalHeader title="Modal Title" onClose={onClose} />
        <div className="px-4 py-2">{children}</div>
      </ModalBox>
    </ModalOverlay>
  );
};

ModalOverlay.propTypes = {
  children: propTypes.node.isRequired,
  isOpen: propTypes.bool,
  onClose: propTypes.func,
};

export default Modal;
