import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='outer-div'>
        <div className="dices">
          <img src="./public/dices.png" alt="dice image not found" />
        </div>
        <div className="content">
          <h1>The Dice Game</h1>
          <button>Start Game</button>
        </div>
      </div>
    </>
  )
}

export default App
