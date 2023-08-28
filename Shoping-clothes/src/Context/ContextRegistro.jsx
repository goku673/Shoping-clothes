import React, { createContext, useState } from "react";


export const RegistroContext = createContext();


const ProveedorRegistro = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <RegistroContext.Provider value={{ email, password, setEmail, setPassword }}>
      {props.children}
    </RegistroContext.Provider>
  );
};


export default ProveedorRegistro;