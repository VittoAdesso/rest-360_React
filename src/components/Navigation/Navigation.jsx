import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { CartContext } from "../CartContext/CartContext";



const Navigation = () => {

  const {cartItems}  = useContext(CartContext);
  const [isChecked, setIsChecked] = useState(false);


  const handleOnChangeLogo = () => {
    // El logo solo cierra el menu cuando este está activo.
    if (isChecked){
      handleOnChange()
      
    }
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);

  };


  return (
    <nav role="navigation" className="nav" onMouseLeave={handleOnChangeLogo}>
      <div id="menuToggle">
        <input className="check" type="checkbox" value="checkHamb" checked={isChecked} onChange={handleOnChange}/>

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/" onClick={handleOnChange}>
            <li>INICIO</li>
          </Link>
          <Link to="/restaurante" onClick={handleOnChange}>
            <li>RESTAURANTE</li>
          </Link>
          <Link to="/carta-pedidos" onClick={handleOnChange}>
            <li>CARTA/PEDIDOS</li>
          </Link>
          <Link to="/reservas" onClick={handleOnChange}>
            <li>RESERVAS</li>
          </Link>
          <Link to="/socios" onClick={handleOnChange}>
            <li>SOCIOS</li>
          </Link>
          <Link to="/contacto" onClick={handleOnChange}>
            <li>CONTACTO</li>
          </Link>
        </ul>
        
      </div>

      <div className="nav__background">
        
        <div className="nav__background__logoCart">

        {cartItems.length >= 1 ? ( 
        <Link to="/su-pedido">
        <div className="nav__background__logoCart__countDiv">
           <h3 className="nav__background__logoCart__countDiv__count">{cartItems.length}</h3>
        </div>        
        <img className="nav__background__logoCart__bandeja" src={require("../../images/icons/IconoBandeja.png")} alt="Su pedido" />
        </Link> 
        ) : (
        <p></p>
        )}

        


        <Link to="/" onClick={handleOnChangeLogo}>
          <img
            className="nav__logo"
            src={require("../../images/icons/Logo360Blanco.png")}
            alt="Logo"
          />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
