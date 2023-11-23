import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UseMediaQuery } from "../../utils";
// import "../../styles/Footer.scss";
// import footerimg from "../../assets/images/footer/group-20.svg";
// import mobilefooterimg from "../../assets/images/footer/group-14.png";
// import dot from "../../assets/images/footer/ellipse-6.png";

const Footer = () => {
  // const navigate = useNavigate();
  // let isPageWide = UseMediaQuery("(min-width: 480px)");

  return (
    <section className="footer_container">
      <div className="footer_wrapper">
        <header>
          <div>
            <img src="" alt="footerlogo" />
          </div>

          <div>
            <h1>MAINSTAY APARTMENTS & SUITES</h1>
          </div>

          <div className="footer_links">
            <div>
              <h3>FAQs</h3>
              <img src="" alt="dot" />
              <h3>Gallery</h3>
              <img src="" alt="dot" />
              <h3>Booking.com</h3>
              <img src="" alt="dot" />
              <h3>Find us</h3>
              <img src="" alt="dot" />
            </div>

            <div>
              <img src="" alt="instagram" />
              <img src="" alt="twitter" />
              <img src="" alt="facebook" />
            </div>
          </div>
        </header>

        <footer>
          <div className="footer_center">
            <p>
              Copyright © 2023 MainstayApartments&Suites. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
