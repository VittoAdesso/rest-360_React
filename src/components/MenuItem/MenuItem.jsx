import React, { useContext } from "react";
import "./styles.scss";
import { CartContext } from "../CartContext/CartContext"

const MenuItem = (props) => {

  const {cartItems, setCartItems} = useContext(CartContext)

//Función para que quite el item actual de la lista
  const handleRemoveItem = (nombre) => { 
    let index = cartItems.findIndex(i => i.name === nombre)
    if (index > -1){
      cartItems.splice(index, 1)
      setCartItems(cartItems => [...cartItems]) //Para forzar el re render
    }
  }

 //Función para añadir el item actual a la lista 
const handleAddItem = (articulo) => {
  setCartItems(articulo)
}

  
  return (
    <div className="ItemDiv">
      <div className="menuItemDiv">
        <div className="menuItemDiv__card">
          <div className="menuItemDiv__card__image">
            <div className="roundDiv">
              <img
                className="roundImage"
                src={props.image}
                alt={props.name}
              />
            </div>
          </div>

          <div className="menuItemDiv__card__titleandtime">
            <div className="menuItemDiv__card__titleandtime__divTitle">
              <h1 className="menuItemDiv__card__titleandtime__divTitle__title">
                {props.name}
              </h1>
            </div>
            <div className="menuItemDiv__card__titleandtime__divPrice">
              <p className="menuItemDiv__card__titleandtime__divPrice__price">
                <strong>{props.pvp}€</strong>
              </p>
            </div>
          </div>


        </div>
        <div className="menuItemDiv__card__alergenos">
            {props.hasGluten ? (
              <img
                src={require("../../images/icons/ico_alerg_gluten.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasEgg ? (
              <img
                src={require("../../images/icons/ico_alerg_huevos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasFish ? (
              <img
                src={require("../../images/icons/ico_alerg_pescado.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasSoja ? (
              <img
                src={require("../../images/icons/ico_alerg_soja.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasMilk ? (
              <img
                src={require("../../images/icons/ico_alerg_lactosa.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasFructose ? (
              <img
                src={require("../../images/icons/Aler_Azucar.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasMustard ? (
              <img
                src={require("../../images/icons/ico_alerg_mostaza.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasApio ? (
              <img
                src={require("../../images/icons/ico_alerg_apio.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasMolusco ? (
              <img
                src={require("../../images/icons/ico_alerg_moluscos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasAltramuces ? (
              <img
                src={require("../../images/icons/ico_alerg_altramuces.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasSesamo ? (
              <img
                src={require("../../images/icons/ico_alerg_sesamo.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasSulfito ? (
              <img
                src={require("../../images/icons/ico_alerg_sulfitos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.hasCacahuete ? (
              <img
                src={require("../../images/icons/ico_alerg_cacahuetes.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            
            <div className="addItem">
              <img className="controlIcon" src={require("../../images/icons/ico_anadir.png")} alt="Añadir al pedido" onClick={() => handleAddItem(props.carta)}/> 
            </div>
            <div className="addItem">
            <img className="controlIcon" src={require("../../images/icons/ico_eliminar.png")} alt="Borrar del pedido" onClick={() => handleRemoveItem(props.name)}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MenuItem;
