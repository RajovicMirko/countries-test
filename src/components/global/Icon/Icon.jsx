import "./Icon.scss";

const defaultProps = {
  icon: "",
};

function Icon(props) {
  return <i className={`icon ${props.icon}`} />;
}

Icon.defaultProps = defaultProps;
export default Icon;
