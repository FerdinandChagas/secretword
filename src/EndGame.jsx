import React from 'react'

const EndGame = ({stageChange}) => {
  return (
    <div>
        <h1>Obrigado por jogar! ;)</h1>
        <button onClick={stageChange}>FINALIZAR</button>
    </div>
  )
}

export default EndGame