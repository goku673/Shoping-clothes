import React, { createContext, useState } from "react";
const Context = createContext();

export default function ContextProvider({children}){
    

    const [data, setData] = useState("Este es el dato del contexto");

    return(
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    )
}





