import React from 'react';
import logo from './logo.svg';
import './Header.css'

const Header = () => {
  return(
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" height="30"/>
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#trabalhos" className="nav-link">TRABALHOS</a>
            </li>

            <li className="nav-item">
              <a href="#contato" className="nav-link">CONTATO</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;