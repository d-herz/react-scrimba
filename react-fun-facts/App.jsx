import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"


export default function App() {
  const [mode, setMode] = React.useState(true)


  function toggleMode() {
    setMode( prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar 
        darkMode={mode}
        toggleDarkMode={toggleMode}
      />
      <Main 
        darkMode={mode}
      />
    </div>
  )
}

