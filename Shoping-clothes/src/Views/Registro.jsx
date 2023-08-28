import React, { useContext, useState } from 'react';
import { RegistroContext } from '../Context/ContextRegistro';
import axios from 'axios';

const Registro = () => {
  const { email, password, setEmail, setPassword } = useContext(RegistroContext);
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('El email no es válido');
      return;
    }

    if (password !== repeatPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    const numericCharacters = password.replace(/[^0-9]/g, '');
    if (numericCharacters.length < 2) {
      alert('La contraseña debe contener al menos 2 números');
      return;
    }

    if (email.length === 0) {
      alert('Complete todos los campos por favor');
      return;
    }

    // Petición HTTP para guardar en base de datos
    const response = (await axios.post('http://localhost:3003/user/mgDB', {
      email,
      password
    })).data;

    console.log(response);

    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  return (
    <div className='flex justify-center'>
      <div className='w-1/3  mt-16 bg-white rounded-md shadow-md'>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-7 rounded-md">
          <h2 className="text-2xl font-bold mb-6">Registro</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>

            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              password
            </label>

            <input
              type="password"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="repeatPassword" className="block text-gray-700 text-sm font-bold mb-2">
               repit password
            </label>

            <input
              type="password"
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
