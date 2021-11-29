import React from 'react';
import * as TicTacToeData from './TicTacToeData';
import whoIsWinner from './whoIsWinner';
import computerChoiceEasyMode from './computerChoiceEasyMode';
import Header from './Header';
import TicTacToeTable from './TicTacToeTable';
import TicTacToeTurnButton from './TicTacToeTurnButton';
import ResultModal from './ResultModal';
import styles from '../styles/GamePlay.module.css';

/**
 * React Functional Component for GamePlay
 *   - 1P
 *     - User will compete with computer
 *     - Have Hard and Easy Mode
 *   - 2P
 *     - Two user will compete each other
 *     - Alternate turn after one user place his/her stone
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {string} props.gameMode string indicates game mode
 * @param {function} props.resetMode function to reset game mode
 * @return {React.ReactElement} a react element referring TwoPlayerMode
 */
const GamePlay = ({ gameMode, resetMode }) => {
  // state - tableData, recentCell, turn, result
  const [state, dispatch] = React.useReducer(
    TicTacToeData.reducer,
    TicTacToeData.initialData
  );

  // Initialize 1P setup when mounted
  React.useEffect(() => {
    if (gameMode === '1p') {
      dispatch({ type: TicTacToeData.INIT_1P });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Helper method to put computer's stone (1P)
   */
  const computerPutStone = React.useCallback(() => {
    // Calculate Computer's Choice
    let computerChoicePromise;
    if (state.difficulty === 'easy') {
      computerChoicePromise = computerChoiceEasyMode(state.tableData);
    } else {
      // TODO: Hard Algorithm
      // computerChoicePromise = ;
    }

    // Display Result after 1 second
    setTimeout(() => {
      computerChoicePromise.then((position) => {
        dispatch({
          type: TicTacToeData.CLICK_CELL,
          row: position.row,
          col: position.col,
        });
      });
    }, 1000);
  }, [state.difficulty, state.tableData]);

  // Check for Winner
  React.useEffect(() => {
    // Computer put stone first when player is X
    const isNewGame = state.recentCell.row < 0 || state.recentCell.col < 0;
    if (isNewGame) {
      if (state.player === 'X') {
        computerPutStone();
      }
      return;
    }

    // 1P Mode computer's choice
    const prevTurn = state.turn;
    const isTurnChanged = whoIsWinner(state, dispatch);
    if (
      gameMode === '1p' &&
      state.player !== '' &&
      isTurnChanged &&
      prevTurn === state.player // When player was previously put the stone
    ) {
      computerPutStone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.recentCell, state.player, state.difficulty]);

  /**
   * Helper method to reset game
   */
  const resetGame = React.useCallback(() => {
    if (gameMode === '1p') {
      dispatch({
        type: TicTacToeData.RESET_GAME_1P,
        player: state.player,
        difficulty: state.difficulty,
      });
    } else {
      dispatch({ type: TicTacToeData.RESET_GAME });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.player, state.difficulty]);

  /**
   * Helper method to update difficulty level
   *
   * @param {string} difficulty difficulty level
   */
  const change1PDifficulty = React.useCallback((difficulty) => {
    dispatch({ type: TicTacToeData.SET_DIFFICULTY, difficulty: difficulty });
  }, []);

  return (
    <div className={styles.Game}>
      <Header
        resetModeFunc={resetMode}
        changeDifficultyFunc={
          gameMode === '1p' ? change1PDifficulty : undefined
        }
        difficulty={gameMode === '1p' ? state.difficulty : undefined}
      />
      <TicTacToeTable
        tableData={state.tableData}
        isDisabled={
          state.result !== '' ||
          (gameMode === '1p' && state.turn !== state.player)
        }
        dispatch={dispatch}
      />
      <TicTacToeTurnButton
        turn={state.turn}
        player={state.player}
        dispatch={gameMode === '1p' ? dispatch : undefined}
      />
      {state.result && (
        <ResultModal result={state.result} resetGameFunc={resetGame} />
      )}
    </div>
  );
};

export default React.memo(GamePlay);
