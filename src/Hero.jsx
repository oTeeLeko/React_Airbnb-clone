import React from "react";

export default function Hero() {
  return (
    <section className="hero_container">
      {/* eslint-disable-next-line */}
      <img src={require("./pic/photo_grid.png")} className="hero_photo" />
      <h1 className="hero_header">Online Experiences</h1>
      <p className="hero_text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}
