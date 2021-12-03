import React from 'react';
import { TableContext } from '../MineSweeperData';
import TableCell from './TableCell';
import styles from '../../../styles/MineSweeper/Table.module.css';

/**
 * Function to generate CSS Grid style
 *
 * @param {Array<Array<number>>} tableData 2D array containing game data
 * @return {object} Styles of the table
 */
const styleGenerator = (tableData) => {
  if (tableData) {
    return { gridTemplateColumns: `repeat(${tableData[0].length}, 25px)` };
  }
};

/**
 * React Functional Component for Table
 *
 * @return {React.ReactElement} React Element representing the Table
 */
const Table = () => {
  const test = () => {
    console.log(`table Reached`);
  };

  // Context
  const { tableData } = React.useContext(TableContext);

  return (
    <div className={styles.TableWrapper}>
      <div style={styleGenerator(tableData)} className={styles.Table}>
        {test()}
        {tableData?.map((row, rIdx) =>
          row.map((_, cIdx) => (
            <TableCell rIdx={rIdx} cIdx={cIdx} key={`${rIdx}-${cIdx}`} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Table);
