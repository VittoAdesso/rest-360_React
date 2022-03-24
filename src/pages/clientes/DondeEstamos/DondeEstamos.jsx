import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

const DondeEstamos = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";
  
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Donde Estamos</h1>
      <div className="horarios">
      <h2>Rest360º</h2>
      <h3>Gran Vía, 36 / 28002 Madrid</h3>
      <div className="vSpace"></div>
      <a href="https://goo.gl/maps/y8j7xaaLndFqjF9u7" target="_blank" rel="noreferrer">
      <img src="https://www.arechavala.es/upgrade-hub/rest360/images/photos/rest360_mapa.jpg" alt="Como llegar el resturante Rest360º" width="400" heigth="295" ></img>
      </a>
        <div className="vSpace"></div>
        <Link to="/reservas">
          <button className="standardButton">Reservas</button>
        </Link>
      </div>
    </div>
  );
};

export default DondeEstamos;
