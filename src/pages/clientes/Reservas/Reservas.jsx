import React, { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";

const initialForm = {
  diners: "",
  date: "",
  hour: "",
  name: "",
  surnames: "",
  phone: "",
  email: "",
  allergies: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.diners.trim()) {
    errors.diners = "El 'Número de Personas' es requerido";
  }

  if (!form.date.trim()) {
    errors.date = "La 'Fecha' es requerida";
  }

  if (!form.hour.trim()) {
    errors.hour = "La 'Hora' es requerida";
  }

  if (!form.name.trim()) {
    errors.name = "El 'Nombre' es requerido";
  }

  if (!form.surnames.trim()) {
    errors.surnames = "El 'Apellido' es requerido";
  }
  if (!form.phone.trim()) {
    errors.phone = "El 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El 'Email' es requerido";
  }

  if (!form.privacy) {
    errors.privacy = "Debe aceptar la política de privacicad";
  }

  return errors;
};

const Reservas = () => {
  const [message, setMessage] = useState("");
  const {
    form,
    errors,
    formOK,
    isChecked,
    handleCheck,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  useEffect(() => {
    if (formOK) {
      guardadoDatos();
    } else {
      return;
    }
  }, [formOK]);

  let guardadoDatos = async (e) => {
    try {
      let response = await fetch("http://localhost:3001/api/booking/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idReserva: uuidv4(),
          date: form.date,
          hour: form.hour,
          numPerson: form.diners,
          name: form.name,
          lastName: form.surnames,
          phone: form.phone,
          email: form.email,
          allergic: form.allergies,
          text: form.comments,
          ofertas: form.newsletter ? 1 : 0,
          confirmacion: 0,
        }),
      });
      let responseJson = await response.json();
      if (response.status === 200) {
        setMessage("Usuario creado con éxito");
        //initialForm()

        // setTimeout(() => {
        //   goToLogin()
        // }, 750)
      } else {
        setMessage("Ha habido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <div className="divForm">
        <h1 className="title">Reservas</h1>

        {!formOK ? (
          // Si el formulario no esta OK.
          <form onSubmit={handleSubmit}>
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

            <p>Seleccione una fecha:</p>
            <label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                placeholder="Fecha"
              ></input>
            </label>
            {errors.date && <p className="error">{errors.date}</p>}

            <p>Seleccione una hora;</p>
            <p className="hora">Comida:</p>
            <input
              label="13:30"
              type="radio"
              name="hour"
              value="13:30"
              onChange={handleChange}
            />
            <input
              label="14:00"
              type="radio"
              name="hour"
              value="14:00"
              onChange={handleChange}
            />
            <input
              label="14:30"
              type="radio"
              name="hour"
              value="14:30"
              onChange={handleChange}
            />
            <input
              label="15:00"
              type="radio"
              name="hour"
              value="15:00"
              onChange={handleChange}
            />
            <p className="hora">Cena:</p>
            <input
              label="20:30"
              type="radio"
              name="hour"
              value="20:30"
              onChange={handleChange}
            />
            <input
              label="21:00"
              type="radio"
              name="hour"
              value="21:00"
              onChange={handleChange}
            />
            <input
              label="21:30"
              type="radio"
              name="hour"
              value="21:30"
              onChange={handleChange}
            />
            <input
              label="22:00"
              type="radio"
              name="hour"
              value="22:00"
              onChange={handleChange}
            />
            {errors.hour && <p className="error">{errors.hour}</p>}

            <div className="div__datos">
              <p>Datos personales:</p>
              <input
                type="text"
                name="name"
                placeholder="Nombre *"
                onChange={handleChange}
                value={form.name}
              />
              {errors.name && <p className="error">{errors.name}</p>}

              <input
                type="text"
                name="surnames"
                placeholder="Apellidos *"
                onChange={handleChange}
                value={form.surnames}
              />
              {errors.surnames && <p className="error">{errors.surnames}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Telefono *"
                onChange={handleChange}
                value={form.phone}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <input
                type="email"
                name="email"
                placeholder="Escribe tu email *"
                onChange={handleChange}
                value={form.email}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <p>Otra información:</p>
              <input
                type="text"
                name="allergies"
                placeholder="Alergias"
                onChange={handleChange}
                value={form.allergies}
              />

              <textarea
                name="comments"
                cols="50"
                rows="5"
                placeholder="Solicitud particular"
                onChange={handleChange}
                value={form.comments}
              />

              <label>
                <input
                  type="checkbox"
                  name="privacy"
                  value={!isChecked ? "ok" : ""}
                  checked={isChecked}
                  onChange={handleCheck}
                />
                Acepto Políticas de Privacidad.
              </label>
              {errors.privacy && <p className="error">{errors.privacy}</p>}

              <div className="vSpace"></div>
              <input className="standardButton" type="submit" value="Enviar" />
              {message && <div style={{ color: "tomato" }}>{message}</div>}
            </div>
          </form>
        ) : (
          // Si el formulario esta Ok y se ha enviado.
          <>
            <div className="confirmation">
              <img
                className="bigIcon"
                src={require("../../../images/icons/RoundedTickIcon.png")}
                alt="Facebook logo"
              />
              <div className="vSpace" />
              Tu reserva se ha registrado con éxito.
              <div className="vSpace" />
              Día: {form.date}
              <br />
              Hora: {form.hour}
              <br />
              Personas: {form.diners} <br />
              <div className="vSpace" />
              ¡Te esperamos!
            </div>

            <Link to="/">
              <button className="standardButton">Inicio</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Reservas;
