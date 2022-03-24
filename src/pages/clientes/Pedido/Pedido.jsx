import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "src/components/CartContext/CartContext";
import Acordeon from "src/components/Accordion/Acordeon";
import StandardHeader from "src/components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

const Pedido = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";
  //Contexto de carrito
  const {cartItems}  = useContext(CartContext);
  const {setPvp}  = useContext(CartContext);
  //Pedido por categorías
  const [entrantesArray, setEntrantesArray] = useState([]);
  const [principalesArray, setPrincipalesArray] = useState([]);
  const [segundosArray, setSegundosArray] = useState([]);
  const [postresArray, setPostresArray] = useState([]);
  const [bebidasArray, setBebidasArray] = useState([]);


  //Filtrado del pedido completo en arrays de categorías
      useEffect(() => {
        setEntrantesArray(cartItems.filter(plato => plato.category === "Entrante"))
        setPrincipalesArray(cartItems.filter(plato => plato.category === "Primeros"))
        setSegundosArray(cartItems.filter(plato => plato.category === "Segundos"))
        setPostresArray(cartItems.filter(plato => plato.category === "Postres"))
        setBebidasArray(cartItems.filter(plato => plato.category === "Bebidas"))
    }, [cartItems] ); 

  //Suma del total de todos los artículos
  const precioTotalTemp = cartItems.reduce ((acumulador, plato) => {return acumulador + parseFloat(plato.pvp, 10)}, 0 );
  const precioTotal = precioTotalTemp.toFixed(2)
  
  //Comprobando cuantos artículos hay en la cesta
  const cantidadDeArticulos = cartItems.length;

  //Seteando el precio del pedido en el contexto de carrito
  setPvp(precioTotal)

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Su pedido</h1>
      <div className="sectionParagraph">
        <p>
          Su pedido está compuesto por los siguientes productos:
        </p>
      </div>

      <div>
        <h1>{cantidadDeArticulos}</h1>
        <h3>Artículos</h3>
      </div>

      
 
      <Acordeon title="ENTRANTES" response={entrantesArray} key="EntrantesDelPedido"/>
      <Acordeon title="PINCIPALES" response={principalesArray} key="PrincipalesDelPedido"/>
      <Acordeon title="SEGUNDOS" response={segundosArray} key="SegundosDelPedido"/>
      <Acordeon title="POSTRES" response={postresArray} key="PostresDelPedido"/>
      <Acordeon title="BEBIDAS" response={bebidasArray} key="BebidasDelPedido"/>
    
      <div>
        <h2>Total a pagar: <strong><h1>{precioTotal} €</h1></strong></h2>
      </div>

      <div className="buttonsDiv">
          <Link to="/su-pedido/en-mesa">
            <button className="standardButton">Realizar pedido</button>
          </Link>
        </div>
    </div>
  );
}

export default Pedido