/**
 * Method to choose location to put Computer's stone (Hard Mode)
 *   - Priority of choosing location to put the stone.
 *     1. Makes computer win.
 *     2. Block player to put the stone on win position.
 *     3. Makes two stone locates in one row.
 *        Note that the opponent's stone should not be in the row.
 *     4. Prevent two player's stone locate in one row.
 *     5. Put stone on the corner.
 *     6. If player already put the stone on the corner,
 *          put computer's stone on the opposite corner.
 *     7. On the opposite corner.
 *     8. Center
 *     9. Empty Corner
 *     10. Empty Side
 *
 * @param {Array<Array<string>>} tableData 2D array includes cell's data
 * @param {string} computerStone Indicates which stone computer is using.
 * @return {Promise<object>} Return Promise getting location to put computer's
 *     stone.
 */
function computerChoiceHardMode(tableData, computerStone) {
  return new Promise((resolve, reject) => {});
}

export default computerChoiceHardMode;
