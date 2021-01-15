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
  const { id, title, img, description, onClick } = props;

  const _handleClick = (event) => {
    onClick(id);
  };

  return (
    <Scale>
      <HoverBox>
        <div className="card-wrapper" onClick={_handleClick}>
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
