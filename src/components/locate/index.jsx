import React from "react";
import "../../styles/Locate.scss";
import locateimg from "../../assets/images/locateimg.png";
import mappin from "../../assets/images/map-pin.svg";
import phone from "../../assets/images/phone-call.svg";
import mail from "../../assets/images/mail.svg";

const Locate = () => {
  return (
    <div className="locate_wrapper">
      <div>
        <div className="locate_left">
          <h3>locate us</h3>
          <h1>Find your way to us</h1>

          <div className="locate_icons">
            <img src={mappin} alt="locationimg" />
            <p>
              Mainstay Apartment & Suites, House 21 Madonna Road, Behind NTA,
              Asaba
            </p>
          </div>
          <div className="locate_icons">
            <img src={phone} alt="numberimg" />
            <p>+234 1 236 6666</p>
          </div>
          <div className="locate_icons">
            <img src={mail} alt="emailimg" />
            <p>info@mainstayapartments.com</p>
          </div>

          <button>Contact us</button>
        </div>

        <div className="locate_right">
          <img src={locateimg} alt="mapimg" />
        </div>
      </div>
    </div>
  );
};

export default Locate;
