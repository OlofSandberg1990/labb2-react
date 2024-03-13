import React from "react";
import {Link} from "react-router-dom";


function Navbar (){
    return(
        <nav class="navbar">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/About">About</Link></li>
          <li><Link to ="/CV">CV</Link></li>
          <li><Link to ="/Portfolio">Portfolio</Link></li>
          <li><Link to ="/Other">Övrigt</Link></li>
        </ul>
      </nav>
    );
}
export default Navbar;