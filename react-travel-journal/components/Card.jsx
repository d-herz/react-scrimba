import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className="card--main">

      <div className="card--img">
        <img src={props.item.imageUrl}></img>
      </div>

      <div className="card--info">
        <div className="card--title">
          <span><i className="fa-solid fa-location-dot"></i> {props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          <h1>{props.item.title}</h1>
        </div>

        <div className="card--details">
          <h3>{props.item.startDate} - {props.item.endDate}</h3>
          <p>{props.item.description}</p>
        </div>

      </div>

    </div>
  )
}