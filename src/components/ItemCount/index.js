import React, { useEffect } from "react";

export default function ItemCount({stock, initial, onAdd}){

const [count, setCount] = useState(parseInt(initial));
//La funcion tiene un estado useState "initial que es donde inicia."
    useEffect(() => {
        setCount(parseInt(initial));
        return;}, [initial]);
  

}