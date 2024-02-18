import { useState } from 'react'
import { verifyWord } from './assets/utils'

const Game = () => {

    const [option, setOption] = useState('A');
    const [points, setPoints] = useState(0);
    const [attempts, setAttempts] = useState(3);
    const [result, setResult] = useState("");

    const words_list = [
        {
            word: "PARALELEPIPEDO",
            hint: "ruas",
        },
        {
            word: "ONOMATOPEIA",
            hint: "português",
        },
        {
            word: "ALQUIMISTA",
            hint: "química",
        },
        {
            word: "SERROTE",
            hint: "ferramenta",
        }
    ];

    const [play_word, setPlayWord] = useState(words_list[Math.floor(Math.random()*words_list.length)]);

    const [gameWord, setGameWord] = useState(' '.repeat(play_word.word.length));

    const divs = [];
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const selects = [];

    for (const element of gameWord){
        divs.push(
            <div style={{ width: "20px", height: "25px", margin: "2px", padding: "10px", border: "1px solid #ccc", backgroundColor: "white"}}>
                {element}
            </div>
        );
    }

    for(const letter of alphabet){
        selects.push(
            <option value={letter}>{letter}</option>
        );
    }

    function handlePlay() {
        const aux_game_word = gameWord;
        const temp_word = verifyWord(play_word.word, gameWord, option)
        if( temp_word != aux_game_word && attempts>0){
            setGameWord(temp_word);
            setPoints(points+1);
            if ( temp_word === play_word.word) setResult("VOCÊ CONSEGUIU!");
        } else if (attempts>=1){
            setPoints(points-1);
            setAttempts(attempts-1);
            if (attempts-1==0) setResult("GAME OVER!");
        }
    }

  return (
    <>
        <h4>Pontuação: {points}</h4>
        <h2>Adivinhe a palavra: </h2>
        <h3>Dicas sobre a palavra: <span style={{color: "yellow"}}>{play_word.hint}</span></h3>
        <h5>Você ainda tem {attempts} tentativa(s).</h5>
        <div style={{ borderColor: "yellow", color: "black", display: "flex", border: "15px solid #ff0"}}>
            {divs}
        </div>
        <h5>Tente adivinhar uma letra da palavra:</h5>
        <input type="text" style={{ marginRight: "20px", width: "20px", padding: "5px"}} onChange={(e) => (setOption(e.target.value))}/>
        <button onClick={handlePlay}>JOGAR!</button>
        <h2>{result}</h2>
    </>
  )
}

export default Game