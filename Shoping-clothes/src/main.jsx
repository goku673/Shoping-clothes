import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ProveedorRegistro from './Context/ContextRegistro.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorCarrito from './Context/ContextCarrito.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorCarrito>
    <ProveedorRegistro>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProveedorRegistro>
    </ProveedorCarrito>
  </React.StrictMode>,
)



