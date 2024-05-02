import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Card suit="hearts" rank="ace" />
      <Card suit="hearts" rank="king" />
    </div>
       
  )
}

export default App
