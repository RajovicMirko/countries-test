import "./Flat.scss";
// components
import Icon from "components/global/Icon";

const defaultProps = {
  id: "",
  text: "",
  icon: "",
  className: "",
  onClick: () => {},
};

function ButtonFlat(props) {
  const _handleClick = () => props.onClick(props.id);

  return (
    <button className={`button-flat ${props.className}`} onClick={_handleClick}>
      {props.icon && <Icon icon={props.icon} />}
      {props.text && props.text}
    </button>
  );
}

ButtonFlat.defaultProps = defaultProps;
export default ButtonFlat;
