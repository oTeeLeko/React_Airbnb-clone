import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./index.css";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card_list"> 
        {cards}
      </section>
    </div>
  );
}