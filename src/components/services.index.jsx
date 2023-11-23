import React from "react";
import { ServiceCard } from "../components";
import ServiceData from "../assets/data/ServicesData";

const Services = () => {
  return (
    <div className="services_wrapper">
      <header>
        <h3>WHY WE ARE YOUR BEST CHOICE</h3>
        <h1>Our Amenities and Services</h1>
      </header>

      <body>
        {ServiceData.forEach((service) => (
          <ServiceCard
            id={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </body>
    </div>
  );
};

export default Services;
