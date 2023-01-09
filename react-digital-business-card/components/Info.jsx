import React from "react";


function Info() {
  return (
    <div className="info">
      <h1>Daniel Herz</h1>
      <h3>Software Engineer</h3>
      <h4><a href="https://WebDevDan.com">WebDevDan.com</a></h4>
      <div className="buttons">
        <button>
          <a href="#"><i className="fa-solid fa-envelope"></i> Email </a>
        </button>
        <button>
          <a href="#"><i className="fa-brands fa-linkedin"></i> LinkedIn </a>
        </button>
      </div>
    </div>
  )
}

export default Info