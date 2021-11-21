import React from 'react';
import Trial from './Trial';

// TODO: Design Change

/**
 * TrialsInfo React Component that displays user about previous trials.
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {object} props.tries An array having each trial information,
 *   passed from parent Component.
 * @return {React.ReactElement} a react element referring TrialsInfo Component.
 */
const TrialsInfo = ({ tries }) => {
  return (
    <>
      <ul>
        {tries.map((trial, index) => (
          <Trial
            key={`${index + 1} Trial`}
            trialInfo={trial}
            trialKey={`${index + 1} Trial`}
          />
        ))}
      </ul>
    </>
  );
};

export default React.memo(TrialsInfo);
