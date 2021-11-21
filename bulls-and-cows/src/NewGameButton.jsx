import React from 'react';

const NewGameButton = ({ newGameFunc }) => {
  return (
    <>
      <button onClick={newGameFunc}>New Game</button>
    </>
  );
};

export default React.memo(NewGameButton);
