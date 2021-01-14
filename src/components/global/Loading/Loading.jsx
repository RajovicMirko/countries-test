import "./Loading.scss";
import React from "react";

const defaultProps = {
  text: "Loading...",
};

function Loading(props) {
  return (
    <div className="loading">
      <h4>{props.text}</h4>
    </div>
  );
}

Loading.defaultProps = defaultProps;
export default Loading;
