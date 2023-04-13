import React from "react";

const Nav = (props) => {
  const className = ["bg-black-1 p-4"];
  className.push(props.className);
  return (
    <nav className={className.join(" ")}>
      { props.children }
    </nav>
  );
};

export default Nav;
