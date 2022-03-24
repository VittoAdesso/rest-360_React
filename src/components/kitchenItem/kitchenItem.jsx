import React, { useState, useEffect } from "react";


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
