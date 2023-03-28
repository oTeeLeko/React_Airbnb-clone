import React from "react";
import photoGrid from "./pic/photo_grid.png";

export default function Hero() {
  return (
    <section className="hero_container">
      {/* eslint-disable-next-line */}
      <img src={photoGrid} className="hero_photo" />
      {/* eslint-disable-next-line */}
      <h1 className="hero_header">Online Experiences</h1>
      <p className="hero_text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
