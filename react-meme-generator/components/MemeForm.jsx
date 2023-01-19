import React from "react";
import memesData from "../memesData.js"

export default function MemeForm() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })
  
  // const [allMemeImages, setAllMemeImages] = React.useState(memesData) //what is this for?

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  function fetchMeme () {
    const memeArr = memesData.data.memes
    const ranNum = Math.floor(Math.random() * memeArr.length);
    const url = memeArr[ranNum].url

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  return (
    <main className="form--main">

      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button
          className="form--button"
          onClick={fetchMeme}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>


    </main>
  )
}

