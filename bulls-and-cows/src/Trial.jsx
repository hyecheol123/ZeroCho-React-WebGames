import React from 'react';

/**
 * Trial React Component that makes up the a list item showing the user's trials
 *
 * @param {object} props A properties that passed from the parent Component.
 * @param {object} props.trialInfo A trial's information passed by the parent Component.
 * @return {React.ReactElement} a react element referring Trial Component.
 */
const Trial = ({ trialInfo }) => {
  return (
    <li>
      <div>{trialInfo.try}</div>
      <div>{trialInfo.result}</div>
    </li>
  );
};

export default React.memo(Trial);
