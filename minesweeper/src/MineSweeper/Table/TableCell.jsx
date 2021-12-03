import React from 'react';
import { CELL_CODE } from '../MineSweeperData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons';

/**
 * Function to get cell's style (background)
 *
 * @param {number} cellCode cell code for current cell
 * @param {boolean} highlighted Indicate whether the cell is highlighted or not
 * @return {object} CSS Style for the cell
 */
const getCellStyle = (cellCode, highlighted) => {
  const style = {};

  // Check whether cell is highlighted or not
  if (highlighted) {
    style.border = '2px solid yellow';
    style.width = '21px';
    style.height = '21px';
  }

  // Define style based on the cellCode
  switch (cellCode) {
    case CELL_CODE.NORMAL:
    case CELL_CODE.FLAG:
    case CELL_CODE.FLAG_MINE:
    case CELL_CODE.MINE:
      style.backgroundColor = 'limegreen';
      break;
    case CELL_CODE.CLICKED_MINE:
      style.backgroundColor = 'yellow';
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
      if (cellCode !== 0) {
        return (
          <span style={{ color: 'red', fontWeight: 700 }}>{cellCode}</span>
        );
      } else {
        return '';
      }
  }
};

/**
 * React Functional Element for TableCell
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {number} props.rIdx Index of row
 * @param {number} props.cIdx Index of column
 * @param {data} props.data Cell Data
 * @param {boolean} props.isHighlighted Whether cell is highlighted or not
 * @param {function} props.setMenuInfo Function to set information which will be
 *   used to draw the menu.
 * @return {React.ReactElement} React Element referring TableCell
 */
const TableCell = ({ rIdx, cIdx, data, isHighlighted, setMenuInfo }) => {
  const test = () => {
    console.log(`tableCell Reached`);
  };

  /**
   * Function to highlight clicked cell and show menu
   *
   * @param {Event} event click event from table cell
   */
  const onCellClick = React.useCallback(
    (event) => {
      // When the cell is currently clicked, do nothing
      if (isHighlighted || data >= 0) {
        return;
      }

      // Highlight and display menu
      setMenuInfo({ rIdx, cIdx }, event.currentTarget.getBoundingClientRect());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isHighlighted]
  );

  return (
    <>
      {test()}
      <div style={getCellStyle(data, isHighlighted)} onClick={onCellClick}>
        {getCellText(data)}
      </div>
    </>
  );
};

export default React.memo(TableCell);
