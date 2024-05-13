import { useState } from 'react'
import './index.css';
import Header from './components/Header';
import Homepage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Homepage />
    </div>
       
  )
}

export default App
