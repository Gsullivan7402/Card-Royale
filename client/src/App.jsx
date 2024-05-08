import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Login />
      <Card isFaceUp={false} suit="hearts" rank="ace" />
    </div>
       
  )
}

export default App
