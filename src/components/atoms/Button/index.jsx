import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const className = ["px-4 py-2 rounded-md font-medium"];
  const {
    color = "black",
    children,
    isLoading = false,
    size = "md",
    onClick,
    ...rest
  } = props;

  const sizeStyle = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }[size];

  const colorStyle = {
    primary: "text-white-1 bg-primary",
    black: "text-white-1 bg-black-1",
    red: "text-white-1 bg-red-1",
  }[color];

  if (size) className.push(sizeStyle);
  if (color) className.push(colorStyle);
  if (props.className) className.push(props.className);

  return (
    <button
      className={className.join(" ")}
      disabled={isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? "LOADING..." : children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
  color: propTypes.oneOf(["primary", "black"]),
  isLoading: propTypes.bool,
  size: propTypes.oneOf(["sm", "md", "lg"]),
  onClick: propTypes.func,
};

export default Button;
