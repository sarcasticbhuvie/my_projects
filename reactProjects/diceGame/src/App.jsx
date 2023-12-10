import { useState } from 'react';
import StartGame from './assets/components/StartGame';
import GamePlay from './assets/components/GamePlay';
import './App.css'
function App() {
  const [isGameStarted,setInGameStarted]=useState(false);
  const toggleGamePlay = ()=>{
    setInGameStarted((prev)=>!prev);
  };
  return (
    <>
{ 
      isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
    }
    </>
  );
}

export default App
