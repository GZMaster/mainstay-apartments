import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
