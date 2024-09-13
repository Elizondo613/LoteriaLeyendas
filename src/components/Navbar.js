import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.lluviadeideaseditorial.com/">Inicio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://www.lluviadeideaseditorial.com/">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.lluviadeideaseditorial.com/">Lotería de las leyendas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.lluviadeideaseditorial.com/">Contacto</a>
            </li>
          </ul>
          <div className="navbar-brand">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
