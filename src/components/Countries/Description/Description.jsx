import "./Description.scss";
import React from "react";

const defaultProps = {
  className: "",
  id: "",
  value: "",
  children: null,
};

function Description(props) {
  return (
    <div className={`description ${props.className}`}>
      <span className="id">{props.id}: </span>
      {props.value && <span className="value">{props.value}</span>}
      {props.children && props.children}
    </div>
  );
}

Description.defaultProps = defaultProps;
export default Description;
