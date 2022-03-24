import React from "react";
import { Link } from "react-router-dom";

const AdmMain = () => {
  return (
    <div>
      <div className="homeUp">
        <div>
          <h1 className="title">Rest360º / Admin</h1>
        </div>
      </div>

      <div className="admContainer">
        <div className="admButtonSpace">


          {/* <Link to="/pedidosencurso">
            <button className="admButton">Pedidos en curso</button>
          </Link> */}

        </div>
        <div className="admButtonSpace">
          <Link to="/listadopedidos">
            <button className="admButton">Pedidos</button>
          </Link>
          <Link to="/listadotickets">
            <button className="admButton">Tickets</button>
          </Link>
          <Link to="/listadoreservas">
            <button className="admButton">Reservas</button>
          </Link>
        </div>
        <div className="admButtonSpace">
          <Link to="/listadoplatos">
            <button className="admButton">Platos</button>
          </Link>
          <Link to="/listadousuarios">
            <button className="admButton">Usuarios</button>
          </Link>

          <Link to="/listadoregalos">
            <button className="admButton">Regalos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmMain;
