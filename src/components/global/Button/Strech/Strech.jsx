import "./Strech.scss";
// components
import Icon from "components/global/Icon";

const defaultProps = {
  id: "",
  icon: "",
  children: null,
  className: "",
  onClick: () => {},
};

function ButtonStrech(props) {
  const _handleClick = () => props.onClick(props.id);

  return (
    <button
      className={`button-strech ${props.className}`}
      onClick={_handleClick}
    >
      {props.icon && <Icon icon={props.icon} />}
      {props.children}
    </button>
  );
}

ButtonStrech.defaultProps = defaultProps;
export default ButtonStrech;
