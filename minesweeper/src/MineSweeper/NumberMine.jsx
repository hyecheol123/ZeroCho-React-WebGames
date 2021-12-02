import React from 'react';

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
