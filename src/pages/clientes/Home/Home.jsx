import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Home = () => {
  return (
    <div>
      <div className="homeUp">
        <div>
          <h1 className="title">Bienvenidos</h1>
          <div className="homeUp__subtitle">
            <h3 className="subtitle">COCINA CREATIVA Y DE AUTOR</h3>
          </div>
        </div>

        <div className="buttonsDiv">
          <Link to="/restaurante">
            <button className="translucidButton">Restaurante</button>
          </Link>

          <Link to="/reservas">
            <button className="translucidButton">Reservas</button>
          </Link>
        </div>
      </div>

      <div className="homeDown">
        <div>
          <p>
            La cocina de rest360º está basada en los productos de la tierra, en
            elaboraciones especiadas, de sabores intensos; una cocina repleta de
            excelencias.
          </p>
        </div>
        <div className="buttonsDiv">
          <Link to="/carta-pedidos">
            <button className="standardButton">Carta / Pedidos</button>
          </Link>
          <Link to="/regalar">
            <button className="standardButton">Regalar</button>
          </Link>
        </div>
      </div>
      <div className="footerSetter"></div>
    </div>
  );
};

export default Home;
