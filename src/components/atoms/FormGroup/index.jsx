import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ label, children }) => {
  return (
    <div className="flex justify-between w-full mb-5">
      <label className="w-2/5 pt-2 pr-4 text-left font-bold" htmlFor={label}>
        {label}
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
