import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";
import "../../styles/BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Hamburger
        className="hamburger_button"
        toggled={isOpen}
        toggle={setOpen}
        direction="right"
        duration={0.8}
        color="#000"
        style={{ height: "1.5rem", width: "1.5rem" }}
      />

      <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/about")}>About us & Facilities</li>
          <li onClick={() => navigate("/bookings")}>Restaurant & Dining</li>
          <li onClick={() => navigate("/home")}>Luxury apartments</li>
          <li onClick={() => navigate("/location")}>Our location</li>
          <li onClick={() => navigate("/contact")}>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
