import React, { useEffect } from "react";

export default function ItemCount({stock, initial, onAdd}){

const [count, setCount] = useState(parseInt(initial));
//La funcion tiene un estado useState "initial que es donde inicia."
    
    useEffect(() => {
        setCount(parseInt(initial));
        return;
    }, [initial]);

    const addHandle = () => {
        setCount(count + 1);
    }

    const removeHandle = () => {
        setCount (count - 1);
    };
  
    return(
        <div class="boxItem">
        <button
        disabled={count <= 0}
        onClick={removeHandle}
         type="button" class="btn btn-outline-dark">-</button>
         <div>{count}</div>
        <button 
         disabled={count >= stock}
         onClick={addHandle}
        type="button" class="btn btn-outline-dark">+</button>
        <button
        onClick={onAdd}
         type="button" class="btn btn-outline-dark">Agregar al carrito</button>
      </div>
    );    

}