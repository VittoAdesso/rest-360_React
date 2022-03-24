import React, {useContext} from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import { UserContext } from "src/context/UserContext";

const Socios = ({user}) => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/69/b4/NbrJbPWf_o.jpg";
  
  let { firstName, lastName, email, phone, userName, rol, id } = user|| {};
  const firstNameInitial = firstName.charAt(0);
  const lastNameInitial = lastName.charAt(0);
  const navigate = useNavigate();
  const { setUsuario } = useContext(UserContext);
  const logoutUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("jwtToken")
    setUsuario(null)
    navigate("/")
  };


  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Socios</h1>
      <div className="sectionParagraph"> 
      <h2 className="subtitle">Mi perfil de usuario</h2>
      </div>
      <div className="userHeader">
      <div>
      <h3>{userName}</h3>
      <div className="roundDivProfile">
        <p className="roundDivProfile__initials">{firstNameInitial}{lastNameInitial}</p>
      </div>
      </div>


      </div>

      <div className="likeAButton">
        <p><strong>Nombre:</strong> {firstName}</p>
        <p><strong>Apellidos:</strong> {lastName}</p>
        <p><strong>E-mail:</strong> {email}</p>
        <p><strong>Teléfono</strong> {phone}</p>
      </div>

<div className="buttonsDiv">
{id === 6 ? (
        <Link to="/login">
          <button className="standardButton">INICIAR SESIÓN</button></Link>) : (<button className="standardButton" onClick={logoutUser}>CERRAR SESIÓN</button>)}


      {rol === "admin" ? (
        <Link to="/admmain">
          <button className="standardButton">Ir a ADMIN</button></Link>) : (<p></p>)}

</div>


    </div>

  );
};

export default Socios;