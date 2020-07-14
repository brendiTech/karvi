import React, {Component} from 'react';
import Menu from '../images/Menu.svg';
import Logo from '../images/Logo.svg';
import iconcar from '../images/iconcar.svg';
import user from '../images/user.svg';

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={Menu} alt="botonmenu" className="btn-menu"/>
      <img src={Logo} alt="Logo" className="logo"/>
      <div className="menuoptions">
        <ul>
          <li><a href="">Novos</a></li>
          <li><a href="">Usados</a></li>
          <li><a href="">Venda seu carro</a></li>
        </ul>
      </div>
      <div className="options">
        <div className="carro">
          <a href="">
          <img src={iconcar} alt="carro"/>
          Meus carros
          </a>
        </div>
        <div className="user">
          <a href="">
          <img src={user} alt="icon-user"/>
          Pedro Gomez
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;