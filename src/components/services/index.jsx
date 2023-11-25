import React from "react";
import { ServiceCard } from "..";
import ServiceData from "../../assets/data/ServicesData";
import "../../styles/Services.scss";

const Services = () => {
  return (
    <div className="services_wrapper">
      <header>
        <h3>WHY WE ARE YOUR BEST CHOICE</h3>
        <h1>Our Amenities and Services</h1>
      </header>

      <div>
        {ServiceData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
