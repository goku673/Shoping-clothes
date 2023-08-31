import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopingContext = createContext();

const ProveedorShoping = (props) => {
      const [shoping, setShoping] = useState([]);

      useEffect (() => {
         const traerData = async () => {
             const response = await axios.get('https://fakestoreapi.com/products');
             const data = response.data;
             setShoping(data);
         }
         traerData();
      },[]);

      return (
        <ShopingContext.Provider value={{shoping,setShoping}}>
          {props.children}
        </ShopingContext.Provider>
      );
}

export default ProveedorShoping;