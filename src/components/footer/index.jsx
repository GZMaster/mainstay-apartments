import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UseMediaQuery } from "../../utils";
import "../../styles/Footer.scss";
import footerlogo from "../../assets/images/footerlogo.svg";
import dot from "../../assets/images/dot.svg";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";

const Footer = () => {
  // const navigate = useNavigate();
  // let isPageWide = UseMediaQuery("(min-width: 480px)");

  return (
    <section className="footer_container">
      <div className="footer_wrapper">
        <img src={footerlogo} alt="footerlogo" />

        <h1>MAINSTAY APARTMENTS SUITES</h1>

        <div className="footer_links">
          <div>
            <h3>FAQs</h3>
            <img src={dot} alt="dot" />
            <h3>Gallery</h3>
            <img src={dot} alt="dot" />
            <h3>Booking.com</h3>
            <img src={dot} alt="dot" />
            <h3>Find us</h3>
          </div>

          <div>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>

      <footer>
        <p>Copyright © 2023 MainstayApartments&Suites. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;
