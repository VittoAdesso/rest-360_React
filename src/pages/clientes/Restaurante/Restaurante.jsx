import React from "react";
import PhotoCarousel from "../../../components/PhotoCarousel/PhotoCarousel";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { Link } from 'react-router-dom';
import "./styles.scss";



const Restaurante = () => {


  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage}/>
      <h1 className="title">Restaurante</h1>
      <div className="carousel">
          <PhotoCarousel />
      </div>
      <div className="sectionParagraph">
        <p>
          La cocina de rest360º está basada en los productos de la tierra, en
          elaboraciones especiadas, de sabores intensos; una cocina repleta de
          excelencias.
        </p>
        <p>
          Con nuestra carta digital de pedidos, puede realizar un <strong>pedido para
          su mesa</strong>, un pedido <strong>para recoger</strong> en nuestro restaurante o un pedido
          para <strong>envío a domicilio.</strong>
        </p>
      </div>
      <div className="dishGallery">
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/pulpo Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/croquetas Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/carneasada Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/postresofisticado Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/ensaladatropical Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/cangrejaco Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/verdurabrasa.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/plato2 Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/ensaladaconnachos Cropped.jpg")} alt="Foto de nuestros platos"/></div>
      </div>
      <div className="buttonsDiv">
      <Link to="/reservas">
          <button className="standardButton">Reservas</button></Link>
          <Link to="/carta-pedidos">
          <button className="standardButton">Carta/Pedidos</button></Link>
          <Link to="/regalar">
          <button className="standardButton">Regalar</button></Link>
      </div>
    </div>
  );
};

export default Restaurante;
