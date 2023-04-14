import React from "react";
import propTypes from "prop-types";

const FormSelect = (props) => {
  const {
    value,
    name,
    id,
    list,
    title,
    selected,
    defaultChoose,
    readonly,
    disabled,
    dataTestid,
  } = props;

  const className = ["py-2 px-3 border border-gray-3 rounded-md shadow-sm focus:outline-none focus:ring-black-1 focus:border-black-1"];

  const onChangeHandler = (e) => {
    if (props.onChange) props.onChange(e);
  };

  className.push(props.className);

  return (
    <select
      className={className.join(" ")}
      readOnly={readonly || false}
      onChange={onChangeHandler}
      value={selected}
      name={name}
      id={id}
      disabled={disabled}
      data-testid={dataTestid}
    >
      {
        defaultChoose &&
        <option key={-1} value="">{ defaultChoose }</option>
      }
      {
        list &&
        list.map((item, index) => {
          return (
            <option key={index} value={item[value]} >
              {item[title]}
            </option>
          );
        })
      }
    </select>
  );
};

FormSelect.propTypes = {
  className: propTypes.string,
  value: propTypes.any,
  name: propTypes.string,
  id: propTypes.string,
  list: propTypes.array,
  title: propTypes.string,
  selected: propTypes.string,
  defaultChoose: propTypes.string,
  readonly: propTypes.bool,
  disabled: propTypes.bool,
  dataTestid: propTypes.string,
  onChange: propTypes.func,
};

export default FormSelect;
