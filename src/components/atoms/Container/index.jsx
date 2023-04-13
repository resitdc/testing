import React from "react";

const Container = (props) => {
  const className = ["container"];
  className.push(props.className);
  return (
    <div className={className.join(" ")}>
      { children }
    </div>
  );
};

export default Container;
