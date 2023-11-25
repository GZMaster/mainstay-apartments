import React from "react";
import PropTypes from "prop-types";
import "../../styles/ServiceCard.scss";

const ServiceCard = (props) => {
  return (
    <div className={`servicecard ${props.classname}`}>
      <img src={props.icon} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  classname: PropTypes.string,
};

export default ServiceCard;
