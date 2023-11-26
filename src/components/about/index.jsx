import React from "react";
import "../../styles/About.scss";
import aboutimg from "../../assets/images/aboutimg.png";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_left">
        <h3>WHY WE ARE YOUR BEST CHOICE</h3>
        <h1>Your Home Away from Home</h1>
        <p>
          Hospitality is not just a tradition, but a way of life. We take
          immense pride in who we are and what we stand for. We are committed to
          providing exceptional service and ensuring our guests feel not just
          welcomed, but truly at home.
        </p>
        <p>
          Our dedicated staff goes above and beyond to ensure your needs are
          met, making your stay hassle-free and enjoyable and our on-site
          restaurants offer an array of culinary delights, ensuring you savor
          every moment of your visit.
        </p>
        <button>Learn More</button>
      </div>

      <img className="about_right" src={aboutimg} alt="aboutimg" />
    </div>
  );
};

export default About;
