import './App.css'
import ContextProvider from './Context/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y utiliza "as Router"
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
