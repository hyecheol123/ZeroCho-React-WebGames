import React from 'react';

const ResultModal = ({ result, resetGameFunc }) => {
  return (
    <div>
      <div>
        <span>{result}</span>
        <button onClick={resetGameFunc}>Start New Game</button>
      </div>
    </div>
  );
};

export default ResultModal;
