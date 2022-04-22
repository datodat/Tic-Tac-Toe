import React, { useState } from 'react';

const Box = ({ turn, index, text, changeTurn }) => {
  // const [text, setText] = useState('');

  // const checkTurn = () => {
  //   if(turn){
  //     setText('X');
  //     changeTurn();
  //   }else{
  //     setText('O')
  //     changeTurn();
  //   }
  // }

  return (
    <div onClick={() => changeTurn(index)} >
      {text}
    </div>
  );
}

export default Box;