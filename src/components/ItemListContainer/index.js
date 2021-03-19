import React from "react";
import { ItemCount } from "../ItemCount";

export default function ItemListContainer(){

    // return <div class="StyleItemListContainer">En nuestra tienda online podrás comprar nuestras carpas tipi</div>  
    return (
        <div className="container ">
            Item List

            <ItemCount stock="6" initial="1" />
            </div>
    );

}