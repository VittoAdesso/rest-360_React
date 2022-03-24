import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Navigate } from "react-router-dom";
import { useForm } from "src/Hooks/useForm";
import { FormControl } from "@chakra-ui/react";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [idUser, setIdUser] = useState(uuidv4());

  const [message, setMessage] = useState("");

  //Estado inicial del formulario
  const initialForm = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
  };

  //Validaciones del formulario
  const validationsForm = (form) => {
    let errors = {};

    if (!form.userName.trim()) {
      errors.userName =
        "Introduce un apodo, será tu nombre de usuario en la aplicación";
    }
    if (!form.firstName.trim()) {
      errors.firstName = "Introduce tu nombre";
    }
    if (!form.lastName.trim()) {
      errors.lastName = "Introduce tus apellidos";
    }
    if (!form.email.trim()) {
      errors.email = "Introduce tu correo electrónico";
    }
    if (!form.password.trim()) {
      errors.password = "Introduce tu contraseña";
    }
    if (!form.phone.trim()) {
      errors.phone = "Introduce tu número de teléfono";
    }
    if (!form.dateOfBirth.trim()) {
      errors.dateOfBirth = "Introduce tu fecha de nacimiento";
    }
    
    if (!form.privacy) {
      errors.privacy = "Debe aceptar la política de privacicad";
    }

    return errors;
  };

  const { form, errors, formOK, isChecked, handleCheck, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  const goToLogin = () => {
    return (
      <Navigate to="/login" state={{ prevRoute: window.location.pathname }} />
    );
  };

  let registerUser = async () => {
    try {
      // let response = await fetch("http://localhost:3001/api/users/register", {
        let response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idUser: uuidv4(),
          userName: form.userName,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          phone: form.phone,
          dateOfBirth: form.dateOfBirth,
        }),

      });
      let responseJson = await response.json();
      if (response.status === 200) {
        // setUserName(form.userName);
        // setFirstName(form.firstName);
        // setLastName(form.lastName);
        // setEmail(form.email);
        // setPassword(form.password);
        // setPhone(form.phone);
        // setDateOfBirth(form.dateOfBirth);

        setMessage("Usuario creado con éxito");
        setTimeout(() => {
          goToLogin();
        }, 750);
      } else {
        setMessage("Ha habido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Efecto que controla si el formulario está correcto
  useEffect(() => {
    if (formOK) {
      console.log("Usuario registrado correctamente");
      registerUser();
    } else {
      return;
    }
  }, [formOK]);

  return (
    <div className="divForm">
      {!formOK ? (
        // Si el formulario no esta OK.
       <>
        <div className='"sectionParagraph'>
          <h3>Introduzca los datos solicitados, y ¡forme parte ahora de la familia Rest360!</h3>
        </div>


        <form onSubmit={handleSubmit}>
          <div className="div__datos">
            <p>Datos personales:</p> 
            <input
              type="text"
              name="userName"
              placeholder="Usuario / Apodo *"
              onChange={handleChange}
              value={form.userName}
            />
            {errors.userName && <p className="error">{errors.userName}</p>}

            <label>
              <input
                type="text"
                name="firstName"
                placeholder="Nombre *"              
                onChange={handleChange}
                value={form.firstName}
              />
            </label>
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <label>
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos *"    
                onChange={handleChange}
                value={form.lastName}
              />
            </label>
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <label>
              <input
                type="email"
                name="email"
                placeholder="Email *"  
                onChange={handleChange}
                value={form.email}
              />
            </label>
            {errors.email && <p className="error">{errors.email}</p>}

            <label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña *"  
                onChange={handleChange}
                value={form.password}
              />
            </label>
            {errors.password && <p className="error">{errors.password}</p>}

            <label>
              <input
                type="number"
                name="phone"
                placeholder="Teléfono *"  
                onChange={handleChange}
                value={form.phone}
              />
            </label>
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>
              <p>Fecha de nacimiento</p>
              <input
                type="date"
                format="yyyy-mm-dd"
                name="dateOfBirth"
                onChange={handleChange}
                value={form.dateOfBirth}
              />
            </label>
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

            <label>
              <input
                type="checkbox"
                name="privacy"
                value= {!isChecked? 'ok':''}
                checked={isChecked}
                onChange={handleCheck}
              />
              Acepto Políticas de Privacidad.
            </label>
            {errors.privacy && <p className="error">{errors.privacy}</p>}

            <div>
              <button className="standardButton" type="submit">
                Registrarme
              </button>
            </div>

            {message && <div style={{ color: "tomato" }}>{message}</div>}
            </div>
        </form>
        </> 
      ) : (
        // Si el formulario esta Ok y se ha enviado.
        <div className="confirmationLessMargin">
          <img
            className="bigIcon"
            src={require("src/images/icons/RoundedTickIcon.png")}
            alt="Pedido OK"
          />
          <div className="vSpace" >
            <p>¡Gracias por confiar en nosotros!</p>
            <p>Te has registrado con éxito.</p>
          </div>

        </div>
      )}
    </div>
  );
};

export default RegisterForm;
