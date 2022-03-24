import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoUsuarios = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/users") //Cambiar a bill cuando tenga datos.
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
            Listado de Usuarios</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre y Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Cumpleaños</th>
              <th>RollUser</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Usuario:" className="div__table__left"><span>{item.userName}</span></td>
                <td data-th="Nombre y Apellido:" className="div__table__left"><span>{item.firstName} {item.lastName}</span></td>
                <td data-th="Teléfono:" className="div__table__center"><span>{item.phone}</span></td>
                <td data-th="Email:" className="div__table__center"><span><a href={`mailto:${item.email}`}>{item.email}</a></span></td>
                <td data-th="Cumpleaños:" className="div__table__center"><span>{item.dateOfBirth}</span></td>
                <td data-th="RollUser:" className="div__table__left"><span><p className="spaceMovile">
                {item.rol === 'admin'? (<><img src={require("../../../images/icons/ico_punto_verde.png")} alt="Usuario Administrador" className="reservasIcon"/>{item.rol}</>):('')}
                {item.rol === 'chef'? (<><img src={require("../../../images/icons/ico_gorro.png")} alt="Usuario Administrador" className="reservasIcon"/>{item.rol}</>):('')}
                </p></span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
