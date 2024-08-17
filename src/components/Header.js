import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg mt-1">
      <a className="navbar-brand text-white logoSetting" href="#">Instalaciones CC</a>
        <ul className="navbar-nav linksSetting">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Horarios</a>
          </li>
        </ul>
    </nav>
  );
};

export default Header;