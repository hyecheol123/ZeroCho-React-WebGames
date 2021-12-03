import React from 'react';
import { TableContext } from '../MineSweeperData';

/**
 * React Functional Element for TableCell
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {number} props.rIdx Index of row
 * @param {number} props.cIdx Index of column
 * @return {React.ReactElement} React Element referring TableCell
 */
const TableCell = ({ rIdx, cIdx }) => {
  const test = () => {
    console.log(`tableCell Reached`);
  };

  // Context
  const { tableData } = React.useContext(TableContext);

  return (
    <>
      {test()}
      <div>{tableData[rIdx][cIdx]}</div>
    </>
  );
};

export default React.memo(TableCell);
