
// import React from "react"
// import ReactDOM from "react-dom"

export default function Header() {
  return (
    <header className="heade">
      <nav className="navigat">
        <img src="./react-logo.png" className="imageWidth" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

//for exporting singular component
// export default Header (moved to same line as function declare)