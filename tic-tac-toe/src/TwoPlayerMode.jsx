import React from 'react';
import * as TicTacToeData from './TicTacToeData';
import whoIsWinner from './whoIsWinner';
import BackToHomeButton from './BackToHomeButton';
import TicTacToeTable from './TicTacToeTable';
import TicTacToeTurnButton from './TicTacToeTurnButton';
import ResultModal from './ResultModal';

/**
 * React Functional Component for TwoPlayerMode
 *   - Two user will compete each other
 *   - Alternate turn after one user place his/her stone
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {function} props.resetMode function to reset game mode
 * @return {React.ReactElement} a react element referring TwoPlayerMode
 */
const TwoPlayerMode = ({ resetMode }) => {
  // state - tableData, recentCell, turn, result
  const [state, dispatch] = React.useReducer(
    TicTacToeData.reducer,
    TicTacToeData.initialData
  );

  // Check for Winner
  React.useEffect(() => {
    whoIsWinner(state, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.recentCell]);

  /**
   * Helper method to reset game
   */
  const resetGame = React.useCallback(() => {
    dispatch({ type: TicTacToeData.RESET_GAME });
  }, []);

  return (
    <div>
      <BackToHomeButton resetModeFunc={resetMode} />
      <TicTacToeTable
        tableData={state.tableData}
        isDisabled={state.result !== ''}
        dispatch={dispatch}
      />
      <TicTacToeTurnButton turn={state.turn} />
      {state.result && (
        <ResultModal result={state.result} resetGameFunc={resetGame} />
      )}
    </div>
  );
};

export default React.memo(TwoPlayerMode);
