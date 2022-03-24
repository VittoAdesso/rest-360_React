import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import OrderCardtem from "src/components/OrderCardItem/OrderCardItem";

import "./styles.scss";

const PedidosEnCurso = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [comandaDatos, setComandaDatos] = useState([]);
  const [comanda, setComanda] = useState();

  const handleSelectItem = (ev) => {
    setComanda(ev);
  };

  //Fetch de pdidos al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/orders")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  useEffect(() => {
    // fetch(`http://localhost:3001/api/orderArticles/order/${comanda}`)
    fetch(`http://localhost:3001/api/orderArticles/order/1`)
      .then((response) => response.json())
      .then((data) => setComandaDatos(data));
  }, [comanda]);

  console.log("Vemos comanda")
  console.log(comandaDatos)

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
          <h1 className="title">
            <Link to="/admmain">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Pedidos en Curso
          </h1>
        </div>

        <div className="detallePedidos">
          <div className="orderItem">
            {datosArray.map((pedidos) => (
              <div
                className="orderItemDiv__card"
                key={pedidos.id}
                onClick={() => handleSelectItem(pedidos.id)}
              >
                <OrderItem ordenId={pedidos} key={pedidos.id} />
              </div>
            ))}
          </div>

          <div className="orderDetailItem__card">


          {comandaDatos.length > 0 ? <OrderCardtem comandaId={comandaDatos} /> : <p>Seleccione un pedido para ver los datos</p>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosEnCurso;
