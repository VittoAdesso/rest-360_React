import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

import { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";

import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

const initialForm = {
  diners: "",
  gift: "",
  code: "",
  experiencia: "125",
  degustacion: "70",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.gift.trim()) {
    errors.gift = "Debe seleccionar un menú";
  }

  if (!form.diners.trim()) {
    errors.diners = "El 'Número de Personas' es requerido";
  }

  return errors;
};

const Regalar = () => {
  const [setMessage] = useState("");

  const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  const codigoRandom = () => {

    // Obtenemos un codigo random, en base a 36 caracteres (abecedario + nunmeros) y con una largura de 6 (8-2).
    let codigo = Math.random().toString(36).substring(2, 8);
    return codigo;
  };

  const giftCost = () => {
    let cost = 0;
    if (form.gift === "Menú degustación") {
      cost = form.degustacion * form.diners;
    }
    if (form.gift === "Experiencia 360º") {
      cost = form.experiencia * form.diners;
    }
    console.log(cost);
    return cost;
  };

  useEffect(() => {
    if (formOK) {
      form.code = codigoRandom();
      guardadoDatos();
      console.log("listos para guardar datos");
    } else {
      return;
    }
  }, [formOK]);

  let guardadoDatos = async (e) => {
    try {
      let response = await fetch("http://localhost:3001/api/bookingGift", {
        // mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uuidv4(),
          codigo: form.code,
          typeGift: form.gift,
          numPerson: form.diners, // Importante: En ORM esta como numPerson y en el campo como numPersonas.
          cost: giftCost(),
          dateBuy: Date.now(),
          dateConsume: "",
          valid: 0,
        }),
      });
      let responseJson = await response.json();
      if (response.status === 200) {
        setMessage("Usuario creado con éxito");
      } else {
        setMessage("Ha habido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";

  return (
    <>
      <div className="mainDiv">
        <StandardHeader bgImage={bgImage} />
        <h1 className="title">Regala 360º</h1>
        {!formOK ? (
          // Si el formulario no esta OK.
          <form onSubmit={handleSubmit}>
            <div className="menuForm">
              <div className="menuForm__card">
                <h1>Menú degustación</h1>
                <h3>PVP: 70€</h3>
                <hr />
                <h4>6 pases / 1 bebida incluida</h4>
                <p>
                  La elección del menú degustación es la elección por una
                  experiencia gastronómica completa
                </p>
                <p>
                  Precio por persona
                  <br />
                  Se sirve a mesa completa
                </p>
                <input
                  type="image"
                  className="menuForm__Icon"
                  src={require("../../../images/icons/circuloMas.png")}
                  alt="Añadir al pedido"
                  name="gift"
                  value="Menú degustación"
                  onClick={handleChange}
                />
              </div>

              <div className="menuForm__card">
                <h1>Experiencia 360º</h1>
                <h3>PVP: 125€</h3>
                <hr />
                <h4>12 pases / 2 bebidas incluidas</h4>
                <p>
                  Basado en nuestro amor y respeto por el producto y la
                  sencillez.
                </p>
                <p>
                  Precio por persona
                  <br />
                  Se serve a mesa completa
                </p>
                <input
                  type="image"
                  className="menuForm__Icon"
                  src={require("../../../images/icons/circuloMas.png")}
                  alt="Añadir al pedido"
                  name="gift"
                  value="Experiencia 360º"
                  onClick={handleChange}
                />
              </div>

              <p>Número de personas:</p>
              <input
                label="1"
                type="radio"
                name="diners"
                value="1"
                onChange={handleChange}
              />
              <input
                label="2"
                type="radio"
                name="diners"
                value="2"
                onChange={handleChange}
              />
              <input
                label="3"
                type="radio"
                name="diners"
                value="3"
                onChange={handleChange}
              />
              <input
                label="4"
                type="radio"
                name="diners"
                value="4"
                onChange={handleChange}
              />
              <input
                label="5"
                type="radio"
                name="diners"
                value="5"
                onChange={handleChange}
              />
              <input
                label="6"
                type="radio"
                name="diners"
                value="6"
                onChange={handleChange}
              />
              <input
                label="7"
                type="radio"
                name="diners"
                value="7"
                onChange={handleChange}
              />
              <input
                label="8"
                type="radio"
                name="diners"
                value="8"
                onChange={handleChange}
              />
              {errors.diners && <p className="error">{errors.diners}</p>}

              <div className="vSpace"></div>
              <input className="standardButton" type="submit" value="Enviar" />
            </div>
          </form>
        ) : (
          // Si el formulario esta Ok y se ha enviado.
          <div className="confirmationLessMargin">
            <img
              className="bigIcon"
              src={require("src/images/icons/RoundedTickIcon.png")}
              alt="Pedido OK"
            />
            <div className="vSpace">
              <p>¡Gracias por confiar en nosotros!</p>
              <p>Se ha generado un Bono-Regalo<br />con el codigo: {form.code}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Regalar;
