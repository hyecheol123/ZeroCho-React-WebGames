import React from 'react';
import { CELL_CODE, TableContext } from '../MineSweeperData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faFlag, faBan } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/MineSweeper/Table.module.css';

/**
 * Function to get menu div's style
 *
 * @param {object} cellIdx clicked cell's index
 * @param {object} boardSize game board size
 * @param {object} cellRect clicked cell's boundingClientRect
 * @param {number} menuIndex indicate type of menu
 *   (0 for open the cell, 1 for flag the cell, and 2 for unflag the cell)
 * @return {object} CSS style properties of menu div
 */
const menuStyleGenerator = (cellIdx, boardSize, cellRect, menuIndex) => {
  switch (menuIndex) {
    // Locate on Cell's bottom/top
    case 0:
    case 2:
      if (
        boardSize.row - 3 < cellIdx.rIdx ||
        cellRect.bottom > window.innerHeight - 125
      ) {
        // Locate on top
        return { top: cellRect.top - 40, left: cellRect.left - 5 };
      } else {
        // Locate on bottom
        return { top: cellRect.bottom + 5, left: cellRect.left - 5 };
      }
    // Locate on Cell's right/left
    case 1:
      if (
        boardSize.column - 3 < cellIdx.cIdx ||
        cellRect.right > window.innerWidth - 58
      ) {
        // Locate on left
        return { top: cellRect.top - 5, left: cellRect.left - 40 };
      } else {
        // Locate on right
        return { top: cellRect.top - 5, left: cellRect.right + 5 };
      }
    default:
      return {};
  }
};

// Menu Open CODE
const UNFLAGGED = 'UNFLAGGED';
const FLAGGED = 'FLAGGED';

/**
 * React Functional Element for CellClickMenu
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {object} props.cellIdx Clicked cell's index
 * @param {object} props.cellRect Clicked cell's boundingClientRect
 * @param {function} props.closeMenuFunc Function to close the menu
 * @return {React.ReactElement} React Element representing CellClickMenu
 */
const CellClickMenu = ({ cellIdx, cellRect, closeMenuFunc }) => {
  // When clicked outside, close the menu
  React.useEffect(() => {});

  // Context
  const { tableData } = React.useContext(TableContext);
  const boardSize = { row: tableData.length, column: tableData[0].length };

  // Check which menu to display
  let menuStat;
  switch (tableData[cellIdx.rIdx][cellIdx.cIdx]) {
    case CELL_CODE.NORMAL:
    case CELL_CODE.MINE:
      menuStat = UNFLAGGED;
      break;
    case CELL_CODE.FLAG:
    case CELL_CODE.FLAG_MINE:
      menuStat = FLAGGED;
      break;
    default:
      menuStat = undefined;
  }

  return (
    <>
      {menuStat === UNFLAGGED && (
        <>
          <div
            style={menuStyleGenerator(cellIdx, boardSize, cellRect, 0)}
            className={styles.MenuButton}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div
            style={menuStyleGenerator(cellIdx, boardSize, cellRect, 1)}
            className={styles.MenuButton}
          >
            <FontAwesomeIcon icon={faFlag} />
          </div>
        </>
      )}
    </>
  );
};

export default CellClickMenu;
