import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ProveedorRegistro from './Context/ContextRegistro.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorCarrito from './Context/ContextCarrito.jsx'
import ProveedorShoping from './Context/ContextShoping.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorCarrito>
       <ProveedorRegistro>
         <ProveedorShoping>
           <BrowserRouter>
             <App />
           </BrowserRouter>
         </ProveedorShoping>
      </ProveedorRegistro>
    </ProveedorCarrito>
  </React.StrictMode>,
)



