import React from "react";
import { useNavigate } from "react-router-dom";
import { BurgerMenu } from "../index";
import { UseMediaQuery } from "../../utils";
import logo from "../../assets/images/logo.svg";
// import "../../styles/NavBar.scss";

export default function Navbar() {
  const navigate = useNavigate();
  let isPageWide = UseMediaQuery("(min-width: 769px)");

  return (
    <>
      {isPageWide ? (
        <nav className={"nav_component"}>
          <button onClick={navigate("/")}>Home</button>
          <button onClick={navigate("/")}>About us</button>
          <button onClick={navigate("/")}>Restaurant & Dining</button>
          <img src={logo} alt="" />
          <button onClick={navigate("/")}>Rooms & Facilities</button>
          <button onClick={navigate("/")}>Our location</button>
          <button onClick={navigate("/")}>Contact us</button>
        </nav>
      ) : (
        <BurgerMenu />
      )}
    </>
  );
}
