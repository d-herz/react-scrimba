import React from "react";

import Logo from "../image/airbnb-logo.png"

export default function Navbar() {
  return (
    <nav className="navbar--main">
      <img src={Logo} />
    </nav>
  )
}