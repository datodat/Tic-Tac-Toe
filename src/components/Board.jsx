import React from 'react';
// Box
import Box from './Box';

const Board = ({ boxes, makeTurn, winnerBoxes }) => {
  return (
    <div className='board'>
      {/* First Row */}
      <Box  
        value={boxes[0]} 
        num={0} 
        makeTurn={makeTurn} 
      />
      <Box 
        value={boxes[1]} 
        num={1} 
        makeTurn={makeTurn} 
      />
      <Box  
        value={boxes[2]} 
        num={2} 
        makeTurn={makeTurn} 
      />
      {/* Second Row */}
      <Box 
        value={boxes[3]} 
        num={3} 
        makeTurn={makeTurn} 
      />
      <Box 
        value={boxes[4]} 
        num={4} 
        makeTurn={makeTurn} 
      />
      <Box 
        value={boxes[5]} 
        num={5} 
        makeTurn={makeTurn} 
      />
      {/* Third Row */}
      <Box 
        value={boxes[6]} 
        num={6} 
        makeTurn={makeTurn} 
      />
      <Box 
        value={boxes[7]} 
        num={7} 
        makeTurn={makeTurn} 
      />
      <Box 
        value={boxes[8]} 
        num={8} 
        makeTurn={makeTurn} 
      />
    </div>
  );
}

export default Board;