import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoReservas = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/booking")
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
            Listado de Reservas</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Día</th>
              <th>Hora</th>
              <th>PAX</th>
              <th>Nombre y Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Alergias</th>
              <th>Solicitud</th>
              <th>Ofertas</th>
              <th>Confirm.</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Nº:" className="div__table__center">{item.id}</td>
                <td data-th="Día:" className="div__table__center">{item.date}</td>
                <td data-th="Hora:" className="div__table__center">{item.hour}</td>
                <td data-th="PAX:" className="div__table__center">{item.numPerson}</td>
                <td data-th="Nombre y Apellido:" className="div__table__left">{item.name} {item.lastName}</td>
                <td data-th="Teléfono:" className="div__table__center">{item.phone}</td>
                <td data-th="Email:" className="div__table__center"><a href={`mailto:${item.email}`}>{item.email}</a></td>
                <td data-th="Alergias:" className="div__table__left">{item.isAllergic ? <img src={require("../../../images/icons/ico_punto_rojo.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}{item.isAllergic}</td>
                <td data-th="Solicitud:" className="div__table__left">{item.text}</td>
                <td data-th="Ofertas:" className="div__table__center">{item.disccount ? <img src={require("../../../images/icons/ico_punto_naranja.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</td>
                <td data-th="Confirm.:" className="div__table__center"><p className="spaceMovile">{item.confirmation ? <img src={require("../../../images/icons/ico_punto_verde.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <img src={require("../../../images/icons/ico_punto_rojo.png")} alt="Alergias" className="reservasIcon"/>Atención Alergias /
        <img src={require("../../../images/icons/ico_punto_naranja.png")} alt="Alergias" className="reservasIcon"/>Reserva con Oferta /
        <img src={require("../../../images/icons/ico_punto_verde.png")} alt="Alergias" className="reservasIcon"/>Reserva Confirmada
        </div>
      </div>
    </div>
  );
};

export default ListadoReservas;
