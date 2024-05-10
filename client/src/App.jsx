import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Login from './components/Login';
import Homepage from './pages/HomePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Login />
      <Homepage />

    </div>
       
  )
}

export default App
