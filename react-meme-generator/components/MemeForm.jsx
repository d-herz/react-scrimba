import React from "react";

export default function MemeForm() {

  //State for tracking the text input changes
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })
  
  //State for holding/maintaining "all memes" returned from the API, initialised to an empty array before fetch
  const [allMemes, setAllMemes] = React.useState([]) 

  //Use Effect for data fetching from API, and setting returned data to our state array "allMemes" (by way of setAllMemes)
  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => {
        // console.log(data.data.memes)
        return setAllMemes(data.data.memes)
      })
    
  },[])
  
  //function for generating a random meme image from the array when button pressed
  function fetchMeme (){
    const ranNum = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[ranNum].url
    
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }
  
  //function for tracking state changes on text input
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
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

