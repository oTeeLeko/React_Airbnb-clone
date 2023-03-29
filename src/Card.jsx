import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card_badge">{badgeText}</div>}
      {/* eslint-disable-next-line */}
      <img src={props.coverImg} className="card_image" />
      <div className="card_stats">
        {/* eslint-disable-next-line */}
        <img src={require("./logo/star.png")} className="card_star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card_title">{props.title}</p>
      <p className="card_price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
