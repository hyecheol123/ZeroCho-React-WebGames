import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <>
      <button onClick={resetMode}>
        <FontAwesomeIcon icon={faHome} />
      </button>
    </>
  );
};

export default SinglePlayerMode;
