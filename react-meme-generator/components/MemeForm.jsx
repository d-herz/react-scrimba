import React from "react";
import memesData from "../memesData.js"

export default function MemeForm() {

  const [memeImage, setMemeImage ] = React.useState("")

  const fetchMeme = () => {
    const memeArr = memesData.data.memes
    const ranNum = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[ranNum].url
    // console.log(ranNum)
    // console.log(`URL: ${url}`)

    setMemeImage(url)


  }

  return (
    <main className="form--main">

      <div className="form">
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
          className="form--button"
          onClick={fetchMeme}
        >
          Get a new meme image 🖼
        </button> 
      </div>

      <img src={memeImage} className="meme--image"/>

    </main>
  )
}

