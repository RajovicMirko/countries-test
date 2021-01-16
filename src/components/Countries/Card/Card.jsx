import "./Card.scss";
// components
import DescriptionCard from "components/Countries/DescriptionCard";
import Scale from "components/global/effects/Scale";
import HoverBox from "components/global/effects/HoverBox";

const defaultProps = {
  title: "",
  img: "",
  description: {},
  onClick: () => {},
};

function Card(props) {
  const { id, title, img, description, onClick } = props;

  const _handleClick = (event) => onClick(id);

  const CardDescriptions = () =>
    Object.keys(description).map((key) => {
      return <DescriptionCard key={key} id={key} text={description[key]} />;
    });

  return (
    <Scale>
      <HoverBox>
        <div className="card-wrapper" onClick={_handleClick}>
          {img && <img className="image-top" src={img} alt={id} />}

          <div className="body">
            <h4 className="title">{title}</h4>
            {description && <CardDescriptions />}
          </div>
        </div>
      </HoverBox>
    </Scale>
  );
}

Card.defaultProps = defaultProps;
export default Card;
