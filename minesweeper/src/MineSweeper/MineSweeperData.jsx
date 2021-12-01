import React from 'react';

// Code for Table
export const CELL_CODE = {
  OPEN: 0, // Consider 0 or higher as opened cell
  NORMAL: -1,
  FLAG: -2,
  FLAG_MINE: -3,
  CLICKED_MINE: -4,
  MINE: -5,
};

// Initial MineSweeperData
const initialData = {
  tableData: null, // 2D array storing table data
  gameData: { nRow: 0, nCol: 0, nMine: 0 }, // Game's setup
  timer: 0, // How many seconds elapsed from game start
  result: '', // Game result
  halted: true, // Game halted when user win or clicked mine
  openedCount: 0, // Counts opened cell
};

// reducer action type
export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const UNFLAG_CELL = 'UNFLAG_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

/**
 * Function to plant mine: Initialize game board
 *
 * @param {number} nRow number of rows
 * @param {number} nCol number of columns
 * @param {number} nMine number of mines
 * @return {Array<Array<number>>} 2D array containing CODE for each cell
 */
const plantMine = (nRow, nCol, nMine) => {
  // Choose Mine's index
  const candidate = [...Array(nRow * nCol).keys()];
  const minesIdx = [];
  while (minesIdx.length < nMine) {
    minesIdx.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }

  // Create tableData (nRow by nCol array filled with CELL_CODE.NORMAL)
  const tableData = new Array(nRow)
    .fill(undefined)
    .map(() => new Array(nCol).fill(CELL_CODE.NORMAL));
  // Add mine to the tableData
  minesIdx.forEach((v) => {
    tableData[Math.floor(v / nCol)][v % nCol] = CELL_CODE.MINE;
  });

  return tableData;
};

/**
 * Reducer to update the state
 *
 * @param {object} state current state
 * @param {object} action Includes type of action and payload
 * @return {object} new state
 */
const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...initialData,
        tableData: plantMine(action.nRow, action.nCol, action.nMine),
        gameData: { nRow: action.nRow, nCol: action.nCol, nMine: action.nMine },
        halted: false,
      };
    case INCREMENT_TIMER:
      return { ...state, timer: state.timer + 1 };
    default:
      return state;
  }
};

// Context for MineSweeper Table
export const TableContext = React.createContext({
  tableData: null, // 2D array storing table data
  halted: true, // Game halted when user win or clicked mine
  dispatch: () => {}, // Function to update state
});

/**
 * React Provider that enables child elements to use TableContext
 *
 * @param {object} props Properties that passed from the parent Component.
 * @param {React.ReactNode} props.children Nodes inside Provider
 * @return {React.Provider} provider of TableContext
 */
export const TableProvider = ({ children }) => {
  // Reducer
  const [state, dispatch] = React.useReducer(reducer, initialData);

  // Context Value
  const value = React.useMemo(() => {
    return {
      tableData: state.tableData,
      halted: state.halted,
      dispatch: dispatch,
    };
  }, [state.tableData, state.halted]);

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
