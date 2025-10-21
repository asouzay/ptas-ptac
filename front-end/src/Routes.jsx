import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import CadastrarMesas from "./pages/CadastrarMesas";
import ReservarMesas from "./pages/ReservarMesas";

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/reservar" />} />
        <Route path="/cadastrar" element={<CadastrarMesas />} />
        <Route path="/reservar" element={<ReservarMesas />} />
      </Routes>
    </Router>
  );
}
