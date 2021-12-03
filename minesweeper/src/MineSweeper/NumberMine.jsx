import React from 'react';

/**
 * React Functional Component to display number of mine
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {number} props.nMine number of mines
 * @return {React.ReactElement} React Element representing NumberMine
 */
const NumberMine = ({ nMine }) => {
  const test = () => {
    console.log(`nMine Reached`);
  };

  return (
    <>
      {test()}
      <span># Mine: {nMine}</span>
    </>
  );
};

export default React.memo(NumberMine);
