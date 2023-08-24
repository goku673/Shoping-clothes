import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y utiliza "as Router"
import Landing from './Views/Landing/Landing';
import Registro from './Views/Registro';

function App() {
  return (
    
      <Router> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path = "/form" element={<Registro/>}/>
        </Routes>
      </Router>
   
  )
}

export default App;
