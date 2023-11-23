import React from "react";
import { Hero, Bookings, Services, Locate, Luxury } from "../components";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <Hero />
      <Bookings />
      <Locate />
      <Services />
      <Luxury /> 
    </div>
  );
};

export default HomePage;
