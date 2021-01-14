import "./Card.scss";
import React from "react";

// import Image from "components/Image";
import Scale from "components/global/effects/Scale";
import HoverBox from "components/global/effects/HoverBox";

const defaultProps = {
  title: "",
  img: "",
  description: {},
  onClick: () => {},
};

function Card(props) {
  const { title, img, description, onClick } = props;

  return (
    <Scale>
      <HoverBox>
        <div className="card-wrapper" onClick={onClick}>
          <div className="image">{img && <img src={img} />}</div>

          <div className="body">
            <h4 className="title">{title}</h4>

            {description && (
              <div className="decription">
                {Object.keys(description).map((key) => {
                  return (
                    <p key={key}>
                      <span className="key">{key}</span>: {description[key]}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </HoverBox>
    </Scale>
  );
}

Card.defaultProps = defaultProps;
export default Card;
