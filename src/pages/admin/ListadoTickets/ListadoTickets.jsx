import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoTickets = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/bill/") //Cambiar a bill cuando tenga datos.
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
            Listado de Tickets</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Mesa</th>
              <th>Pedido</th>
              <th>PAX</th>
              <th>Importe</th>
              <th>IVA</th>
              <th>P.V.P.</th>
              <th>Pagado</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Ticket:" className="div__table__center"><span>{item.idTicket}</span></td>
                <td data-th="Mesa:" className="div__table__center"><span>{item.idDestino}</span></td>
                <td data-th="Orden:" className="div__table__center"><span>{item.idOrder}</span></td>
                <td data-th="PAX:" className="div__table__center"><span>{item.comensales}</span></td>
                <td data-th="Importe:" className="div__table__right"><span>{item.cost}</span></td>
                <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
                <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
                <td data-th="Pagado:" className="div__table__center"><span>{item.pagado ? (<><img src={require("../../../images/icons/ico_punto_verde.png")} alt="Usuario Administrador" className="reservasIcon"/>Pagado</>):('Pendiente')}</span></td>
                <td data-th="Ver detalle:" className="div__table__center"><p className="spaceMovile"><Link to={`/detalletickets/${item.idOrder}`}><img className="tableDetIcon" src={require("../../../images/icons/flechaIcon.png")} alt="Ver detalle del ticket" /></Link></p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoTickets;
