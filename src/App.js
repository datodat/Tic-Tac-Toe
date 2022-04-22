import React, { useState } from 'react';
// Css
import './app.css';
// Components
import Board from './components/Board';
import Settings from './components/Settings';
import Info from './components/Info';

const App = () => {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draw, setDraw] = useState(0);

  const [turnX, setTurnX] = useState(true);

  const [game, setGame] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ])

  const restartGame = () => {

  }

  const changeTurn = (index) => {
    if(game[index] === ''){
      const newArray = [...game];
      newArray[index] = turnX ? 'X' : 'O';
      setGame(newArray);
      setTurnX(!turnX);
    }else{
      return;
    }
  }

  return (
    <div className='container'>
      <div className='game-div'>
        <Settings
          turn={turnX}
          restartGame={restartGame}
        />
        <Board
          boxes={game}
          turn={turnX}
          changeTurn={changeTurn}
        />
        <Info 
          scoreO={scoreO} 
          scoreX={scoreX} 
          draw={draw} 
        />
      </div>
    </div>
  );
}

export default App;