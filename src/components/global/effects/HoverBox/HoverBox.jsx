import "./HoverBox.scss";
import React from "react";

const defaultProps = {
  children: null,
};

function HoverBox({ children, className }) {
  return <div className={`hover-box ${className}`}>{children}</div>;
}

HoverBox.defaultProps = defaultProps;
export default HoverBox;
