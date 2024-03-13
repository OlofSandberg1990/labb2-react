import React from "react";
import "../components/Header.css";
import pcImage from "../images/pcLogo3.png";

function Header (){
    return(
        
<header>

        <div className="header-logo-container">
        <img
          src={pcImage}
          alt="bild på en dator"
          class="headerLogo"
          />
      </div>
      <div className="header-text-container">
        <h1>Min CV:sida</h1>
        <h2>- Olof Sandberg -</h2>
        <h3>Systemutvecklare</h3>
      </div>
</header>
        
    
    );
}
export default Header;