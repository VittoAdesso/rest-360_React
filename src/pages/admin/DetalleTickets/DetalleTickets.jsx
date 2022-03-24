import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [articuloListos, setArticuloListos] = useState([]);
  const [datosCargados, setDatosCargados] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/orders/${id}`)
      .then((response) => response.json())
      .then((data) => setDatosArray(data))
      .catch((err) => alert(err));
  }, [id]);

  console.log(datosArray);

  let count = 0;
  // let datosCargados = false;
  useEffect(() => {
    const id = setInterval(function log() {
      count++;
      console.log(`Count es: ${count}`);

      if (datosArray !== "undefinec") {
        console.log("datoscargados");
        setDatosCargados(true);
        setArticuloListos(datosArray.articles);
        clearInterval(id);
      }
    }, 1000);

    //Esta es la función de limpieza
    return () => {
      clearInterval(id);
    };
  }, [count]);

  // let postOrder = async () => {
  //   try {
  //     let response = await fetch(`http://localhost:3001/api/orders/22`);

  //     let responseJson = await response.json();

  //     if (response.status === 200){
  //       console.log("Buena")
  //       console.log(responseJson)
  //       setDatosArray(responseJson)
  //     }

  // } catch (err) {
  //   console.log(err);
  // }}

  // useEffect(() => {

  //   postOrder()
  // }, []);

  // let articuloListos = [];
  // if (datosArray.articles !== 'undefined' ){
  //   articuloListos = datosArray.articles
  // }

  //

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
          <div>
          <h1 className="title">
            <Link to="/listadotickets">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al listado de tickets"
                className="arrowIcon"
              />
            </Link>
            Ticket
            </h1>
            </div>
          </div>
          <div>
            <div>
            <h3>
            Número: {datosArray.id} / 
            Comensales: {datosArray.peopleCount} / 
            Importe: {datosArray.costNeto} / 
            IVA: {datosArray.iva} / 
            PVP: {datosArray.pvp} / 
            Estado: {datosArray.status}
            <br />
            {/* Cliente: {datosArray.user.firstName} {datosArray.user.lastName} / 
            Teléfono: {datosArray.user.phone} / 
            Email: {datosArray.user.email} */}

            </h3>
            </div>

{/* 

        "user": {

        "userName": "daB",
        "firstName": "David",
        "lastName": "Balboa",
        "phone": "65812965",
        "email": "daB@gmail.com",
 */}


         
        </div>

        {datosCargados ? (
          <>
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
                {datosArray.articles.map((item) => (
                  <tr key={item.id}><td data-th="Ticket:" className="div__table__center"><span>{item.id}</span></td>
                    <td data-th="Mesa:" className="div__table__center"><span>{item.name}</span></td>
                    <td data-th="Importe:" className="div__table__right"><span>{item.costNeto}</span></td>
                    <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
                    <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          "Cargando datos ..."
        )}
      </div>
    </div>
  );
};

export default Tickets;
