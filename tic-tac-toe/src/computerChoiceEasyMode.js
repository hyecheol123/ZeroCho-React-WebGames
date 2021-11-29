/**
 * Method to choose location to put Computer's stone (Easy Mode)
 *   - Randomly choose from empty cell
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @return {Promise<object>} Return Promise getting location to put computer's
 *     stone.
 */
function computerChoiceEasyMode(tableData) {
  return new Promise((resolve, reject) => {
    let choice = { row: -1, col: -1 };
    const candidate = [];

    // Find empty cells
    tableData.forEach((row, rIdx) => {
      row.forEach((cell, cIdx) => {
        if (cell === '') {
          candidate.push({ row: rIdx, col: cIdx });
        }
      });
    });

    // Randomly select one cell from the candidate
    if (candidate.length === 0) {
      reject(new Error('Cordinate Not Found'));
    } else {
      choice = candidate[Math.floor(Math.random() * candidate.length)];
      resolve(choice);
    }
  });
}

export default computerChoiceEasyMode;
