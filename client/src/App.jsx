import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Login />
      <Logout />
    </div>
       
  )
}

export default App
