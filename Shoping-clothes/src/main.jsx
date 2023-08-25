import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProveedorRegistro from './Context/ContextRegistro.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorRegistro>
      <App />
    </ProveedorRegistro>
  </React.StrictMode>,
)



