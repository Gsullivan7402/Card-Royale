import { useState } from 'react'
import './index.css';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
       
  )
}

export default App
