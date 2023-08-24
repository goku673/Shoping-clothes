import './App.css'
import ContextProvider from './Context/ContextCarrito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Landing from './Views/Landing/Landing';

function App() {
  return (
    <ContextProvider>
      <Router> 
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App;
