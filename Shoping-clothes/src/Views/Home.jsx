import React, { useContext } from "react";
import { ShopingContext } from "../Context/ContextShoping";

const Home = () => {
   const {shoping, setShoping} = useContext(ShopingContext);
    console.log(shoping);
    return (
        <div className="bg-red-400">
          Hola
        </div>
    )
}


export default Home;