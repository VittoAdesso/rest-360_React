import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";

import "./DetallePlatos.scss";

const initialForm = {
  name: "",
  surnames: "",
  phone: "",
  email: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El 'Nombre' es requerido";
  }

  if (!form.phone.trim()) {
    errors.phone = "El 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El 'Email' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El 'Comentario' es requerido";
  }

  if (!form.privacy) {
    errors.privacy = "Debe aceptar la política de privacicad";
  }

  return errors;
};

const DetallePlatos = () => {
  const {
    form,
    errors,
    formOK,
    isChecked,
    handleCheck,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const [datosArray, setDatosArray] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, [id]);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="tituloYPagina">
          <div className="titleAdmin">
            <h1 className="title">
              <Link to="/listadoplatos">
                <img
                  src={require("../../../images/icons/ico_flechaizquierda.png")}
                  alt="Volver al listado de tickets"
                  className="arrowIcon"
                />
              </Link>
              Plato: {datosArray.name}
            </h1>
          </div>
          <div className="pagination">
            <Link to={`/detalleplatos/${parseInt(id) - 1}`}>
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al listado de tickets"
              />
            </Link>
            {id}
            <Link to={`/detalleplatos/${parseInt(id) + 1}`}>
              <img
                src={require("../../../images/icons/ico_flechaderecha.png")}
                alt="Volver al listado de tickets"
              />
            </Link>
          </div>
        </div>
        <hr />
        <div className="detallePlato">
          <div className="detallePlato__img">
            <img
              className="imgPlate"
              src={datosArray.image}
              alt={datosArray.name}
            />
          </div>

          <div className="detallePlato_card">
            <form onSubmit={handleSubmit} className="formDetallePlato">
              {/* <p>Datos de contacto:</p> */}

              <div className="isActive">
                {datosArray.isActive ? (
                  <img
                    src={require("../../../images/icons/ico_punto_verde.png")}
                    alt="Plato activado"
                    className="isActive"
                  />
                ) : (
                  <img
                    src={require("../../../images/icons/ico_punto_rojo.png")}
                    alt="Plato desactivado"
                    className="isActive"
                  />
                )}
              </div>

              <div className="vSpace"></div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre *"
                onChange={handleChange}
                value={datosArray.name}
                
              />

              <label>Categoría:</label>
              <input
                type="text"
                name="surnames"
                placeholder="Categoría *"
                onChange={handleChange}
                value={datosArray.category}
              />

              <label>Tipo:</label>
              <input
                type="text"
                name="surnames"
                placeholder="Categoría *"
                onChange={handleChange}
                value={datosArray.type}
              />

              <div className="menuItemDiv__card__alergenos">
                {datosArray.hasGluten ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_gluten.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasEgg ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_huevos.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasFish ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_pescado.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasSoja ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_soja.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasMilk ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_lactosa.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasFructose ? (
                  <img
                    src={require("../../../images/icons/Aler_Azucar.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasMustard ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_mostaza.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasApio ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_apio.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasMolusco ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_moluscos.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasAltramuces ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_altramuces.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasSesamo ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_sesamo.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasSulfito ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_sulfitos.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}
                {datosArray.hasCacahuete ? (
                  <img
                    src={require("../../../images/icons/ico_alerg_cacahuetes.png")}
                    alt="Gluten"
                    className="alergenoIcon"
                  />
                ) : (
                  ""
                )}

                <div className="vSpace"></div>

                <label>Tiempo (min.):</label>
                <input
                  className="inputNumber"
                  type="text"
                  name="Tiempo"
                  placeholder="Tiempo de cocinado"
                  value={datosArray.timeCook}
                />

                <label>Importe (€.):</label>
                <input
                  className="inputNumber"
                  type="text"
                  name="importe"
                  placeholder="PVP *"
                  onChange={handleChange}
                  value={datosArray.costNeto}
                />

                <label>IVA (€.):</label>
                <input
                  className="inputNumber"
                  type="text"
                  name="iva"
                  placeholder="IVA"
                  onChange={handleChange}
                  value={datosArray.iva}
                />

                <label>PVP (€.):</label>
                <input
                  className="inputNumber"
                  type="text"
                  name="pvp"
                  placeholder=""
                  onChange={handleChange}
                  value={datosArray.pvp}
                />

                <div className="vSpace"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallePlatos;
