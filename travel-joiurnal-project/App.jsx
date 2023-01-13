import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
  
  const cardElement = data.map(item => {
    return <Card
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}

    />
  })

  return (
    <div className="container">
      <Navbar />
      <section className="card--list">
        {cardElement}
      </section>
    </div>
  )

}

