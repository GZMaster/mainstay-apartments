import React from "react";
import { UseMediaQuery } from "../../utils";
import "../../styles/Hero.scss";
import herobg from "../../assets/images/herobg.png";

const Hero = () => {
  const isMobile = UseMediaQuery("(max-width: 768px)");

  return (
    <div className="hero_wrapper">
      <header>
        <h3>EXPERIENCE Comfort and LUXURY</h3>
        <h1>Mainstay Apartments Suites</h1>
        <p>
          We have designed a special place where you can relax, treat yourself,
          and make lasting memories in a serene and luxurious setting.
        </p>
        <button>Make reservations</button>
      </header>

      {!isMobile ? (
        <img src={herobg} alt="backgroundimg " />
      ) : (
        <div
          className="hero_backgroundimg"
          style={{ backgroundImage: `url(${herobg})` }}
        />
      )}
    </div>
  );
};

export default Hero;
