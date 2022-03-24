import React, { useState, useEffect } from "react";
import "./styles.scss";

const OrderCardtem = (props) => {
  const [orderId, setOrderId] = useState([]);
  const comanda = props.comandaId;

  useEffect(() => {
    fetch(`http://localhost:3001/api/orders/${comanda}`)
      .then((response) => response.json())
      .then((data) => setOrderId(data));
  }, [comanda]);
  

  return (
    <div className="ItemDiv">
      <div className="orderCardDiv">
        <div className="orderCardDiv__card">
          {/* <table className="rwd-table sinborde">
            <tbody>
              <tr key={orderId.id}>
                <td colSpan="3" className="div__table__left">
                  <h1 className="orderCardDiv__card__title">
                    Detalle del pedido
                  </h1>
                </td>
                <td rowSpan="2" className="div__table__center">
                  <img
                    className="controlIcon"
                    src={require("../../images/icons/flechaIcon.png")}
                    alt="Añadir al pedido"
                  />
                </td>
              </tr>
              <tr>
                <td className="div__table__center">
                  Pedido: {orderId.idOrder} / {orderId.idDestino}
                  <br />
                  {orderId.day}
                </td>
                <td className="div__table__center">
                  {orderId.numPerson}
                  <img
                    className="controlIcon"
                    src={require("../../images/icons/ico_reserv_personas.png")}
                    alt="Añadir al pedido"
                  />
                </td>
                <td className="div__table__right">{orderId.pvp} €.</td>
              </tr>
            </tbody>
          </table> */}

          <table className="rwd-table">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {comanda.map((item) => (
                <tr key={item.id}>
                  <td data-th="Estado:" className="div__table__center">{item.estado ? (<><img src={require("../../images/icons/ico_punto_verde.png")} alt="Usuario Administrador" className="reservasIcon"/>Cerrado</>):('Pendiente')}</td>
                  <td data-th="Producto:" className="div__table__left">{item.idArticle}</td>
                  <td data-th="Producto:" className="div__table__center">{item.costNeto}<p className="spaceMovile"></p></td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default OrderCardtem;
