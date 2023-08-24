// Registro.js
import React, { useContext, useState } from 'react';
import { RegistroContext } from '../Context/ContextRegistro';

const Registro = () => {
  const { name, password, setName, setPassword } = useContext(RegistroContext);
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    const numericCharacters = password.replace(/[^0-9]/g, '');
    if (numericCharacters.length < 2) {
      alert("La contraseña debe contener al menos 2 números");
      return;
    }
  
    if(name.length === 0 ){
       alert("complete todos los campos porfavor")
    }

        // me falta hacer que los datos se me guarden en la base de datos 

        console.log({
          name,
          password
        })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text" className="form-control" id="nombre" pattern="[A-Za-z]*" value={name}
          onChange={(e) => setName(e.target.value)}  title= "Por favor, ingresa solo letras."
        />
      </div>
      <div className="form-group">
        <label htmlFor="contraseña">Contraseña</label>
        <input
          type='password'
          className="form-control"
          id='contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="repeatPassword">Repetir contraseña</label>
        <input
          type='password'
          className="form-control"
          id='repeatPassword'
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

export default Registro;
