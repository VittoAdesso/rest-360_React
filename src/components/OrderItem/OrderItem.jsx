import React from "react";
import "./styles.scss";

const Ordertem = (props) => {
const pedidos = props.ordenId;

  return (
    <div className="ItemDiv">
      <div className="orderItemDiv">
        <div className="orderItemDiv__card" key={pedidos.id}>
          <h1 className="orderItemDiv__card__title">
          {pedidos.status === 4? (<img src={require("../../images/icons/ico_punto_azul.png")} alt="Pedido finalizado" className="reservasIcon"/>):('')}
          {pedidos.status === 3? (<img src={require("../../images/icons/ico_punto_verde.png")} alt="Pedido finalizado" className="reservasIcon"/>):('')}
          {pedidos.status === 2? (<img src={require("../../images/icons/ico_punto_rojo.png")} alt="Pedido finalizado" className="reservasIcon"/>):('')}
          {pedidos.status === 1? (<img src={require("../../images/icons/ico_punto_naranja.png")} alt="Pedido finalizado" className="reservasIcon"/>):('')}
          Pedido: {pedidos.id}
          </h1>
          <p className="">
            {pedidos.peopleCount}{" "}
            <img
              className="comensalesIcon"
              src={require("../../images/icons/ico_reserv_personas.png")}
              alt="Borrar del pedido"
            />{" "}
            {pedidos.pvp} €.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ordertem;
