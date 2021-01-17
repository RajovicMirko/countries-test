import "./Select.scss";
import { useState, useEffect } from "react";

const defaultProps = {
  options: [],
  defaultText: "Select an option",
  value: "",
  onChange: () => {},
};

function Select(props) {
  const { options, defaultText, value, onChange } = props;
  const [selectValue, setSelectValue] = useState(value);

  const _handleChange = (event) => setSelectValue(event.target.value);
  useEffect(() => onChange(selectValue), [selectValue, onChange]);

  return (
    <select className="select" value={selectValue} onChange={_handleChange}>
      <option value="" hidden>
        {defaultText}
      </option>
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
