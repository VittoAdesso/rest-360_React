import React, { useState, useContext, useEffect } from "react";
import LoginForm from "src/components/LoginForm/LoginForm";
import { UserContext } from "src/context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import StandardHeader from "src/components/StandardHeader/StandardHeader";

const IniciarSesion = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

  const { usuario, setUsuario } = useContext(UserContext);
  const navigate = useNavigate();
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [loginError, setLoginError] = useState("");

  //Fetch de los usuarios registrados al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsuariosRegistrados(data));
  }, []);

  useEffect(() => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("user"));
    setUsuario(usuarioLogueado);

  }, []);

  const loginUser = (formData, prevRoute) => {
    const existsUser = usuariosRegistrados.find(
      (element) =>
        element.password === formData.password &&
        element.email === formData.email
    );

    if (existsUser) {
      setUsuario(existsUser);
      setLoginError("");
      navigate(prevRoute || "/");
    } else {
      setUsuario(false);
      setLoginError("No existe el usuario o la contraseña no coincide");
    }
  };

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Iniciar Sesión</h1>
      <div className="sectionParagraph">
        <h3>
          Por favor, introduzca su correo electrónico y contraseña para iniciar
          sesión.
        </h3>
      </div>
      <LoginForm loginUser={loginUser} loginError={loginError} />
      <div className="vSpace"></div>
      <div className="sectionParagraph">
        <p>¿Aún no tienes cuenta?</p>
          <Link to="/registro">
            <button className="standardButton">Regístrate</button>
          </Link>
      </div>
      <div className="footerSetter"></div>
    </div>
  );
};

export default IniciarSesion;
