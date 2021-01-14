import "./Flat.scss";
import React from "react";
import Icon from "components/global/Icon";

const defaultProps = {
  text: "",
  icon: "",
  onClick: () => {},
};

function Flat(props) {
  const { text, icon, onClick } = props;

  return (
    <button className="button-flat" onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {text && text}
    </button>
  );
}

Flat.defaultProps = defaultProps;
export default Flat;
