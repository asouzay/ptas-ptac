import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>🍽️ Sistema de Reservas de Mesas</h1>
      <nav>
        <Link to="/cadastrar">Cadastrar Mesas</Link>
        <Link to="/reservar">Reservar Mesas</Link>
      </nav>
    </header>
  );
}
