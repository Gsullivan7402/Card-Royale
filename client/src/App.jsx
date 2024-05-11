import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Login from './components/Login';
import Gamefield from './components/Gamefield';
import Homepage from './pages/HomePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Login />
      <Gamefield />
      <Homepage />

    </div>
       
  )
}

export default App
