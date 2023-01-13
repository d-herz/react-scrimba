import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className="card--main">

      <div className="card--img">
        <img src={props.imageUrl}></img>
      </div>

      <div className="card--info">
        <div className="card--title">
          <span><i className="fa-solid fa-location-dot"></i> {props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
          <h1>{props.title}</h1>
        </div>

        <div className="card--details">
          <h3>{props.startDate} - {props.endDate}</h3>
          <p>{props.description}</p>
        </div>

      </div>

    </div>
  )
}