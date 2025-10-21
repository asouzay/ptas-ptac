import React, { useState } from "react";
import "../style/Form.css"; 

function ReservarMesas() {
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [cliente, setCliente] = useState("");
  const [contato, setContato] = useState("");
  const [mesa, setMesa] = useState("");

  const confirmar = () => {
    if (!data || !horario || !cliente || !contato || !mesa) {
      alert("Por favor, preencha todos os campos antes de confirmar!");
      return;
    }

    alert(`✅ Reserva confirmada para ${cliente} na mesa ${mesa}!`);
    setData("");
    setHorario("");
    setCliente("");
    setContato("");
    setMesa("");
  };

  return (
    <div className="container">
      <h2>Reservar Mesas</h2>

      <form className="form-reserva">
        <label>Data da reserva:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <label>Horário:</label>
        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <label>Nome do cliente:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />

        <label>Contato:</label>
        <input
          type="text"
          placeholder="Ex: (67) 99999-9999"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
        />

        <label>Seleção da mesa:</label>
        <select value={mesa} onChange={(e) => setMesa(e.target.value)}>
          <option value="">Selecione uma mesa</option>
          <option value="Mesa 1">Mesa 1</option>
          <option value="Mesa 2">Mesa 2</option>
          <option value="Mesa 3">Mesa 3</option>
        </select>

        <button type="button" onClick={confirmar}>
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
}

export default ReservarMesas;
