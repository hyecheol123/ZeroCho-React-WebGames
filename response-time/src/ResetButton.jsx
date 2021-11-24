import React from 'react';

/**
 * ResetButton React Component that shows button to reset the game.
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.resetFunc React Ref pointing the modal.
 * @return {React.ReactElement} a react element referring ResetButton
 */
const ResetButton = ({ resetFunc }) => {
  return <button onClick={resetFunc}>Reset</button>;
};

export default React.memo(ResetButton);
