import React from "react";
import "../../styles/Hero.scss";
import herobg from "../../assets/images/herobg.png";

const Hero = () => {
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

      <img src={herobg} alt="backgroundimg " className="hero_backgroundimg" />
    </div>
  );
};

export default Hero;
