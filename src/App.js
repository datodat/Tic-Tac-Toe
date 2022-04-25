import React, { useState, useEffect } from 'react';
// Css
import './app.css';
// Components
import Board from './components/Board';
import Settings from './components/Settings';
import Info from './components/Info';
// Helper
import { checkWinner } from './helper';

const App = () => {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draw, setDraw] = useState(0);

  const [notification, setNotification] = useState('');
  const [turnX, setTurnX] = useState(true);
  const [count, setCount] = useState(0);
  const [game, setGame] = useState(Array(9).fill(null));

  useEffect(() => {
    checkWinners(game);
  });

  const restartGame = () => {
    setScoreO(0);
    setScoreX(0);
    setDraw(0);
    setCount(0);
    setGame(Array(9).fill(null));
    setTurnX(true);
  }

  const makeTurn = (index) => {
    if(game[index] === null && 
       notification === ''){
      const newArray = [...game];
      newArray[index] = turnX ? 'X' : 'O';
      setGame(newArray);
      setTurnX(!turnX);
      setCount(count + 1);
    }else{
      return;
    }
  }

  const checkWinners = (arr) => {
    const result = checkWinner(arr);
    if(result === 'X'){
      setNotification('Winner X!');
      setTimeout(() => {
        setGame(Array(9).fill(null));
        setScoreX(scoreX + 1);
        setTurnX(true);
        setCount(0);
        setNotification('');
      }, 2000);
    }else if(result === 'O'){
      setNotification('Winner O!');
      setTimeout(() => {
        setGame(Array(9).fill(null));
        setScoreO(scoreO + 1);
        setTurnX(true);
        setCount(0);
        setNotification('');
      }, 2000);
    }else if(count === 9){
      setNotification('Draw!');
      setTimeout(() => {
        setGame(Array(9).fill(null));
        setDraw(draw + 1);
        setTurnX(true);
        setCount(0);
        setNotification('');
      }, 2000);
    }else{
      return;
    }
  }

  return (
    <div className='container'>
      <div className='game-div'>
        <Settings
          turn={turnX}
          notification={notification}
          restartGame={restartGame}
        />
        <Board
          boxes={game}
          makeTurn={makeTurn}
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