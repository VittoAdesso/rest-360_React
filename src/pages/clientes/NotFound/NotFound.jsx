import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NotFound = () => {
  return (
    <div>
      <div className="notFound">
        <div>
          <h1 className="title">La página que estás buscando no existe</h1>
        </div>

      </div>

      <div className="homeDown">
        <div>
          <p>
            Para que no te quedes con hambre, de mostramos las siguintes opciones:
          </p>
        </div>
        
        <div className="buttonsDiv">
        <div className="buttonsDiv">
        </div>
        <Link to="/">
            <button className="standardButton">Inicio</button>
          </Link>
          <Link to="/carta-pedidos">
            <button className="standardButton">Carta / Pedidos</button>
          </Link>
          <Link to="/reservas">
            <button className="standardButton">Reservar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
