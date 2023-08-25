import React, { createContext, useState } from "react";


export const RegistroContext = createContext();


const ProveedorRegistro = (props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <RegistroContext.Provider value={{ name, password, setName, setPassword }}>
      {props.children}
    </RegistroContext.Provider>
  );
};


export default ProveedorRegistro;