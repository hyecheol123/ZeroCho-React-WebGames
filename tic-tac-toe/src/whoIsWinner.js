import { CHANGE_TURN, SET_RESULT } from './TicTacToeData';

/**
 * Function to check winner of tic-tac-toe.
 * If no winner found and has empty cells in the table, alternate turn.
 *
 * @param {object} state tic-tac-toe data: tableData, recentCell, turn, result
 * @param {function} dispatch function to change state
 * @return {boolean} whether the turn is changed and ready for other user to put
 *   the stone
 */
const whoIsWinner = (state, dispatch) => {
  const { row, col } = state.recentCell;
  // Do not check when stone is not placed
  if (row < 0 || col < 0) {
    return;
  }

  // Check winner
  const { tableData, turn } = state;
  let win = false;
  if (tableData[row].filter((value) => value !== turn).length === 0) {
    // row check
    win = true;
  } else if (tableData.filter((tRow) => tRow[col] !== turn).length === 0) {
    // column check
    win = true;
  } else if (
    tableData[0][0] === turn &&
    tableData[1][1] === turn &&
    tableData[2][2] === turn
  ) {
    // left top - right bottom diagonal check
    win = true;
  } else if (
    tableData[0][2] === turn &&
    tableData[1][1] === turn &&
    tableData[2][0] === turn
  ) {
    // left bottom - right top diagonal check
    win = true;
  }

  if (win) {
    // Winner exists
    dispatch({ type: SET_RESULT, result: `${turn} Win!!` });
    return false;
  } else {
    // Check for empty cell
    let empty = false;
    for (let tRow = 0; tRow < tableData.length; ++tRow) {
      if (empty) {
        // When empty cell found, no need to search moe
        break;
      } else {
        for (let tCol = 0; tCol < tableData[tRow].length; ++tCol) {
          if (tableData[tRow][tCol] === '') {
            empty = true;
            break;
          }
        }
      }
    }

    if (empty) {
      // Have empty cell
      dispatch({ type: CHANGE_TURN });
      return true;
    } else {
      // Draw
      dispatch({ type: SET_RESULT, result: 'Draw!!' });
      return false;
    }
  }
};

export default whoIsWinner;
