import React from 'react';
import TicTacToeTableCell from './TicTacToeTableCell';
import styles from '../styles/TicTacToeTable.module.css';

const TicTacToeTable = ({ tableData, dispatch }) => {
  return (
    <div className={styles.Table}>
      {tableData.map((tRow, rIdx) =>
        tRow.map((tCell, cIdx) => (
          <TicTacToeTableCell
            key={`${rIdx}-${cIdx}`}
            content={tCell}
            dispatch={dispatch}
          />
        ))
      )}
    </div>
  );
};

export default TicTacToeTable;
