import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

import "./Horarios.scss";

const Horarios = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Horarios</h1>
      <div className="horarios">
        <ul>
          <li>Lunes: Descanso</li>
          <li>Martes: 13:00h a 0:30</li>
          <li>Miércoles: 13:00h a 0:30</li>
          <li>Jueves: 13:00h a 0:30</li>
          <li>Viernes: 13:00h a 1:30</li>
          <li>Sábado: 13:00h a 1:30</li>
          <li>Domingo: 13:00h a 0:30</li>
        </ul>
        <div className="vSpace"></div>
        <Link to="/reservas">
          <button className="standardButton">Reservas</button>
        </Link>
      </div>
    </div>
  );
};

export default Horarios;
