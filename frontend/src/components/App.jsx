/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import mainLogo from "../img/logo1.jpg"

function App() {
  return (
    <div className="App">

        <nav id="header">
          <div className="logo">
            <a href="#">
              <img src={mainLogo} alt="logo-img"></img><span> ANMVL </span>
            </a>
          </div>
        </nav>

    </div>
  );
}

export default App;
