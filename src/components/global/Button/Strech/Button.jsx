import "./Button.scss";
import React from "react";

import Icon from "components/global/Icon";

const defaultProps = {
  id: "",
  icon: "",
  children: null,
  className: "",
  onClick: () => {},
};

function Button(props) {
  const _handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <button className={`button ${props.className}`} onClick={_handleClick}>
      {props.icon && <Icon icon={props.icon} />}
      {props.children}
    </button>
  );
}

Button.defaultProps = defaultProps;
export default Button;
