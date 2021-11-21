import React from 'react';

// TODO: Design Change

/**
 * Trial React Component that makes up the a list item showing the user's trials
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {object} props.trialInfo A trial's information passed by the parent Component.
 * @param {string} props.trialKey Key of this Trial Component
 * @return {React.ReactElement} a react element referring Trial Component.
 */
const Trial = ({ trialInfo, trialKey }) => {
  return (
    <li>
      <div>
        {trialInfo.try.split('').map((number, index) => (
          <div key={`${trialKey}-${index}`}>{number}</div>
        ))}
      </div>
      <div>{trialInfo.result}</div>
    </li>
  );
};

export default React.memo(Trial);
