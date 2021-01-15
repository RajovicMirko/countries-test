import "./Button.scss";
import React from "react";

import Icon from "components/global/Icon";
import HoverBox from "components/global/effects/HoverBox";

const defaultProps = {
  icon: "",
  children: null,
  style: {},
  onClick: () => {},
};

function Button(props) {
  const _handleClick = () => {
    props.onClick();
  };

  return (
    <HoverBox style={props.style}>
      <button className="button" onClick={_handleClick}>
        <Icon icon={props.icon} />
        {props.children}
      </button>
    </HoverBox>
  );
}

Button.defaultProps = defaultProps;
export default Button;
