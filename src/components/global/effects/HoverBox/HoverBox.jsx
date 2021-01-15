import "./HoverBox.scss";
import React from "react";

const defaultProps = {
  children: null,
  style: {},
};

function HoverBox(props) {
  return (
    <div className={`hover-box ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}

HoverBox.defaultProps = defaultProps;
export default HoverBox;
