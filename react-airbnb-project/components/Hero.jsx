import React from "react";
import PhotoGrid from "../image/photo-grid.png"


export default function Hero() {
  return (
    <div className="hero--main">
      <img src={PhotoGrid} />
      <h1>Online Experiences </h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>

  )
}