import React from 'react';
import { TableContext } from './MineSweeperData';
import GamePlay from './GamePlay';
import ResultModal from './ResultModal';

/**
 * React Functional Component for MineSweeper
 *   - Wrap GamePlay and ResultModal
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {object} props.gameData Contains game properties
 * @param {function} props.resetGameFunc Function to reset game
 * @return {React.ReactElement} a react element referring MineSweeper
 */
const MineSweeper = ({ gameData, resetGameFunc }) => {
  // Context
  const { result } = React.useContext(TableContext);

  // State
  const [showResult, setShowResult] = React.useState(true);

  /**
   * Helper method to close modal
   */
  const closeModal = React.useCallback(() => {
    setShowResult(false);
  }, []);

  return (
    <>
      <GamePlay gameData={gameData} resetGameFunc={resetGameFunc} />
      {result && showResult && (
        <ResultModal result={result} closeModalFunc={closeModal} />
      )}
    </>
  );
};

export default MineSweeper;
