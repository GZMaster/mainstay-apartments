import React from "react";
import "../../styles/Luxury.scss";
import luxuryimg from "../../assets/images/luxuryimg.png";

const Luxury = () => {
  return (
    <div className="luxury_wrapper">
      <header>
        <h3>ELEGANCE WITH HOUSE 21</h3>
        <h1>Discover Our Exclusive Luxury Apartments</h1>
      </header>

      <div>
        <div className="luxury_left">
          <img src={luxuryimg} alt="luxuryimg" />
        </div>

        <div className="luxury_right">
          <p>
            Escape to a world of sophistication and refinement with our distinct
            Luxury Apartments. Unmatched in style and comfort, these residences
            offer a private retreat within our expansive hotel and apartments
            group.
          </p>
          <p>
            Elevate your stay with opulent amenities and bespoke services,
            ensuring an experience that transcends the ordinary. Welcome to a
            realm where luxury knows no bounds
          </p>

          <button>View our luxury apartments </button>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
