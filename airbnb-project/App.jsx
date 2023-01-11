import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Swimmer from "./image/katie-zaferes.png"



export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        title="Life Lessons with Katie Zaferes"
        img={Swimmer}
        rating="5.0"
        reviewCount={6}
        country="USA"
        price={136}
      />
      
    </div>
  )
}