import React from "react";
import { useNavigate } from "react-router-dom";
import { BurgerMenu } from "../index";
import { UseMediaQuery } from "../../utils";
import logo from "../../assets/images/logo.svg";
import "../../styles/NavBar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {isPageWide ? (
        <nav className={"nav_component"}>
          <button onClick={() => handleNavigation("/home")}>Home</button>
          <button onClick={() => handleNavigation("/about")}>About us</button>
          <button onClick={() => handleNavigation("/bookings")}>
            Restaurant & Dining
          </button>
          <img src={logo} alt="" onClick={() => handleNavigation("/")} />
          <button onClick={() => handleNavigation("/home")}>
            Luxury apartments
          </button>
          <button onClick={() => handleNavigation("/location")}>
            Our location
          </button>
          <button onClick={() => handleNavigation("/contact")}>
            Contact us
          </button>
        </nav>
      ) : (
        <nav className={"nav_component"}>
          <img src={logo} alt="" onClick={() => handleNavigation("/")} />

          <BurgerMenu />
        </nav>
      )}
    </>
  );
}
