import React from 'react';

/**
 * Greeting React Component that displays title and instruction.
 *
 * @return {React.ReactElement} a React element referring Greeting Component.
 */
const Greeting = () => {
  return (
    <>
      <h1>Bulls and Cows Game</h1>
      <div>
        <span>Discover the hidden numbers!</span>
        <span>Enter four different digits.</span>
        <span>You have 10 chances to try.</span>
        <span>Bulls = Correct Number, Correct Position.</span>
        <span>Cows = Correct Number, Wrong Position.</span>
      </div>
    </>
  );
};

export default React.memo(Greeting);
