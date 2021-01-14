import "./Flat.scss";
import React from "react";

const defaultProps = {
  text: "",
  icon: "",
  onClick: () => {},
};

function Flat(props) {
  const { text, icon, onClick } = props;

  return (
    <button className="button-flat" onClick={onClick}>
      {icon && <i className={icon} />}
      {text && text}
    </button>
  );
}

Flat.defaultProps = defaultProps;
export default Flat;
