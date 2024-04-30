import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/logo-bigL.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logotipo" className="logo" />
      </Link>
      <ul className="menu">
        <Link to="/quem-somos">
          <li>Quem somos</li>
        </Link>
        <Link to="/servicos">
          <li>Serviços</li>
        </Link>
        <Link to="/contato">
          <li>Contato</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
