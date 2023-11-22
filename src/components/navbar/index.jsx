import React from "react";
import { useNavigate } from "react-router-dom";
import { BurgerMenu } from "./index";
import { UseMediaQuery } from "../../utils";
// import logo from "../../assets/images/logo.svg";
// import "../../styles/NavBar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  return (
    <nav className={"nav__component"}>
      <div className="nav__header">
        {/* <img className="logo" src={logo} alt="" onClick={() => navigate("/")} /> */}
      </div>

      {isPageWide ? (
        <div className="links__content">
          <button onClick={() => navigate("/about")}>About Us</button>
          <button onClick={() => navigate("/enrollment")}>Enrollment</button>
          <button>Youtube</button>
          <button
            className="contact_button"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      ) : (
        <BurgerMenu />
      )}
    </nav>
  );
}
