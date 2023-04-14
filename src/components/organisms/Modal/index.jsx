import React from "react";
import propTypes from "prop-types";
import {
  ModalOverlay,
  Modal as ModalBox
} from "components/atoms";
import { ModalHeader } from "components/molecules";

const Modal = ({ isOpen, onClose, children, title }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalBox isOpen={isOpen}>
        <ModalHeader title={title} onClose={onClose} />
        <div className="px-4 py-2">{children}</div>
      </ModalBox>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  children: propTypes.node.isRequired,
  isOpen: propTypes.bool,
  title: propTypes.string,
  onClose: propTypes.func,
};

export default Modal;
