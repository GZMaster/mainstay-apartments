import React from "react";
import PropTypes from "prop-types";

const RoomCard = (props) => {
  return (
    <div
      className={`roomcard ${props.classname}`}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className="roomcard_title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
  classname: PropTypes.string,
};

export default RoomCard;
