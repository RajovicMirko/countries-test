import "./Select.scss";
import React, { useState, useEffect } from "react";

const defaultProps = {
  options: [],
  defaultText: "Select an option",
  onChange: () => {},
};

function Select(props) {
  const { options, onChange, defaultText } = props;
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => onChange(selectValue), [selectValue, onChange]);

  const _handleChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };

  return (
    <select className="select" onChange={_handleChange}>
      <option value="">{defaultText}</option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = defaultProps;
export default Select;
