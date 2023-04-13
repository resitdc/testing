import React from "react";
import propTypes from "prop-types";

const Flex = (props) => {
  const className = ["flex"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      { props.children }
    </div>
  );
};

Flex.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default Flex;
