import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./styles.scss";

const DetallePedidos = () => {
  const [datosArray, setDatosArray] = useState([]);
  const { id } = useParams();

  //Fetch de pedidos al servidor
  useEffect(() => {
    fetch(`http://localhost:3001/api/orders/1`)
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, [id]);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
          <h1 className="title">
            <Link to="/listadopedidos">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Detalle de Pedidos
          </h1>
        </div>

        <div className="detalleCabecera">
          <div className="datosOrdenCabecera">
            <p>Pedido: {datosArray.id}</p>
            <p>Dia / Hora:{datosArray.date}</p>
          </div>
          <div className="datosUsuarioCabecera">
            <p>
              {datosArray.userId} / {datosArray.peopleCount}
            </p>
            <p>{datosArray.pvp}</p>
          </div>

          {datosArray.userId}
          {datosArray.costNeto}
          {datosArray.iva}

          {datosArray.status ? (
            <>
              <img
                src={require("../../../images/icons/ico_punto_verde.png")}
                alt="Usuario Administrador"
                className="reservasIcon"
              />
              Cerrado
            </>
          ) : (
            "Pendiente"
          )}
        </div>
      </div>
    </div>
  );
};

export default DetallePedidos;
