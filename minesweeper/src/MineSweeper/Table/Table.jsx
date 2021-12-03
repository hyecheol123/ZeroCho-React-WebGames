import React from 'react';
import { TableContext } from '../MineSweeperData';
import TableCell from './TableCell';
import CellClickMenu from './CellClickMenu';
import styles from '../../../styles/MineSweeper/Table.module.css';

/**
 * Function to generate CSS Grid style
 *
 * @param {Array<Array<number>>} tableData 2D array containing game data
 * @return {object} Styles of the table
 */
const tableStyleGenerator = (tableData) => {
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

  // State
  const [highlightedCell, setHighlightedCell] = React.useState({
    rIdx: -1,
    cIdx: -1,
  });
  const [cellRect, setCellRect] = React.useState(undefined);

  /**
   * Function to set information that will be used to draw menu
   *
   * @param {object} cellIdx contain cell's index to highlight
   * @param {object} cellRect contain cell's bounding rectangle coordinate
   */
  const setMenuInfo = React.useCallback((cellIdx, cellRect) => {
    setHighlightedCell(cellIdx);
    setCellRect(cellRect);
  }, []);

  /**
   * Function to close cell menu and unset highlight
   */
  const closeMenu = React.useCallback(() => {
    setHighlightedCell({ rIdx: -1, cIdx: -1 });
    setCellRect(undefined);
  }, []);

  return (
    <>
      <div className={styles.TableWrapper}>
        <div style={tableStyleGenerator(tableData)} className={styles.Table}>
          {test()}
          {tableData?.map((row, rIdx) =>
            row.map((_, cIdx) => (
              <TableCell
                key={`${rIdx}-${cIdx}`}
                rIdx={rIdx}
                cIdx={cIdx}
                isHighlighted={
                  rIdx === highlightedCell.rIdx && cIdx === highlightedCell.cIdx
                    ? true
                    : false
                }
                setMenuInfo={setMenuInfo}
              />
            ))
          )}
        </div>
        {cellRect && (
          <CellClickMenu
            cellIdx={highlightedCell}
            cellRect={cellRect}
            closeMenuFunc={closeMenu}
          />
        )}
      </div>
    </>
  );
};

export default Table;
