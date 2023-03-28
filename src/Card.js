import React from "react";
import Star from "./pic/star.png";
import CardKatie from "./pic/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      {/* eslint-disable-next-line */}
      <img src={CardKatie} className="card_image" />
      <div className="card_stats">
        {/* eslint-disable-next-line */}
        <img src={Star} className="card_star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lesson with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
