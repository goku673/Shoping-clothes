import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Navbar, Container } from 'react-bootstrap';
import ContextProvider from './Context/Context';



function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="bg-blue-700 text-black px-4 py-2 rounded" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My App</Navbar.Brand>
      </Navbar>
      <Button variant="primary" className="bg-blue-500 text-white">Haz clic</Button>

    </Container>

    </ContextProvider>
  )
}

export default App
