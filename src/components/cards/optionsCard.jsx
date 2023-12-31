import React from "react";
import PropTypes from "prop-types";
import "../../styles/OptionsCard.scss";

const OptionsCard = (props) => {
  return (
    <div className={`optioncard ${props.classname}`}>
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
