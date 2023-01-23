import React from "react";
import HeadShot from "../images/headshot.png"


function Header() {
  return (
    <div>
      <img className="headshot" src={HeadShot} alt="Portrait headshot"/>
    </div>
  )
}

export default Header
