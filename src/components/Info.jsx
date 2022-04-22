import React from 'react';

const Info = ({ scoreX, scoreO, draw }) => {
  return (
    <div className='info'>
      <div className='info-div-x'>
        <p>X Score</p>
        {scoreX}
      </div>
      <div className='info-div-draw'>
        <p>Draw</p>
        {draw}
      </div>
      <div className='info-div-o'>
        <p>O Score</p>
        {scoreO}
      </div>
    </div>
  );
}

export default Info;