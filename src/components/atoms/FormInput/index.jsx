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
    pattern,
    onKeyDown,
    onPaste,
    id,
    dataTestid,
  } = props;
  const className = ["py-2 px-3 w-full border border-gray-3 rounded-md shadow-sm focus:outline-none focus:ring-black-1 focus:border-black-1"];
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
      if (props.onChange) props.onChange(target);
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
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      id={id}
      data-testid={dataTestid}
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
  onKeyDown: propTypes.func,
  onPaste: propTypes.func,
  id: propTypes.string,
  dataTestid: propTypes.string,
};

export default FormInput;
