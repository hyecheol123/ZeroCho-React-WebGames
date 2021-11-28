import React from 'react';
// Temporal Message
import styles from '../styles/ResultModal.module.css';

/**
 * React Functional Component for SinglePlayerMode
 *   - User will compete with computer
 *   - Have Hard and Easy Mode
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} resetMode function to reset game mode
 * @return {React.ReactElement} a react element referring SinglePlayerMode
 */
const SinglePlayerMode = ({ resetMode }) => {
  // Temp Message: Not Yet Implemented
  // TODO: Implement
  return (
    <>
      <div className={styles.ModalOverlay}>
        <div className={styles.Modal}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '16px', margin: '1px' }}>1P Mode</span>
            <span style={{ fontSize: '16px', margin: '1px' }}>
              Not Yet Implemented
            </span>
          </div>
          <button onClick={resetMode}>Go Back To Home</button>
        </div>
      </div>
    </>
  );
};

export default SinglePlayerMode;
