import React from "react";
import { Hero, Bookings, Services, Locate } from "../components";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <Hero />
      <Bookings />
      <Locate />
      <Services />
    </div>
  );
};

export default HomePage;
