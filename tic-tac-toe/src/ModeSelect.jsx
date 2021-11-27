import React from 'react';
import styles from '../styles/ModeSelect.module.css';

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
    <div className={styles.Wrapper}>
      <div className={styles.Title}>Select Game Mode</div>
      <div className={styles.BtnWrapper}>
        <button className={styles.Button} onClick={select1PMode}>
          1P
        </button>
        <button className={styles.Button} onClick={select2PMode}>
          2P
        </button>
      </div>
    </div>
  );
};

export default ModeSelect;
