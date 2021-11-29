/**
 * Helper method to check whether the TicTacToe table is empty or not
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @return {boolean} whether the TicTacToe table is empty or not
 */
function checkIsBoardEmpty(tableData) {
  for (let rIdx = 0; rIdx < 3; ++rIdx) {
    for (let cIdx = 0; cIdx < 3; ++cIdx) {
      if (tableData[rIdx][cIdx] !== '') {
        // Contains value
        return false;
      }
    }
  }

  // No cell containing value
  return true;
}

/**
 * Helper method to find a line with two myStone and no opponentStone
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @param {string} myStone my stone
 * @param {string} opponentStone opponent's stone
 * @return {object} coordinate to put the stone (row, col)
 */
function findWinningSpot(tableData, myStone, opponentStone) {
  // Row Check
  for (let rIdx = 0; rIdx < 3; ++rIdx) {
    // Check whether row contains opponent's stone
    if (!tableData[rIdx].includes(opponentStone)) {
      // Find row where my stone exists more than twice
      if (tableData[rIdx].filter((v) => v === myStone).length === 2) {
        // Find empty cell in the row
        return { row: rIdx, col: tableData[rIdx].indexOf('') };
      }
    }
  }

  // Column Check
  for (let cIdx = 0; cIdx < 3; ++cIdx) {
    // Extract column
    const currCol = [
      tableData[0][cIdx],
      tableData[1][cIdx],
      tableData[2][cIdx],
    ];

    // Check whether column contains opponent's stone
    if (!currCol.includes(opponentStone)) {
      // Find column where my stone exists more than twice
      if (currCol.filter((v) => v === myStone).length === 2) {
        // Find empty cell in the row
        return { row: currCol.indexOf(''), col: cIdx };
      }
    }
  }

  // right bottom diagonal
  // Extract diagonal
  const bDiagonal = [tableData[0][0], tableData[1][1], tableData[2][2]];
  // Check whether diagonal contains opponent's stone
  if (!bDiagonal.includes(opponentStone)) {
    // Check whether diagonal has more than two myStone.
    if (bDiagonal.filter((v) => v === myStone).length === 2) {
      // Find empty cell in the row
      const index = bDiagonal.indexOf('');
      return { row: index, col: index };
    }
  }

  // right top diagonal
  // Extract diagonal
  const tDiagonal = [tableData[2][0], tableData[1][1], tableData[0][2]];
  // Check whether diagonal contains opponent's stone
  if (!tDiagonal.includes(opponentStone)) {
    // Check whether diagonal has more than two myStone.
    if (tDiagonal.filter((v) => v === myStone).length === 2) {
      // Find empty cell in the row
      const index = tDiagonal.indexOf('');
      return { row: 2 - index, col: index };
    }
  }
}

/**
 * Method to choose location to put Computer's stone (Hard Mode)
 *   - Priority of choosing location to put the stone.
 *     1. Makes computer win.
 *     2. Block player to put the stone on win position.
 *     3. Makes two stone locates in one row.
 *        Note that the opponent's stone should not be in the row.
 *        Prioritize the cell which can make more lines with two stones.
 *     4. Prevent opponent player's stone locate in one row.
 *        Prioritize the cell which can prevent opponent player making more
 *          lines with two stones.
 *     5. If player already put the stone on the corner,
 *          put computer's stone on the opposite corner.
 *     6. Put stone on the corner.
 *     7. On the opposite corner.
 *     8. Center
 *     9. Empty Corner
 *     10. Empty Side
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @param {string} playerStone Indicates which stone player is using.
 * @return {Promise<object>} Return Promise getting location to put computer's
 *     stone.
 */
function computerChoiceHardMode(tableData, playerStone) {
  return new Promise((resolve, reject) => {
    // Initialize computerStone, isBoardEmpty, and emptyMap
    const computerStone = playerStone === 'O' ? 'X' : 'O';
    const isBoardEmpty = checkIsBoardEmpty(tableData);

    if (!isBoardEmpty) {
      // Case 1
      let candidate = findWinningSpot(tableData, computerStone, playerStone);
      if (candidate) {
        resolve(candidate);
      }

      // Case 2
      candidate = findWinningSpot(tableData, playerStone, computerStone);
      if (candidate) {
        resolve(candidate);
      }

      // Case 3

      // Case 4

      // Case 5
    }

    // Case 6 works for both empty and non-empty table

    // Case 7, 8, 9, 10 only works for non-empty board
    if (!isBoardEmpty) {
      // Case 7
      // Case 8
      // Case 9
      // Case 10
    }

    // Error on no position resolved at the end of the function
    reject(new Error('Cordinate Not Found'));
  });
}

export default computerChoiceHardMode;
