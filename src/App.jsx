import { useState } from 'react'
import './App.css'
import Game from './Game'

function App() {

  const [begin, setBegin] = useState(false)

  return (
    <div>
      { begin === false? (
        <div> 
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={() => (setBegin(true))}>COMEÇAR JOGO</button>
        </div>
      ):(
        <Game/>
      )}
    </div>
  )
}

export default App
