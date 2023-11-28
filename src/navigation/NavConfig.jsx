import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import {
  HomePage,
  AboutPage,
  OptionsPage,
  ContactPage,
  LocatePage,
} from "../pages";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="bookings" element={<OptionsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="location" element={<LocatePage />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
