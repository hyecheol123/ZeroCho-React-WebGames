import React from 'react';
import Trial from './Trial';
import styles from '../styles/Trial.module.css';

/**
 * TrialsInfo React Component that displays user about previous trials.
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {object} props.tries An array having each trial information,
 *   passed from parent Component.
 * @return {React.ReactElement} a react element referring TrialsInfo Component.
 */
const TrialsInfo = ({ tries }) => {
  const trialList = React.useRef(null);

  return (
    <>
      <ul className={styles.TrialList} ref={trialList}>
        {tries.map((trial, index) => (
          <Trial
            key={`${index + 1} Trial`}
            trialInfo={trial}
            trialKey={`${index + 1}`}
            ref={trialList}
          />
        ))}
      </ul>
    </>
  );
};

export default React.memo(TrialsInfo);
