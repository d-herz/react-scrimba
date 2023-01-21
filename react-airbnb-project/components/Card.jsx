import React from "react";

import Star from "../image/star.png"



export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }
  console.log(props.item)
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img src={`./image/${props.item.coverImg}`} className="card--image" />
      
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.reviewCount}) • </span>
        <span className="gray"> {props.item.location}</span>
      </div>

      <p className="card--title">{props.item.title}</p>
      <p className="card--price"><span className="bold"> From ${props.item.price} </span>/ person </p>
    </div>
  )

}