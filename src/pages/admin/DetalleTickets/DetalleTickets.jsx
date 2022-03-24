import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Tickets = () => {

  const [datosArray, setDatosArray] = useState([]);


  const {id} = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/api/orders/22`)
  //     .then((response) => response.json())
  //     .then((data) => setDatosArray(data))
  //     .catch(err => alert(err))
  // }, [id]);


  // console.log(datosArray);


  let postOrder = async () => {
    try {
      let response = await fetch(`http://localhost:3001/api/orders/22`);

      let responseJson = await response.json();

      if (response.status === 200){
        console.log("Buena")
        console.log(responseJson)
        setDatosArray(responseJson)
      }
    
  } catch (err) {
    console.log(err);
  }}
  
  useEffect(() => {

    postOrder()
  }, []);

  
let articuloListos = [];
if (datosArray.articles !== 'undefined' ){
  articuloListos = datosArray.articles
}

 //


  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
      <div className="titleAdmin">
            <h1 className="title">
            <Link to="/listadotickets">
            <img src={require("../../../images/icons/ico_flechaizquierda.png")} alt="Volver al listado de tickets" className="arrowIcon"/>
            </Link>
            Ticket {id} / {datosArray.userId}</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Linea</th>
              <th>Producto</th>
              <th>Importe</th>
              <th>IVA</th>
              <th>PVP</th>
            </tr>
          </thead>
          <tbody>

          

            {articuloListos.map((item) => (
              <tr key={item.id}>
                <td data-th="Ticket:" className="div__table__center"><span>{item.id}</span></td>
                <td data-th="Mesa:" className="div__table__center"><span>{item.name}</span></td>
                <td data-th="Importe:" className="div__table__right"><span>{item.costNeto}</span></td>
                <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
                <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
              </tr>
            ))}


            {datosArray.articles.map((item) => (
              <tr key={item.id}>
                <td data-th="Ticket:" className="div__table__center"><span>{item.id}</span></td>
                <td data-th="Mesa:" className="div__table__center"><span>{item.name}</span></td>
                <td data-th="Importe:" className="div__table__right"><span>{item.costNeto}</span></td>
                <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
                <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
