import './App.css'
import ContextProvider from './Context/ContextCarrito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Landing from './Views/Landing/Landing';
import Registro from './Views/Registro';
function App() {
  return (
    <ContextProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/form' element = {<Registro/>}/>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;
