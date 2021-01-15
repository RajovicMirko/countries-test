import "./NoData.scss";
import React from "react";

const defaultProps = {
  text: "No data to display",
};

function NoData(props) {
  return (
    <div className="no-data">
      <h4>{props.text}</h4>
    </div>
  );
}

NoData.defaultProps = defaultProps;
export default NoData;
