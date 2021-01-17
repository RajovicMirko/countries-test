import "./Text.scss";
import { useState } from "react";
import Icon from "components/global/Icon";

const defaultProps = {
  icon: "",
  value: "",
  placeholder: "",
  onChange: () => {},
};

function InputText(props) {
  const { icon, value, placeholder, onChange } = props;
  const [inputValue, setInputValue] = useState(value);

  const _handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="input-wrapper">
      {icon && <Icon icon={icon} />}
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={_handleChange}
      />
    </div>
  );
}

InputText.defaultProps = defaultProps;
export default InputText;
