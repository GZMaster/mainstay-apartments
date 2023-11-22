import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "./components";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
