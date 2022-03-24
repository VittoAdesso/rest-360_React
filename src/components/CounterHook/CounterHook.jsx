import React, { useState } from "react";

export const useCounter = () => {
    const [valor, setValor] = useState(0);

    const incremento = () => {
        setValor(valor + 1);
    }

    const decremento = () => {
        setValor(valor - 1);
    }

    return {
        valor,
        incremento,
        decremento,
    }
}

export default function CustomHook() {
    const counter = useCounter();
    return (
        <div>
            <div><p>Cantidad: {counter.valor}</p></div>
            <button onClick={counter.incremento}>+</button>
            <button onClick={counter.decremento}>-</button>
           
        </div>
    );
}