import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopingContext = createContext();

const ProveedorShoping = (props) => {
      const [shoping, setShoping] = useState([]);
      const [categorias ,setCategorias] =useState([]);
      useEffect (() => {
         const traerData = async () => {
             const response = await axios.get('https://fakestoreapi.com/products');
             const data = response.data;
             setShoping(data);
         }
         const traerCategorias  = async() => {
             const response = await axios.get('https://fakestoreapi.com/products/categories');
             const data = response.data
             setCategorias(data);
         }
         traerData();
         traerCategorias();
      },[]);

      return (
        <ShopingContext.Provider value={{shoping,setShoping,categorias,setCategorias}}>
          {props.children}
        </ShopingContext.Provider>
      );
}

export default ProveedorShoping;