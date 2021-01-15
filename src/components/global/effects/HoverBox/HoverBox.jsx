import "./HoverBox.scss";
import React from "react";

const defaultProps = {
  children: null,
  className: "",
};

function HoverBox(props) {
  return <div className={`hover-box ${props.className}`}>{props.children}</div>;
}

HoverBox.defaultProps = defaultProps;
export default HoverBox;
