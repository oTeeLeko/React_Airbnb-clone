import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import "./index.css";

function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
