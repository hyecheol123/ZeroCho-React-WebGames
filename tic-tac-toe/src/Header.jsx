import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Header.module.css';

/**
 * React Component for Header (Where user can choose game mode)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.resetModeFunc Function to clear game mode
 * @param {function} props.changeDifficultyFunc Function to change game
 *   difficulty.
 *   Only defined when game mode is 1P.
 * @param {string} props.difficulty Current game difficulty.
 *   Only defined when game mode is 1P.
 * @return {React.ReactElement} React Element representing Header.
 */
const Header = ({ resetModeFunc, changeDifficultyFunc, difficulty }) => {
  // Refs
  const selectRef = React.useRef(null);

  /**
   * Function to change difficulty of game.
   */
  const onChangeDifficulty = React.useCallback(() => {
    changeDifficultyFunc(selectRef.current.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.Header}>
      <button className={styles.Button} onClick={resetModeFunc}>
        <FontAwesomeIcon icon={faHome} />
      </button>
      {changeDifficultyFunc && (
        <form className={styles.DifficultySelect}>
          <label htmlFor="difficulty">Difficulty: </label>
          <select
            ref={selectRef}
            name="difficulty"
            defaultValue={difficulty}
            onChange={onChangeDifficulty}
          >
            <option value="easy">Easy</option>
            <option value="hard">Hard</option>
          </select>
        </form>
      )}
    </div>
  );
};

export default React.memo(Header);
