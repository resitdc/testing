import React from "react";
import propTypes from "prop-types";
import {
  ModalButtonClose as Button,
  ModalTitle as Title,
  Flex
} from "components/atoms";

const ModalHeader = ({ closeModal, title }) => {
  return (
    <Flex className="px-4 py-3 justify-between items-center">
      <Title>{ title }</Title>
      <Button onClick={closeModal}>Close</Button>
    </Flex>
  );
};

ModalOverlay.propTypes = {
  title: propTypes.string,
  closeModal: propTypes.func,
};

export default ModalHeader;
