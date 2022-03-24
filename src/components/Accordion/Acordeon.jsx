import React, { useState, useContext } from "react";
import "./styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import { CartContext } from "../CartContext/CartContext";
import { v4 as uuidv4 } from 'uuid';
const Acordeon = (props) => {
  const [deployed, setDeployed] = useState(true);

  let JSONresponse = props.response;

  const { cartItems } = useContext(CartContext);
 
  return (
    <div className="acordeonDiv">
      <div className="acordeonDiv__element">
        <div>
          <h3>{props.title}</h3>
        </div>

        {!deployed ? (
          <div onClick={() => setDeployed(true)}>
            <img
              className="acordeonDiv__element__image"
              src={require("../../images/icons/TrianguloArriba.png")}
              alt="pulsar para desplegar"
            />
          </div>
        ) : (
          <div onClick={() => setDeployed(false)}>
            <img
              className="acordeonDiv__element__image"
              src={require("../../images/icons/Trianguloabajo.png")}
              alt="pulsar para encoger"
            />
          </div>
        )}
      </div>
      {deployed ? (
        <div></div>
      ) : (
        <div className="deployedDiv">
          {JSONresponse.map((item, i) => (
            <MenuItem
              
              name={item.name}
              key={uuidv4()}
              index={i}
              isActive={item.isActive}
              type={item.type}
              image={item.image}
              timeCook={item.timeCook}
              cost={item.cost}
              iva={item.iva}
              pvp={item.pvp}

              hasGluten={item.hasGluten}
              hasEgg={item.hasEgg}
              hasFish={item.hasFish}
              hasSoja={item.hasSoja}
              hasMilk={item.hasMilk}
              hasFructose={item.hasFructose}
              hasMustard={item.hasMustard}
              hasApio={item.hasApio}
              hasMolusco={item.hasMolusco}
              hasAltramuces={item.hasAltramuces}
              hasSesamo={item.hasSesamo}
              hasSulfito={item.hasSulfito}
              hasCacahuete={item.hasCacahuete}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
           
              carta={[
                ...cartItems,
                {
                  key: item.key,
                  index: i,
                  isActive: item.isActive,
                  name: item.name,
                  id: item.id,
                  category: item.category,
                  type: item.type,
                  image: item.image,
                  timeCook: item.timeCook,
                  cost: item.cost,
                  iva: item.iva,
                  pvp: item.pvp,
                  hasGluten: item.hasGluten,
                  hasCrustaceos: item.hasCrustaceos,
                  hasEgg: item.hasEgg,
                  hasFish: item.hasFish,
                  hasSoja: item.hasSoja,
                  hasFructose: item.hasFructose,
                  hasMilk: item.hasMilk,
                  hasMustard: item.hasMustard,
                  hasApio: item.hasApio,
                  hasMolusco: item.hasMolusco,
                  hasAltramuces: item.hasAltramuces,
                  hasSesamo: item.hasSesamo,
                  hasSulfito: item.hasSulfito,
                  hasCacahuete: item.hasCacahuete,
                  createdAt: item.createdAt,
                  updatedAt: item.updatedAt,
                },
              ]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Acordeon;
