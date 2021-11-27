import React from 'react';

/**
 * React Functional Component for ModeSelect
 *   - Select game mode
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.select1PMode Function to set game mode to 1p
 * @param {function} props.select2PMode Function to set game mode to 2p
 * @return {React.ReactElement} a react element referring ModeSelect
 */
const ModeSelect = ({ select1PMode, select2PMode }) => {
  return (
    <>
      <button onClick={select1PMode}>1P</button>
      <button onClick={select2PMode}>2P</button>
    </>
  );
};

export default ModeSelect;
