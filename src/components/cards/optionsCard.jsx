import React from "react";
import PropTypes from "prop-types";

const OptionsCard = (props) => {
  return (
    <div className={`roomcard ${props.classname}`}>
      <img src={props.icon} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

OptionsCard.propTypes = {
  classname: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default OptionsCard;
