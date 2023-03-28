import React from "react";
import Logo from "./pic/Airbnb_Logo.png";

export default function Navbar() {
  return (
    <nav>
      {/* eslint-disable-next-line */}
      <img src={Logo} className="nav_logo" />
    </nav>
  );
}
