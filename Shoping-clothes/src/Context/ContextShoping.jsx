import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopingContext = createContext();

const ShoppingProvider = (props) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    
    const getCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    }

    getProducts();
    getCategories();
     
    
  }, []);

  return (
    <ShopingContext.Provider value={{products, categories}}>
      {props.children}  
    </ShopingContext.Provider>
  );
}

export default ShoppingProvider;