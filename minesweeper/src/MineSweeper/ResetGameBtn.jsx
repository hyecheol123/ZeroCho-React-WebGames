import React from 'react';

const ResetGameBtn = ({ resetGameFunc }) => {
  const test = () => {
    console.log(`newGameBtn Reached`);
  };

  return (
    <>
      {test()}
      <button onClick={resetGameFunc}>New Game</button>
    </>
  );
};

export default React.memo(ResetGameBtn);
