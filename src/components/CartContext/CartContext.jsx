import React, { useState } from "react";

export const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [pvp, setPvp] = useState(0);
    const [iva, setIva] = useState(0);
    const [costNeto, setCostNeto] = useState(0);
    const [dateOrder, setDateOrder] = useState("");

    const store = {
      cartItems,
      setCartItems,
      pvp,
      setPvp,
      iva,
      setIva,
      dateOrder,
      setDateOrder,
      costNeto,
      setCostNeto
    };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}