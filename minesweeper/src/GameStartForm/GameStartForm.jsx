import React from 'react';
import Form from './Form';
import styles from '../../styles/GameStartForm/GameStartForm.module.css';

/**
 * React Functional Component for GameStartForm (Get game setting)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.setGameDataFunc Function to set game data
 * @return {React.ReactElement} a react element referring GameStartForm
 */
const GameStartForm = ({ setGameDataFunc }) => {
  // Refs
  const rowRef = React.useRef(null);
  const columnRef = React.useRef(null);
  const mineRef = React.useRef(null);

  /**
   * Event Handler for button's click event
   *   - Check user's input and set the game data
   */
  const onClickBtn = () => {
    // TODO: Check user's input
    setGameDataFunc(
      rowRef.current.value,
      columnRef.current.value,
      mineRef.current.value
    );
  };

  return (
    <div className={styles.GameStartForm}>
      <Form ref={rowRef} label="row" />
      <Form ref={columnRef} label="column" />
      <Form ref={mineRef} label="mine" />
      <button onClick={onClickBtn}>Go</button>
    </div>
  );
};

export default GameStartForm;
