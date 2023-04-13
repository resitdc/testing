import React from "react";
import propTypes from "prop-types";

const Nav = (props) => {
  const className = ["bg-black-1 p-4"];
  if (props.className) className.push(props.className);
  return (
    <nav className={className.join(" ")}>
      { props.children }
    </nav>
  );
};

Nav.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

export default Nav;
