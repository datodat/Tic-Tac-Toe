import React, { useState } from 'react';
// Css
import './app.css';
// Components
import Board from './components/Board';
import Settings from './components/Settings';
import Info from './components/Info';
// Helper
import { chechWinnerO, checkWinnerX } from './helper';

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
    setScoreO(0);
    setScoreX(0);
    setGame(['', '', '', '', '', '', '', '', '']);
    setTurnX(true);
  }

  const changeTurn = (index) => {
    if(game[index] === ''){
      const newArray = [...game];
      newArray[index] = turnX ? 'X' : 'O';
      setGame(newArray);
      setTurnX(!turnX);

      checkWinners(newArray);
    }else{
      return;
    }
  }

  const checkWinners = (arr) => {
    if(checkWinnerX(arr)){
      alert('Winner is X');
      const emptyArray = ['', '', '', '', '', '', '', '', ''];
      setGame(emptyArray);
      setScoreX(scoreX + 1);
      setTurnX(true);
    }else if(chechWinnerO(arr)){
      alert('Winner is O');
      const emptyArray = ['', '', '', '', '', '', '', '', ''];
      setGame(emptyArray);
      setScoreO(scoreO + 1);
      setTurnX(true);
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