import React from 'react';
import Form from './Form';
import MineNumberWarningModal from './MineNumberWarningModal';
import styles from '../../styles/GameStartForm/GameStartForm.module.css';

/**
 * React Functional Component for GameStartForm (Get game setting)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.setGameDataFunc Function to set game data
 * @return {React.ReactElement} a react element referring GameStartForm
 */
const GameStartForm = ({ setGameDataFunc }) => {
  // State
  const [warning, setWarning] = React.useState(false);
  const [msg, setMsg] = React.useState('');
  // Refs
  const rowRef = React.useRef(null);
  const columnRef = React.useRef(null);
  const mineRef = React.useRef(null);

  /**
   * Event Handler for button's click event
   *   - Check user's input and set the game data
   */
  const onClickBtn = () => {
    const nRow = rowRef.current.value;
    const nCol = columnRef.current.value;
    const nMine = mineRef.current.value;

    // Check user's input
    if (nRow <= 0 || nCol <= 0 || nMine <= 0) {
      // Warning modal
      setWarning(true);
      setMsg('All numbers should be larger than 0');
    } else if (nMine > nRow * nCol) {
      // Warning modal
      setWarning(true);
      setMsg('Mine number is larger than the number of cells');
    } else if (nRow * nCol - nMine < 1) {
      setWarning(true);
      setMsg('Should have at least one normal cell and mine each');
    } else {
      // Start Game
      setGameDataFunc(nRow, nCol, nMine);
    }
  };

  /**
   * Helper method to clear warning
   */
  const clearWarning = React.useCallback(() => {
    setWarning(false);
  }, []);

  return (
    <>
      <div className={styles.GameStartForm}>
        <Form ref={rowRef} label="row" />
        <Form ref={columnRef} label="column" />
        <Form ref={mineRef} label="mine" />
        <button onClick={onClickBtn}>Go</button>
      </div>
      {warning && (
        <MineNumberWarningModal closeModalFunc={clearWarning} msg={msg} />
      )}
    </>
  );
};

export default GameStartForm;
