import { useState } from 'react'
import './App.css'
import Bebida from './components/bebida'

function App() {
  const [bebida, setBebida] = useState([])

  const carregarBebidas = async () => {
    try {
      const res = await fetch('http://localhost:3000/bebida')
      const data = await res.json()
      setBebida(data)
      console.log("bebidas", data)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <button onClick={carregarBebidas}>Carregar Bebidas</button>

      <Bebida bebida={bebida}/>
    </div>
    
  )
}

export default App
