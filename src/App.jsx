import { useState } from 'react'
import './App.css'
import Game from './Game'
import EndGame from './EndGame'

function App() {

  const stages = [
    { id: 1, name: "start"},
    { id: 2, name: "game"},
    { id: 3, name: "endgame"}
  ]
  const [stage, setStage] = useState(stages[0])

  const startGame = () => {
    setStage(stages[1]);
  }

  const endGame = () => {
    setStage(stages[2]);
  }

  const resetGame = () => {
    setStage(stages[0]);
  }

  return (
    <div>
      { stage.name == "start" &&
        <div> 
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>COMEÇAR JOGO</button>
        </div>
      }
      { stage.name == "game" && <Game stageChange={endGame}/> }
      { stage.name == "endgame" && <EndGame stageChange={resetGame}/> }
    </div>
  )
}

export default App
