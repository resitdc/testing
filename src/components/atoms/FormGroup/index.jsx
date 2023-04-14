import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({ label, children, errorMessage }) => {
  return (
    <div className="flex justify-between w-full mb-5">
      <label className="w-2/5 pt-2 pr-4 text-left font-bold" htmlFor={label}>
        {label}
      </label>
      <div className="flex-1">
        {children}
        {
          errorMessage &&
          <div className="w-full mt-1 text-red-1">{errorMessage}</div>
        }
      </div>
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};

export default FormGroup;
