import React from "react";
import propTypes from "prop-types";
import {
  ModalButtonClose as Button,
  ModalTitle as Title,
  Flex
} from "components/atoms";

const ModalHeader = ({ onClose, title }) => {
  return (
    <Flex className="px-4 py-3 justify-between items-center">
      <Title>{ title }</Title>
      <Button onClick={onClose}>Close</Button>
    </Flex>
  );
};

ModalHeader.propTypes = {
  title: propTypes.string,
  onClose: propTypes.func,
};

export default ModalHeader;
