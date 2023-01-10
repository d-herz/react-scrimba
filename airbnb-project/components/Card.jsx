import React from "react";

import Star from "../image/star.png"

import Swimmer from "../image/katie-zaferes.png"


export default function Card() {

  return (
    <div className="card">
      <img src={Swimmer} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) •</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessone with Katie Zaferes</p>
      <p><span className="bold"> From $136 </span>/ person </p>
    </div>
  )

}