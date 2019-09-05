import React, { Component } from 'react';

import logo from '../assets/facebook-1.png';

class Header extends Component{
render(){
  return(
    <header>
      <nav>
        <img src={ logo } alt="facebook"/>
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
        </nav>
    </header>
  );
}
}

export default Header;