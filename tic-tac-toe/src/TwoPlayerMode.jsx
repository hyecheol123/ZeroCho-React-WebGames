import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

/**
 * React Functional Component for TwoPlayerMode
 *   - Two user will compete each other
 *   - Alternate turn after one user place his/her stone
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} resetMode function to reset game mode
 * @return {React.ReactElement} a react element referring TwoPlayerMode
 */
const TwoPlayerMode = ({ resetMode }) => {
  return (
    <>
      <button onClick={resetMode}>
        <FontAwesomeIcon icon={faHome} />
      </button>
    </>
  );
};

export default TwoPlayerMode;
