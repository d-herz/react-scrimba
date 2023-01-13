import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
  
  const cardElement = data.map(item => {
    return <Card
      key={item.title}
      item={item}
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

