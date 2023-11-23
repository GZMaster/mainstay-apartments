import React from "react";

const Locate = () => {
  return (
    <div className="locate_wrapper">
      <div className="locate_left">
        <h3>locate us</h3>
        <h1>Find your way to us</h1>

        <div className="locate_icons">
          <img src="" alt="locationimg" />
          <p>
            Mainstay Apartment & Suites, House 21 Madonna Road, Behind NTA,
            Asaba
          </p>
        </div>
        <div className="locate_icons">
          <img src="" alt="numberimg" />
          <p>+234 1 236 6666</p>
        </div>
        <div className="locate_icons">
          <img src="" alt="emailimg" />
          <p>info@mainstayapartments.com</p>
        </div>

        <button>Contact us</button>
      </div>

      <div className="locate_right">
        <img src="" alt="mapimg" />
      </div>
    </div>
  );
};

export default Locate;
