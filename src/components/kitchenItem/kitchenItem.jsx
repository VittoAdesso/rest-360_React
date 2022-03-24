import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../CartContext/CartContext";

import "./styles.scss";

const KitchenItem = (props) => {
  const lineaPedido = props.ordenId;

  const [articulo, setArticulo] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/api/articles/${lineaPedido.articleId}`)
      .then((response) => response.json())
      .then((data) => setArticulo(data));
  }, [lineaPedido.articleId]);
  

  console.log("Linea Pedido--->", lineaPedido)

  //   const {cartItems, setCartItems} = useContext(CartContext)
  //   const [valor, setValor] = useState(0);

  //Función para que quite el item actual de la lista
  //   const handleRemoveItem = (nombre) => {
  //     let index = cartItems.findIndex(i => i.name === nombre)
  //     if (index > -1){
  //       cartItems.splice(index, 1)
  //       setCartItems(cartItems => [...cartItems]) //Para forzar el re render
  //     }
  //   }

  //  //Función para añadir el item actual a la lista
  // const handleAddItem = (articulo) => {
  //   setCartItems(articulo)
  // }
//
  // const contador = funcionContador();

  //Fetch de pdidos al servidor


  
  return (
    <div className="ItemDiv">
      <div className={props.style}>
        <div className="kitchenItemDiv__card">
          <div className="kitchenItemDiv__card__title">
            <h1>{articulo.name}</h1>
          </div>
        </div>

        <div className="kitchenItemDiv__card__datos">
          <div className="kitchenItemDiv__card__datos__image">
            <div className="kitchenItemDiv__card__datos__image__roundDiv">
              <img
                className="roundImage"
                src={articulo.image}
                alt={articulo.name}
              />
            </div>
          </div>

          <div>
            <div className="kitchenItemDiv__card__titleandtime__divTime">
              <h1 className="kitchenItemDiv__card__titleandtime__divTime__time">
                {articulo.timeCook} min.
              </h1>

              <div className="kitchenItemDiv__card__botones">
                <div className="addItem">
                  {props.type === "pedidos" ? (
                    <img
                      className="kitchenItemIconAdelante"
                      src={require("../../images/icons/ico_flechaderecha.png")}
                      alt="Borrar del pedido"
                      // onClick={() => handleRemoveItem(props.name)}
                    />
                  ) : (
                    <p></p>
                  )}

                  {props.type === "elaboracion" ? (
                    <>
                      <img
                        className="kitchenItemIconAtras"
                        src={require("../../images/icons/ico_flechaizquierda_negra.png")}
                        alt="Añadir al pedido"
                        // onClick={() => handleAddItem(props.carta)}
                      />
                      <img
                        className="kitchenItemIconAdelante"
                        src={require("../../images/icons/ico_flechaderecha_roja.png")}
                        alt="Borrar del pedido"
                        // onClick={() => handleRemoveItem(props.name)}
                      />
                    </>
                  ) : (
                    <p></p>
                  )}

                  {props.type === "terminado" ? (
                    <>
                      <img
                        className="kitchenItemIconAtras"
                        src={require("../../images/icons/ico_flechaizquierda_negra.png")}
                        alt="Añadir al pedido"
                        // onClick={() => handleAddItem(props.carta)}
                      />
                      <img
                        className="kitchenItemIconAdelante"
                        src={require("../../images/icons/ico_flechaderecha_verde.png")}
                        alt="Borrar del pedido"
                        // onClick={() => handleRemoveItem(props.name)}
                      />
                    </>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenItem;
