import React, { useState, useEffect, useContext } from "react";
import StandardHeader from "src/components/StandardHeader/StandardHeader";
import { useForm } from "../../../Hooks/useForm";
import { CartContext } from "src/components/CartContext/CartContext";
import { Link } from "react-router-dom";

const PedidoMesa = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/3b/b3/gCfNWEuG_o.jpg";

  //Seteadores necesarios para el pedido
  const [idMesa, setIdMesa] = useState(0);
  const [mesaFound, setMesaFound] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [order, setOrder] = useState({});
  const [articleArray, setArticleArray] = useState([]);

  //Contexto de carrito
  const { cartItems } = useContext(CartContext);
  const { pvp, setPvp } = useContext(CartContext);
  const { iva, setIva } = useContext(CartContext);
  const { costNeto, setCostNeto } = useContext(CartContext);

  //Estado inicial del formulario
  const initialForm = {
    diners: "",
    idTable: "",
  };

  //Comprobar si la mesa existe en la base de datos
  useEffect(() => {
    fetch(`http://localhost:3001/api/tables/${form.idTable}`)
      .then((response) => response.json())
      .then((data) => setIdMesa(data.id));
  });

  //Mapear el array de ids de artículos
  useEffect(() => {
    setArticleArray(cartItems.map((item) => item.id));
  }, [cartItems]);

  //Validaciones del formulario
  const validationsForm = (form) => {
    let errors = {};

    if (!form.diners.trim()) {
      errors.diners = "El 'Número de Personas' es requerido";
    }
    if (!form.idTable.trim()) {
      errors.idTable = "El número de mesa es requerido";
    }
    return errors;
  };

  //estado inicial del formulario
  const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  //Suma del total del pvp de todos los artículos
  const pvpTotalTemp = cartItems.reduce((acumulador, plato) => {
    return acumulador + parseFloat(plato.pvp, 10);
  }, 0);
  const pvpTotal = pvpTotalTemp.toFixed(2);
  useEffect(() => {
    setPvp(pvpTotal);
  });

  //Suma del total del precio neto de todos los artículos
  const precioNetoTemp = cartItems.reduce((acumulador, plato) => {
    return acumulador + parseFloat(plato.costNeto, 10);
  }, 0);
  const precioNeto = precioNetoTemp.toFixed(2);
  useEffect(() => {
    setCostNeto(precioNeto);
  });

  //Suma del total del iva de todos los artículos
  const ivaTotalTemp = cartItems.reduce((acumulador, plato) => {
    return acumulador + parseFloat(plato.iva, 10);
  }, 0);
  const ivaTotal = ivaTotalTemp.toFixed(2);
  useEffect(() => {
    setIva(ivaTotal);
  });

  //Obteniendo la fecha actual
  const current = new Date();
  const date = current.toISOString();
  //const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}T${current.getHours()}:${current.getMinutes()}${current.getSeconds()}Z`;

  //Seteando a true la variable mesaFound si la mesa introducida existe en base de datos
  useEffect(() => {
    idMesa === parseInt(form.idTable)
      ? setMesaFound(true)
      : setMesaFound(false);
  }, [idMesa, form.idTable]);

  const userString = localStorage.getItem("user");
  let id = 6;

  if (userString) {
    const userObject = JSON.parse(userString);
    id = userObject.id;
  }
// <<<<<<< HEAD
  
// =======

// >>>>>>> 6bf7fd20bb83a03523ea1cc14aa64c4949e42b7c
  //POST del pedido y los artículos a la base de datos
  let postOrder = async () => {
    try {
      let response = await fetch("http://localhost:3001/api/orders/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          peopleCount: form.diners,
          costNeto: costNeto,
          iva: iva,
          pvp: pvp,
          status: 1,
          date: date,
          userId: id,
          articlesIds: articleArray,
          idTable: idMesa,
        }),
      });
      let responseJson = await response.json();

      if (response.status === 200) {
        console.log("Pedido Enviado");
        console.log("Pedido enviado a cocina");
        console.log("RESPONSE -->", response);
        console.log("RESPONSE JSON -->", responseJson);
        setOrder(responseJson);
        localStorage.setItem("order", JSON.stringify(responseJson));
        setOrder(order);
        setOrderSent(true);
        console.log("Pedido enviado a cocina con éxito");
      } else {
        console.log(
          "Ha fallado el envío del pedido a cocina. Por favor, asegúrese de haber introducido bien el número de mesa o póngase en contacto con el personal"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Efecto que controla si el formulario está correcto
  useEffect(() => {
    if (formOK && mesaFound === true) {
      console.log(
        "Datos del formuario correctos. Realizando orden de pedido al servidor"
      );
      postOrder();
    } else {
      return;
    }
  }, [formOK]);

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <div className="divForm">
        <h1 className="title">Su Pedido</h1>

        {!formOK ? (
          // Si el formulario no esta OK.
          <div className="formDiv">
            <form onSubmit={handleSubmit}>
              <div className="buttonsDiv">
                <p>Introduzca el número de su mesa</p>
                <input
                  label="1"
                  type="number"
                  name="idTable"
                  onChange={handleChange}
                />
              </div>
              {errors.idTable && <p className="error">{errors.idTable}</p>}

              <div className="peopleDiv">
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
              </div>
              {errors.diners && <p className="error">{errors.diners}</p>}

              <input className="standardButton" type="submit" value="Enviar" />
            </form>
          </div>
        ) : (
          // Si el formulario esta Ok y se ha enviado.
          <>
            <div className="confirmation">
              {orderSent === true ? (
                <>
                  <div>
                    <img
                      className="bigIcon"
                      src={require("../../../images/icons/RoundedTickIcon.png")}
                      alt="Pedido OK"
                    />
                    <div className="vSpace" />
                    Pedido enviado a cocina
                    <div className="vSpace" />
                    Número de mesa: {form.idTable}
                    <br />
                    <div className="vSpace" />
                    Personas: {form.diners}
                    <br />
                    <div className="vSpace" />
                    Precio total:{" "}
                    <h2>
                      {pvp}€ ({cartItems.length} artículos)
                    </h2>
                    <br />
                    <div className="vSpace" />
                    ¡Gracias por venir a comer a nuestro restaurante!
                  </div>
                </>
              ) : (
                <div>
                  <h2>Ha habido un error enviando el pedido a cocina.</h2>
                  <h2>
                    Por favor, póngase en contacto con el personal del
                    restaurante. Disculpe las molestias.
                  </h2>
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <Link to="/">
            <button className="standardButton">Inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PedidoMesa;
