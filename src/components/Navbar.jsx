import React, {Component} from 'react';
import Menu from '../images/Menu.svg';
import Logo from '../images/Logo.svg';
import iconcar from '../images/iconcar.svg';
import user from '../images/user.svg';
import '../css/navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Menu} alt="botonmenu" className="btn-menu"/>
      <img src={Logo} alt="Logo" className="logo"/>
      <div className="menuoptions">
        <ul>
          <li>Novos</li>
          <li>Usados</li>
          <li>Venda seu carro</li>
        </ul>
      </div>
      <div className="options">
        <div className="carro">
          <img src={iconcar} alt="carro"/>
          <a href="">Meus carros</a>
        </div>
        <div className="user">
          <img src={user} alt="icon-user"/>
          <a href="">Pedro Gomez</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;