import React from 'react';
import { CELL_CODE, TableContext } from '../MineSweeperData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons';

/**
 * Function to get cell's style (background)
 *
 * @param {number} cellCode cell code for current cell
 * @return {object} CSS Style for the cell
 */
const getCellStyle = (cellCode, highlighted) => {
  const style = {};

  // Check whether cell is highlighted or not
  if (highlighted) {
    style.border = '2px solid yellow';
    style.width = '21px';
    style.height = '21px'
  }

  // Define style based on the cellCode
  switch (cellCode) {
    case CELL_CODE.NORMAL:
    case CELL_CODE.FLAG:
    case CELL_CODE.FLAG_MINE:
    case CELL_CODE.MINE:
      style.backgroundColor = 'limegreen';
      break;
    default:
      style.backgroundColor = 'greenyellow';
  }

  return style;
};

/**
 * Function to get cell's text
 *
 * @param {number} cellCode cell code for current cell
 * @return {React.ReactElement | string} Text displayed in the cell
 */
const getCellText = (cellCode) => {
  switch (cellCode) {
    case CELL_CODE.NORMAL:
      return '';
    case CELL_CODE.FLAG:
    case CELL_CODE.FLAG_MINE:
      return <FontAwesomeIcon style={{ color: 'red' }} icon={faFlag} />;
    case CELL_CODE.CLICKED_MINE:
      return <FontAwesomeIcon style={{ color: 'red' }} icon={faBomb} />;
    case CELL_CODE.MINE:
      return 'X';
    default:
      return (
        <span style={{ color: 'red', fontWeight: 700 }}>{cellCode}</span> || ''
      );
  }
};

/**
 * React Functional Element for TableCell
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {number} props.rIdx Index of row
 * @param {number} props.cIdx Index of column
 * @param {boolean} props.isHighlighted Whether cell is highlighted or not
 * @param {function} props.setMenuInfo Function to set information which will be
 *   used to draw the menu. Cell's bounding rectangle and setState function to 
 *   unset cell highlight.
 * @return {React.ReactElement} React Element referring TableCell
 */
const TableCell = ({ rIdx, cIdx, isHighlighted, setMenuInfo }) => {
  const test = () => {
    console.log(`tableCell Reached`);
  };

  /**
   * Function to highlight clicked cell and show menu
   * 
   * @param {Event} event click event from table cell
   */
  const onCellClick = React.useCallback((event) => {
    setMenuInfo({ rIdx, cIdx }, event.target.getBoundingClientRect());
  }, []);

  // Context
  const { tableData } = React.useContext(TableContext);

  return (
    <>
      {test()}
      <div style={getCellStyle(tableData[rIdx][cIdx], isHighlighted)} onClick={onCellClick}>
        {getCellText(tableData[rIdx][cIdx])}
      </div>
    </>
  );
};

export default React.memo(TableCell);
