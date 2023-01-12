import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App() {
  const cardElement = data.map(data => {
    return <Card
      key={data.id}
      title={data.title}
      description={data.description}
      price={data.price}
      img={`./image/${data.coverImg}`}
      location={data.location}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      openSpots={data.openSpots}
    />
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cardElement}
      </section>
    </div>
  )
}

