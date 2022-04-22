import React from 'react';
// Box
import Box from './Box';

const Board = ({ turn, changeTurn, boxes }) => {
  return (
    <div className='board'>
      {boxes.map((i, index) => {
        return (
          <Box
            key={index}
            index={index}
            turn={turn} 
            text={i} 
            changeTurn={changeTurn}
          />
        )
      })}
      {/* <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} />

      <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} />

      <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} />
      <Box turn={turn} changeTurn={changeTurn} /> */}
    </div>
  );
}

export default Board;