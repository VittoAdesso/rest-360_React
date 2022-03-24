import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoPlatos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
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
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Listado de Platos
          </h1>
        </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Tipo</th>
              <th>Tiempo</th>
              <th>Imp.</th>
              <th>IVA</th>
              <th>PVP</th>
              <th>Alergenos</th>
              <th>Activo</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Nº:" className="div__table__center">{item.id}</td>
                <td data-th="Nombre:" className="div__table__left">{item.name}</td>
                <td data-th="Categoría:" className="div__table__center">{item.category}</td>
                <td data-th="Tipo:" className="div__table__center">{item.type}</td>
                <td data-th="Tiempo:" className="div__table__center">{item.timeCook}</td>
                <td data-th="Imp.:" className="div__table__center">{item.cost}</td>
                <td data-th="IVA:" className="div__table__center">{item.iva}</td>
                <td data-th="PVP:" className="div__table__center">{item.pvp}</td>
                <td data-th="Alergenos:" className="div__table__center">
                  {item.hasGluten ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_gluten.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasCrustaceos ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_huevos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasEgg ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_huevos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasFish ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_pescado.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasSoja ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_soja.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasMilk ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_lactosa.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasFructose ? (
                    <img
                      src={require("../../../images/icons/Aler_Azucar.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasMustard ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_mostaza.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ):""}
                  {item.hasApio ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_apio.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasMolusco ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_moluscos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasAltramuces ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_altramuces.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasSesamo ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_sesamo.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasSulfito ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_sulfitos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                  {item.hasCacahuate ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_cacahuetes.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) :""}
                </td>

                <td data-th="Estado:" className="div__table__center">
                
                {item.isActive ? (
                  <img
                    src={require("../../../images/icons/ico_punto_verde.png")}
                    alt="Plato activado"
                    className="reservasIcon"
                  />
                ) : (
                  <img
                    src={require("../../../images/icons/ico_punto_rojo.png")}
                    alt="Plato desactivado"
                    className="reservasIcon"
                  />
                )}

                </td>

                <td data-th="Ver detalle:" className="div__table__center">
                <p className="spaceMovile">
                <Link to={`/detalleplatos/${item.id}`}>
                  <img
                    className="tableDetIcon"
                    src={require("../../../images/icons/flechaIcon.png")}
                    alt="Ver detalle del ticket"
                  /></Link></p>



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoPlatos;
