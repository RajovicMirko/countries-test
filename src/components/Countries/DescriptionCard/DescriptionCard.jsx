import "./DescriptionCard.scss";

const defaultProps = {
  id: "",
  text: "",
};

function DescriptionCard(props) {
  return (
    <p className="decription">
      <span className="key">{props.id}</span>:{" "}
      <span className="text">{props.text}</span>
    </p>
  );
}

DescriptionCard.defaultProps = defaultProps;
export default DescriptionCard;
