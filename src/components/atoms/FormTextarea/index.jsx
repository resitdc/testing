import React from "react";
import propTypes from "prop-types";

const FormTextarea = (props) => {
  const {
    value,
    placeholder,
    name,
    required,
    readonly,
    disabled,
    onKeyDown,
    onPaste,
    id,
    dataTestid,
    rows,
    cols,
  } = props;
  const className = ["resize-none py-2 resize-none px-3 w-full border border-gray-3 rounded-md shadow-sm focus:outline-none focus:ring-black-1 focus:border-black-1"];
  className.push(props.className);

  const onChange = (event) => {
    if (props.onChange) props.onChange(event);
  };

  const handleOnFocus = (event) => {
    if (props.onFocus) props.onFocus(event);
  };

  return (
    <textarea
      name={name}
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
      rows={rows}
      cols={cols}
    />
  );
};

FormTextarea.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  pattern: propTypes.string,
  className: propTypes.string,
  rows: propTypes.string,
  cols: propTypes.string,
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

export default FormTextarea;
