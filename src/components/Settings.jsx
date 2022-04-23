import React from 'react';

const Settings = ({ turn, notification, restartGame }) => {
  return (
    <div className='settings'>
      <div className='settings-turn'>
        {turn ? 'X' : 'O'} turn
      </div>
      <div className='notification-div'>
        {notification}
      </div>
      <div className='settings-restart'>
        <button onClick={restartGame}><i className="fa-solid fa-arrow-rotate-right"></i></button>
      </div>
    </div>
  );
}

export default Settings;