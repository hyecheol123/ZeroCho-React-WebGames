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
 * Helper method to find cell which can make two stones be placed in one row.
 * The row should not contain opponentStone
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @param {Array<Array<number>>} weightMap 2D array includes cell's weight
 * @param {string} myStone my stone
 * @param {string} opponentStone opponent's stone
 * @param {number} weight weight that should be added to eligible cell
 */
function makeTwoStonesInARow(
  tableData,
  weightMap,
  myStone,
  opponentStone,
  weight
) {
  // Row Checks
  for (let rIdx = 0; rIdx < 3; ++rIdx) {
    // Check whether row contains opponent stone
    if (!tableData[rIdx].includes(opponentStone)) {
      // Check whether row contains my stone at least once
      if (tableData[rIdx].includes(myStone)) {
        // Find empty cell index
        for (let cIdx = 0; cIdx < 3; ++cIdx) {
          if (tableData[rIdx][cIdx] === '') {
            weightMap[rIdx][cIdx] += weight;
          }
        }
      }
    }
  }

  // Column Checks
  for (let cIdx = 0; cIdx < 3; ++cIdx) {
    // Extract column
    const currCol = [
      tableData[0][cIdx],
      tableData[1][cIdx],
      tableData[2][cIdx],
    ];

    // Check whether column contains opponent's stone
    if (!currCol.includes(opponentStone)) {
      // Check whether column contains my stone at least once
      if (currCol.includes(myStone)) {
        // Find empty cell in the column
        for (let rIdx = 0; rIdx < 3; ++rIdx) {
          if (currCol[rIdx] === '') {
            weightMap[rIdx][cIdx] += weight;
          }
        }
      }
    }
  }

  // right bottom diagonal
  // Extract diagonal
  const bDiagonal = [tableData[0][0], tableData[1][1], tableData[2][2]];
  // Check whether diagonal contains opponent's stone
  if (!bDiagonal.includes(opponentStone)) {
    // Check whether diagonal contains my Stone at least once.
    if (bDiagonal.includes(myStone)) {
      // Find empty cell in the line
      for (let idx = 0; idx < 3; ++idx) {
        if (bDiagonal[idx] === '') {
          weightMap[idx][idx] += weight;
        }
      }
    }
  }

  // right top diagonal
  // Extract diagonal
  const tDiagonal = [tableData[2][0], tableData[1][1], tableData[0][2]];
  // Check whether diagonal contains opponent's stone
  if (!tDiagonal.includes(opponentStone)) {
    // Check whether diagonal contains my stone at least once
    if (tDiagonal.includes(myStone)) {
      // Find empty cell in the line
      for (let idx = 0; idx < 3; ++idx) {
        if (tDiagonal[idx] === '') {
          weightMap[2 - idx][idx] += weight;
        }
      }
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
 *          (Weight 350 each)
 *     4. Prevent opponent two player's stone locate in one row.
 *        Prioritize the cell which can prevent opponent player making more
 *          lines with two stones.
 *          (Weight 100 each)
 *     5. If player already put the stone on the corner,
 *          put computer's stone on the opposite corner.
 *          (Weight 45 each)
 *     6. On the opposite corner.
 *          (Weight 25 each)
 *     7. Put stone on the corner.
 *          (Weight 10 each)
 *     8. Center
 *          (Weight 5 each)
 *     9. Empty Side
 *           (Weight 1 each)
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @param {string} playerStone Indicates which stone player is using.
 * @return {Promise<object>} Return Promise getting location to put computer's
 *     stone.
 */
function computerChoiceHardMode(tableData, playerStone) {
  return new Promise((resolve, reject) => {
    // Initialize computerStone, isBoardEmpty, and weightMap
    const computerStone = playerStone === 'O' ? 'X' : 'O';
    const isBoardEmpty = checkIsBoardEmpty(tableData);
    const weightMap = new Array(3).fill(0).map(() => new Array(3).fill(0));

    if (!isBoardEmpty) {
      // Case 1
      let candidate = findWinningSpot(tableData, computerStone, playerStone);
      if (candidate) {
        resolve(candidate);
        return;
      }

      // Case 2
      candidate = findWinningSpot(tableData, playerStone, computerStone);
      if (candidate) {
        resolve(candidate);
        return;
      }

      // Case 3
      makeTwoStonesInARow(
        tableData,
        weightMap,
        computerStone,
        playerStone,
        350
      );

      // Case 4
      makeTwoStonesInARow(
        tableData,
        weightMap,
        playerStone,
        computerStone,
        100
      );
    }

    // Case 5, 6, 7
    // Corner is emprt (left-top)
    if (tableData[0][0] === '') {
      weightMap[0][0] += 10; // Case 7
      if (tableData[2][2] === playerStone) {
        // playerStone on opposite site (Case 5)
        weightMap[0][0] += 45;
      } else if (tableData[2][2] === computerStone) {
        // computerStone on opposite site (Case 6)
        weightMap[0][0] += 25;
      }
    }
    // Corner is emprt (right-top)
    if (tableData[0][2] === '') {
      weightMap[0][2] += 10; // Case 7
      if (tableData[2][0] === playerStone) {
        // playerStone on opposite site (Case 5)
        weightMap[0][2] += 45;
      } else if (tableData[2][0] === computerStone) {
        // computerStone on opposite site (Case 6)
        weightMap[0][2] += 25;
      }
    }
    // Corner is emprt (left-bottom)
    if (tableData[2][0] === '') {
      weightMap[2][0] += 10; // Case 7
      if (tableData[0][2] === playerStone) {
        // playerStone on opposite site (Case 5)
        weightMap[2][0] += 45;
      } else if (tableData[0][2] === computerStone) {
        // computerStone on opposite site (Case 6)
        weightMap[2][0] += 25;
      }
    }
    // Corner is emprt (right-bottom)
    if (tableData[2][2] === '') {
      weightMap[2][2] += 10; // Case 7
      if (tableData[0][0] === playerStone) {
        // playerStone on opposite site (Case 5)
        weightMap[2][2] += 45;
      } else if (tableData[0][0] === computerStone) {
        // computerStone on opposite site (Case 6)
        weightMap[2][2] += 25;
      }
    }

    // Case 8: Center is empty
    if (tableData[1][1] === '') {
      weightMap[1][1] += 5;
    }

    // Case 9
    // Left side is empty
    if (tableData[1][0] === '') {
      weightMap[1][0] += 1;
    }
    // Top side is empty
    if (tableData[0][1] === '') {
      weightMap[0][1] += 1;
    }
    // right side is empty
    if (tableData[1][2] === '') {
      weightMap[1][2] += 1;
    }
    // Bottom side is empty
    if (tableData[2][1] === '') {
      weightMap[2][1] += 1;
    }

    // Find max amoung the candidate
    const flattenWeight = [].concat(...weightMap);
    const maxWeight = Math.max(...flattenWeight);
    const candidateWeightsIdx = [...flattenWeight.keys()].filter(
      (i) => flattenWeight[i] === maxWeight
    );
    const candidateIdx =
      candidateWeightsIdx[
        Math.floor(Math.random() * candidateWeightsIdx.length)
      ];
    resolve({ row: Math.floor(candidateIdx / 3), col: candidateIdx % 3 });
  });
}

export default computerChoiceHardMode;
