import React, {useState, useEffect} from "react";
import Acordeon from "src/components/Accordion/Acordeon";
import StandardHeader from "src/components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

const CartaPedidos = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/c1/2d/UgwCbQiR_o.jpg";


  //Props para el componente Acordeón:

  //Carta completa
  const [cartaArray, setCartaArray] = useState([]);
  //Carta por categorías
  const [entrantesArray, setEntrantesArray] = useState([]);
  const [principalesArray, setPrincipalesArray] = useState([]);
  const [segundosArray, setSegundosArray] = useState([]);
  const [postresArray, setPostresArray] = useState([]);
  const [bebidasArray, setBebidasArray] = useState([]);


  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
    .then ((response) => response.json())
    .then((data) => setCartaArray(data))
  },[]);

  //Filtrado de la carta completa en arrays de categorías
  useEffect(() => {
    setEntrantesArray(cartaArray.filter(plato => plato.category === "Entrante"))
    setPrincipalesArray(cartaArray.filter(plato => plato.category === "Primeros"))
    setSegundosArray(cartaArray.filter(plato => plato.category === "Segundos"))
    setPostresArray(cartaArray.filter(plato => plato.category === "Postres"))
    setBebidasArray(cartaArray.filter(plato => plato.category === "Bebidas"))
  },[cartaArray]);


  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Carta / Pedidos</h1>
      <div className="sectionParagraph">
        <p>
          La cocina de rest360º está basada en los productos de la tierra, en
          elaboraciones especiadas, de sabores intensos; una cocina repleta de
          excelencias.
        </p>
        <p>
          Con nuestra carta digital de pedidos, puede realizar un{" "}
          <strong>pedido para su mesa</strong>, un pedido{" "}
          <strong>para recoger</strong> en nuestro restaurante o un pedido para{" "}
          <strong>envío a domicilio.</strong>
        </p>
      </div>
      <Acordeon title="ENTRANTES" response={entrantesArray} key="Entrantes"/>
      <Acordeon title="PINCIPALES" response={principalesArray} key="Principales"/>
      <Acordeon title="SEGUNDOS" response={segundosArray} key="Segundos"/>
      <Acordeon title="POSTRES" response={postresArray} key="Postres"/>
      <Acordeon title="BEBIDAS" response={bebidasArray} key="Bebidas"/>
      <div className="buttonsDiv">
          <Link to="/su-pedido">
            <button className="standardButton">Ver Pedido</button>
          </Link>
        </div>
    </div>
  );
};

export default CartaPedidos;
