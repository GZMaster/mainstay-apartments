import React from "react";
import {
  Hero,
  About,
  Bookings,
  Services,
  Options,
  Locate,
  Contact,
} from "../components";

const Main = () => {
  return (
    <div className="mainpage_container">
      <Hero />
      <About />
      <Bookings />
      <Services />
      <Options />
      <Locate />
      <Contact />
    </div>
  );
};

export default Main;
