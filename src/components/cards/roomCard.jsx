import React from "react";
import PropTypes from "prop-types";
import "../../styles/RoomCard.scss";

const RoomCard = (props) => {
  return (
    <div
      className="roomcard"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className="roomcard_title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default RoomCard;
