import React from "react";

const SelectInput = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-groups">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="null">Select</option>
        {options.map((option) => (
          <option key={option._id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <div className="alert alert-info">{error}</div>}
    </div>
  );
};

export default SelectInput;
