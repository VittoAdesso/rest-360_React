import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import OrderCardtem from "src/components/OrderCardItem/OrderCardItem";
import KitchenItem from "src/components/kitchenItem/kitchenItem";

import "./styles.scss";

const Cocina = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [comandaDatos, setComandaDatos] = useState([]);
  const [comanda, setComanda] = useState();
  const [cocinaDatos, setCocinaDatos] = useState([]);

  /* Estados de la cocina */

  const [pedidosCocina, setPedidosCocina] = useState([]);
  const [elaboracionCocina, setElaboracionCocina] = useState([]);
  const [terminadosCocina, setTerminadosCocina] = useState([]);
  const [servidoCocina, setServidosCocina] = useState([]);
  const [ticketCocina, setTicketCocina] = useState([]);
  
  const [noSonTicket, setNoSonTicket] = useState([]);
  const [pedidosArray, setPedidosArray] = useState([]);
  const [platejos, setPlatejos] = useState([]);
  const [finalArray, setFinalArray] = useState([]);


  const handleSelectItem = (ev) => {
    setComanda(ev);
  };

  //Fetch de pdidos al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/orders")
      .then((response) => response.json())
      .then((data) => setCocinaDatos(data));
  }, []);
  console.log("cocinadatos--->", cocinaDatos)

  useEffect(()=>{
    setNoSonTicket(cocinaDatos.filter(numeropedido => numeropedido.status < 5))
  }, [cocinaDatos])
  console.log("no son ticket--->", noSonTicket)

useEffect(()=>{
  setPedidosArray([]);
}, [])

//
useEffect(()=>{
  for (let pedido of noSonTicket){
    fetch(`http://localhost:3001/api/orders/${pedido.id}`)
    .then((response) => response.json())
    .then((data) => pedidosArray.push(data))//setPedidosArray([...pedidosArray, data]));
}}, [noSonTicket, pedidosArray],)
console.log("Pedidos Array--->", pedidosArray)


console.log("Pedidoarray articles--->", pedidosArray.articles)

useEffect(()=>{
  setPlatejos([]);
}, [])

  useEffect(()=> {
    for (let index of pedidosArray){
      let platoAMeter = index.articles
      platejos.push(platoAMeter)
      console.log("index.articles--->", platoAMeter)
     }
  },[pedidosArray, platejos])
  console.log("PLATEJOS--->", platejos)

  useEffect(()=>{
    setFinalArray([]);
  }, [])

  useEffect(()=> {
    for (let index of platejos){
      console.log("INDEXXXXXXXX->", index)
      for (let ind of index){
        finalArray.push(ind.orderArticle)
      }
     }
  },[])



  useEffect(() => {
    setPedidosCocina( 
      finalArray.filter((plato) => plato.status === 1)
    );
    setElaboracionCocina(
      finalArray.filter((plato) => plato.status === 2)
    );
    setTerminadosCocina(
      finalArray.filter((plato) => plato.status === 3)
    );
    setServidosCocina(
      finalArray.filter((plato) => plato.status === 4)
    );
  },[]);

console.log("PEDIDOS COCINAAAAAAAAAAAA-->", pedidosCocina)

  return (
    <div className="mainDiv">
      <div className="sectionParagraph_cocina">
        <div className="titleAdmin_cocina">
          <h1 className="title">
            <Link to="/admmain">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Cocina
          </h1>
        </div>

        <div className="detallePedidos">
          <div className="estadoItem">
            <h1>Pedidos ({pedidosCocina.length})</h1>
            {pedidosCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv"}
                  type={"pedidos"}
                />
              </div>
            ))}
          </div>

          <div className="estadoItem">
            <h1>Elaboración ({elaboracionCocina.length})</h1>
            {elaboracionCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv red"}
                  type={"elaboracion"}
                />
              </div>
            ))}
          </div>

          <div className="estadoItem">
            <h1>Terminados ({terminadosCocina.length})</h1>
            {terminadosCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv green"}
                  type={"terminado"}
                />
              </div>
            ))}
          </div>

          <div className="kitchenDetailItem__card">
          <div className="kitchenDetailItem__card">
            <div >
              <h1>Servidos</h1>
                <div className="kitchenDetailItem__card__azul"><h1 className="textH1">{servidoCocina.length}</h1></div>

            </div>

            <div >
              <h1>Ticket</h1>
              <div className="kitchenDetailItem__card__naranja"><h1 className="textH1">{ticketCocina.length}</h1></div>

            </div>

          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocina;
