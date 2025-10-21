import React, { useState } from "react";
import "../style/Form.css";

function CadastrarMesas() {
  const [numero, setNumero] = useState("");
  const [lugares, setLugares] = useState("");
  const [local, setLocal] = useState("");

  const cadastrar = () => {
    if (!numero || !lugares || !local) {
      alert("Por favor, preencha todos os campos antes de cadastrar!");
      return;
    }

    alert(`✅ Mesa ${numero} cadastrada com ${lugares} lugares (${local}).`);
    setNumero("");
    setLugares("");
    setLocal("");
  };

  return (
    <div className="container">
      <h2>Cadastrar Mesas</h2>

      <form className="form-reserva">
        <label>Número da mesa:</label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <label>Quantidade de lugares:</label>
        <input
          type="number"
          value={lugares}
          onChange={(e) => setLugares(e.target.value)}
        />

        <label>Localização:</label>
        <input
          type="text"
          placeholder="Ex: Área interna, varanda..."
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        />

        <button type="button" onClick={cadastrar}>
          Cadastrar Mesa
        </button>
      </form>
    </div>
  );
}

export default CadastrarMesas;
