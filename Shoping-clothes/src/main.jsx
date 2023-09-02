import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ProveedorRegistro from './Context/ContextRegistro.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorCarrito from './Context/ContextCarrito.jsx'
import ProveedorShoping from './Context/ContextShoping.jsx'
import ProveedorCards from './Context/ContextCard.jsx'

ReactDOM.render(
  <BrowserRouter>
    
      <ProveedorCarrito>
        <ProveedorRegistro>
          <ProveedorShoping>
            <App />
          </ProveedorShoping>
        </ProveedorRegistro>
      </ProveedorCarrito>
   
  </BrowserRouter>,
  document.getElementById('root')
);