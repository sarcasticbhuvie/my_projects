import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='outer-div'>
        <div className="dices">
          <img src="./public/dices.png" alt="dice image not found" />
        </div>
        <div className="content">
          <div className="content-inner">
            <h1>The Dice Game</h1>
            <button onClick={toggle}>Start Game</button>
          </div>
        </div>
    </div>
      )
}

export default StartGame