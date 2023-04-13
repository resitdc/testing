import React from "react";
import propTypes from "prop-types";

const Container = (props) => {
  const className = ["container"];
  if (props.default) className.push("mx-auto px-4 sm:px-6 lg:px-8");
  if (props.className) className.push(props.className);
  return (
    <div className={className.join(" ")}>
      { props.children }
    </div>
  );
};

Container.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  default: propTypes.bool,
};

export default Container;
