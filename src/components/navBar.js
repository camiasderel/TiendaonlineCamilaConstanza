import React from "react";

export const NavBar = () => {
    return( 
    <div>
    <nav>        
    <div class="nav-wrapper cyan lighten-5">
    <a href="#" class="brand-logo light-blue darken-4 typeTextLogo">Sueños de Retoño</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down cyan lighten-5">      
        <li><a href="#" class="colorTextMenu" >Home.</a></li>
        <li><a href="#" class="colorTextMenu">Tienda Online</a></li>
        <li><a href="#" class="colorTextMenu">Armá tu pijamada</a></li>
        <li><a href="#" class="colorTextMenu">Galeria</a></li>          
        <li><a href="#" class="colorTextMenu">Contactanos</a></li>
      </ul>
    </div>
  </nav>
  </div>  
    );
}