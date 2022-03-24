import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoRegalos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/bookingGift")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
      <div className="titleAdmin">
            <h1 className="title">
            <Link to="/admmain">
            <img src={require("../../../images/icons/ico_flechaizquierda.png")} alt="Volver al menú de administración" className="arrowIcon"/>
            </Link>
            Listado de Regalos</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Código Secreto</th>
              <th>Regalo</th>
              <th>PAX</th>
              <th>Precio</th>
              <th>Fecha Compra</th>
              <th>Fecha Consumo</th>
              <th>Validado</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Nº:" className="div__table__center">{item.id}</td>
                <td data-th="Código Secreto:" className="div__table__center">{item.codigo}</td>
                <td data-th="Regalo:" className="div__table__center">{item.typeGift}</td>
                <td data-th="PAX:" className="div__table__center">{item.numPersonas}</td>
                <td data-th="Precio:" className="div__table__center">{item.cost}</td>
                <td data-th="Fecha Compra:" className="div__table__center">{item.dateBuy}</td>
                <td data-th="Fecha Consumo:" className="div__table__center">{item.dateConsume === '0000-00-00' ?'':item.dateConsume}</td>
                <td data-th="Validado:" className="div__table__center"><p className="spaceMovile">{item.valid ? <img src={require("../../../images/icons/ico_ok.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</p></td>

              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <img src={require("../../../images/icons/ico_ok.png")} alt="Alergias" className="reservasIcon"/>Bono regalo canjeado correctamente
        </div>
      </div>
    </div>
  );
};

export default ListadoRegalos;
