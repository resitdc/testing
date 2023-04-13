import React from "react";

const Flex = (props) => {
  const className = ["flex"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      { children }
    </div>
  );
};

export default Flex;
