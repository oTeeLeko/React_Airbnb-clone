import React from "react";

export default function Navbar() {
  return (
    <nav>
      {/* eslint-disable-next-line */}
      <img src={require("./logo/Airbnb_Logo.png")} className="nav_logo" />
    </nav>
  );
}
