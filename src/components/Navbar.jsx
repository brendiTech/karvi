import React, {Component} from 'react';
import Menu from '../images/Menu.svg';
import Logo from '../images/Logo.svg';
import '../css/navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Menu} alt="botonmenu" className="btn-menu"/>
      <img src={Logo} alt="Logo" className="logo"/>
    </div>
  );
};

export default Navbar;