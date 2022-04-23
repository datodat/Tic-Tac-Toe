import React from 'react';
// Box
import Box from './Box';

const Board = ({ boxes, makeTurn }) => {

  const renderBox = (i) => {
    return <Box value={boxes[i]} num={i} makeTurn={makeTurn} />;
  }

  return (
    <div className='board'>
      {renderBox(0)}
      {renderBox(1)}
      {renderBox(2)}

      {renderBox(3)}
      {renderBox(4)}
      {renderBox(5)}

      {renderBox(6)}
      {renderBox(7)}
      {renderBox(8)}
    </div>
  );
}

export default Board;