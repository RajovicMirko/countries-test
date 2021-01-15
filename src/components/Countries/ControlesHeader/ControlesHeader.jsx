import "./ControlesHeader.scss";
import React from "react";

const defaultProps = {
  children: null,
};

function ControlesHeader(props) {
  return <section className="controles-header">{props.children}</section>;
}

ControlesHeader.defaultProps = defaultProps;
export default ControlesHeader;
