import React from "react";

export default function Form() {
  return (
    <main className="form--main">
      <form action="" className="form">
        <input 
          type="text" 
          placeholder="Top text"
          className="form--input"
        />
        <input 
          type="text" 
          placeholder="Bottom text"
          className="form--input"
        />

        <button
          type="submit" value="Get a new meme image"
          className="form--button"
        >
          Get a new meme image 🖼
        </button> 
      </form>
     
          


    </main>
  )
}