import React, { useState, useRef } from "react";
import StandardHeader from "src/components/StandardHeader/StandardHeader";

const INITIAL_STATE = {
  order: "001",
  shipping: "Mesa",
  user: "",
  password: "",
  table: "",
};

const CompraRegistro = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

  const [order, setOrder] = useState(INITIAL_STATE);
  const [mesa, setMesa] = useState(false);
  const [socio, setSocio] = useState(false);
  const [orderForm, setOrderForm] = useState(false);

  const userInput = useRef(null);

  const submitFormMesa = (ev) => {
    ev.preventDefault();

    // Para validar que hay mesa.
    // Comprobamos en base de datos que la mese existe
    // y si es correco, validamos true a setMesa:
    setMesa(true);
    setOrderForm(false);
  };

  const submitFormSocio = (ev) => {
    ev.preventDefault();

    // forzamos un error cuando es GGG.
    if (order.user === "GGG") {
      //Error
      alert(
        "El usuario la contraseña no con correctas o no está registrado como socio."
      );
      userInput.current.focus();
    } else {
      // Para validar que es Socio.
      // Comprobamos en base de datos que socio existe
      // y si es correco, validamos true a setMesa:

      console.log("Usuario Socio correcto");
      console.log(order);
      setSocio(true);
      setOrderForm(false);
    }
  };

  const submitFormInvitado = (ev) => {
    ev.preventDefault();

    // Para validar que es Invitado.
    // Pasamos el dato al useState como invitado
    order.user = "Invitado";
    console.log(order);
    setSocio(true);
    setOrderForm(false);
  };

  //   const submitForm = (ev) => {
  //     ev.preventDefault();

  //     // Validamos campos del formulario.
  //     // let errors = {};

  //     //console.log(errors);
  //     // aqui MySQL para guardado de datos.
  //     console.log("Datos del formulario:");
  //     console.log(order);
  //     setMesa(true)
  //     setOrderForm(true);

  //     // }
  //   };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setOrder({ ...order, [name]: value });
  };

  if (!orderForm) {
    // Si no esta completo el formulario, vamos con los campos.

    // *************************
    // ** Pedidos origen Mesa **
    // *************************
    if (order.shipping === "Mesa") {
      // Es um pedido de mesa, entramos por aqui...

      if (!mesa) {
        // Preguntamos si esta el campo table. Y si no lo está, lo pedimos.
        return (
          <div className="mainDiv">
            <StandardHeader bgImage={bgImage} />

            <div className="divForm">
              <h1>Su pedido</h1>

              <form onSubmit={submitFormMesa}>
                <h3>Mesa del restaurante</h3>
                <p>Introduzca el código de su mesa:</p>

                <div className="gridForm">
                  <label>
                    <input
                      type="text"
                      name="table"
                      value={order.table}
                      onChange={handleInput}
                      placeholder="Cógido de su mesa *"
                    />
                  </label>
                  <div>
                    <button className="standardButton" type="submit">
                      Siguente
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      } else {
        // Tenemos campo mesa o ...
        return (
          <div className="divForm">
            <h1>Su pedido</h1>

            {/* Formulario Socios */}
            <form onSubmit={submitFormSocio}>
              <h3>Mesa: {order.table}</h3>
              <p>Continue con su pedido accediendo como Socio:</p>
              <div className="gridForm">
                <label>
                  <input
                    type="text"
                    name="user"
                    value={order.user}
                    onChange={handleInput}
                    placeholder="Usuario *"
                    ref={userInput}
                  />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    value={order.password}
                    onChange={handleInput}
                    placeholder="Contraseña *"
                  />
                </label>
                <div>
                  <button className="standardButton" type="submit">
                    Acceder
                  </button>
                </div>
              </div>
            </form>

            {/* Formulario Invitado */}
            <form onSubmit={submitFormInvitado}>
              <p>
                O como invitado.
                <br />
                Podrá registrarse más adelante:
              </p>
              <div className="gridForm">
                <button className="standardButton" type="submit">
                  Acceso invitado
                </button>
              </div>
            </form>
          </div>
        );
      }
    } else {
      // Tenemos todo el pedido completado.
      return (
        <div className="mainDiv">
          <div className="divForm">
            <h1>Su pedido</h1>
            <div className="confirmation">
              <img
                className="confirmationIcon"
                src={require("../../../images/icons/RoundedTickIcon.png")}
                alt="Facebook logo"
              />
              <div className="vSpace" />
              <p>Tu pedido está completado.</p>
            </div>
          </div>
        </div>
      );
    }
  } else {
    // es un pedido distinto a mesa.
    // Pendiente para fase 2.
  }
};

export default CompraRegistro;
