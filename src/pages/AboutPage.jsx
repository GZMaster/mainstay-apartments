import React from "react";
import { About, Services } from "../components";
import "../styles/Pages.scss";

const AboutPage = () => {
  return (
    <div className="aboutpage_container">
      <About />
      <Services />
    </div>
  );
};

export default AboutPage;
