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
  // Refs
  const tableWrapperRef = React.useRef();
  const tableRef = React.useRef();

  // Context
  const { tableData, halted } = React.useContext(TableContext);

  // State
  const [highlightedCell, setHighlightedCell] = React.useState({
    rIdx: -1,
    cIdx: -1,
  });
  const [cellRect, setCellRect] = React.useState(undefined);

  // Prevent Click when game ends
  React.useEffect(() => {
    /**
     * Helper method to prevent click after game ends
     *
     * @param {Event} event Click Event
     */
    const preventClickWhenGameEnd = (event) => {
      if (halted) {
        event.stopPropagation();
      }
    };

    // Bind Event Listener
    const tableWrapperElem = tableWrapperRef.current;
    tableWrapperElem.addEventListener('click', preventClickWhenGameEnd, {
      capture: true,
    });

    return () => {
      // Unbind Event Listener for cleanup
      tableWrapperElem.removeEventListener('click', preventClickWhenGameEnd, {
        capture: true,
      });
    };
  }, [halted]);

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
    setCellRect(undefined);
    setHighlightedCell({ rIdx: -1, cIdx: -1 });
  }, []);

  // When table scrolled, close cell menu
  React.useEffect(() => {
    /**
     * Function to handle scroll event
     */
    const scrollEventHandler = () => {
      if (cellRect) {
        closeMenu();
      }
    };

    const elements = [tableWrapperRef.current, tableRef.current];
    elements.forEach((elem) =>
      elem.addEventListener('scroll', scrollEventHandler)
    );

    return () => {
      elements.forEach((elem) =>
        elem.removeEventListener('scroll', scrollEventHandler)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cellRect]);

  return (
    <>
      <div ref={tableWrapperRef} className={styles.TableWrapper}>
        <div
          ref={tableRef}
          style={tableStyleGenerator(tableData)}
          className={styles.Table}
        >
          {tableData?.map((row, rIdx) =>
            row.map((_, cIdx) => (
              <TableCell
                key={`${rIdx}-${cIdx}`}
                rIdx={rIdx}
                cIdx={cIdx}
                data={tableData[rIdx][cIdx]}
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

export default React.memo(Table);
