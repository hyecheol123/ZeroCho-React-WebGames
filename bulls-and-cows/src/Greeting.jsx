import React from 'react';
import styles from '../styles/Greeting.module.css';

/**
 * Greeting React Component that displays title and instruction.
 *
 * @return {React.ReactElement} a React element referring Greeting Component.
 */
const Greeting = () => {
  return (
    <div className={styles.Greeting}>
      <h1 className={styles.Title}>Bulls and Cows</h1>
      <div className={styles.Instruction}>
        <div>
          <span className={`${styles.InstructionText} ${styles.AvoidWrap}`}>
            Discover four hidden numbers!&nbsp;
          </span>
          <span className={`${styles.InstructionText} ${styles.AvoidWrap}`}>
            You have 10 chances to try.
          </span>
        </div>
        <span className={styles.InstructionText}>
          Bulls = Correct Number, Correct Position.
        </span>
        <span className={styles.InstructionText}>
          Cows = Correct Number, Wrong Position.
        </span>
      </div>
    </div>
  );
};

export default React.memo(Greeting);
