import React from "react";
import propTypes from "prop-types";

const FormInput = (props) => {
  const {
    value,
    type,
    placeholder,
    name,
    required,
    readonly,
    disabled,
    myRef,
    pattern,
    autoComplete,
    onKeyDown,
    onPaste,
    id,
  } = props;
  const className = ["py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"];
  className.push(props.className);

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(event);
    } else {
      props.onChange(target);
    }
  };

  const handleOnFocus = (event) => {
    if (props.onFocus) props.onFocus(event);
  };

  return (
    <input
      name={name}
      type={type}
      pattern={pattern}
      className={className.join(" ")}
      value={value === null ? "" : value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      readOnly={readonly}
      disabled={disabled}
      onFocus={handleOnFocus}
      ref={myRef}
      autoComplete={autoComplete}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      id={id}
    />
  );
};

FormInput.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  pattern: propTypes.string,
  className: propTypes.string,
  value: propTypes.any,
  placeholder: propTypes.string,
  onChange: propTypes.func,
  required: propTypes.bool,
  readonly: propTypes.bool,
  disabled: propTypes.bool,
  onFocus: propTypes.func,
  myRef: propTypes.any,
  autoComplete: propTypes.func,
  onKeyDown: propTypes.func,
  onPaste: propTypes.func,
  id: propTypes.string,
};

export default FormInput;
