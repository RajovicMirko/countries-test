import "./Icon.scss";
import React from "react";

const defaultProps = {
  icon: "",
};

function Icon(props) {
  return <i className={`icon ${props.icon}`} />;
}

Icon.defaultProps = defaultProps;
export default Icon;
