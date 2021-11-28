import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/BackToHomeButton.module.css';

/**
 * React Component for BackToHomeButton (Where user can choose game mode)
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.resetModeFunc Function to clear game mode
 * @return {React.ReactElement} React Element representing BackToHomeButton.
 */
const BackToHomeButton = ({ resetModeFunc }) => {
  return (
    <>
      <button className={styles.Button} onClick={resetModeFunc}>
        <FontAwesomeIcon icon={faHome} />
      </button>
    </>
  );
};

export default React.memo(BackToHomeButton);
