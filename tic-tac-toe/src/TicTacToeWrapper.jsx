import React from 'react';
import ModeSelect from './ModeSelect';
import GamePlay from './GamePlay';
import '../styles/global.css';

/**
 * React Functional Component for TicTacToeWrapper
 *   - Display ModeSelect at the beginning
 *   - Display proper game based on the user's mode selection
 *
 * @return {React.ReactElement} a react element referring TicTacToeWrapper
 */
const TicTacToeWrapper = () => {
  // States
  const [mode, setMode] = React.useState('');

  /**
   * Helper method to reset game mode
   */
  const resetMode = React.useCallback(() => {
    setMode('');
  }, []);

  /**
   * Helper method to set game mode to 1p
   */
  const select1PMode = React.useCallback(() => {
    setMode('1p');
  }, []);

  /**
   * Helper method to set game mode to 2p
   */
  const select2PMode = React.useCallback(() => {
    setMode('2p');
  }, []);

  return (
    <>
      {mode === '' ? (
        <ModeSelect select1PMode={select1PMode} select2PMode={select2PMode} />
      ) : (
        <GamePlay gameMode={mode} resetMode={resetMode} />
      )}
    </>
  );
};

export default React.memo(TicTacToeWrapper);
