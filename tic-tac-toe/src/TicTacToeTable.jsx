import React from 'react';
import TicTacToeTableCell from './TicTacToeTableCell';
import styles from '../styles/TicTacToeTable.module.css';

/**
 * React Component indicates TicTacToe Table
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {Array<Array<string>>} props.tableData 2D array includes cell's data
 * @param {boolean} props.isDisabled Indicates whether user can click the cell
 *   or not.
 *   All cells are disabled when the game is set.
 * @param {React.Dispatch} props.dispatch dispatch function to update game's
 *   states.
 * @return {React.ReactElement} A React Element representing TicTacToeTable
 */
const TicTacToeTable = ({ tableData, isDisabled, dispatch }) => {
  return (
    <div className={styles.Table}>
      {tableData.map((tRow, rIdx) =>
        tRow.map((tCell, cIdx) => (
          <TicTacToeTableCell
            key={`${rIdx}-${cIdx}`}
            content={tCell}
            rIdx={rIdx}
            cIdx={cIdx}
            isDisabled={isDisabled}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
};

export default React.memo(TicTacToeTable);
