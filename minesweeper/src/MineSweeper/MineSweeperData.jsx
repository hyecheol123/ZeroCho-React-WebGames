import React from 'react';

// Code for Table
export const CELL_CODE = {
  OPEN: 0, // Consider 0 or higher as opened cell
  NORMAL: -1,
  FLAG: -2,
  FLAG_MINE: -3,
  CLICKED_MINE: -4,
  DISCOVERED_MINE: -5,
  MINE: -6,
};

// Initial MineSweeperData
const initialData = {
  tableData: null, // 2D array storing table data
  gameData: { nRow: 0, nCol: 0, nMine: 0 }, // Game's setup
  result: '', // Game result
  halted: true, // Game halted when user win or clicked
  playTime: 0, // Play Time of the game. Only updated when the game end
  openedCount: 0, // Counts opened cell
};

// reducer action type
export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const UNFLAG_CELL = 'UNFLAG_CELL';
export const UPDATE_PLAYTIME = 'UPDATE_PLAYTIME';

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
  const tableData = new Array(parseInt(nRow))
    .fill(undefined)
    .map(() => new Array(parseInt(nCol)).fill(CELL_CODE.NORMAL));
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
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData[action.rIdx] = [...state.tableData[action.rIdx]];
      tableData[action.rIdx][action.cIdx] = CELL_CODE.OPEN;
      // TODO: Display mine count
      // TODO: Recursively open cell
      return { ...state, tableData };
    }
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.rIdx] = [...state.tableData[action.rIdx]];
      tableData[action.rIdx][action.cIdx] = CELL_CODE.CLICKED_MINE;
      // TODO: Display all existing mine
      return { ...state, tableData, halted: true };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      tableData[action.rIdx] = [...state.tableData[action.rIdx]];
      // eslint-disable-next-line default-case
      switch (tableData[action.rIdx][action.cIdx]) {
        case CELL_CODE.NORMAL:
          tableData[action.rIdx][action.cIdx] = CELL_CODE.FLAG;
          break;
        case CELL_CODE.MINE:
          tableData[action.rIdx][action.cIdx] = CELL_CODE.FLAG_MINE;
          break;
      }
      return { ...state, tableData };
    }
    case UNFLAG_CELL: {
      const tableData = [...state.tableData];
      tableData[action.rIdx] = [...state.tableData[action.rIdx]];
      // eslint-disable-next-line default-case
      switch (tableData[action.rIdx][action.cIdx]) {
        case CELL_CODE.FLAG:
          tableData[action.rIdx][action.cIdx] = CELL_CODE.NORMAL;
          break;
        case CELL_CODE.FLAG_MINE:
          tableData[action.rIdx][action.cIdx] = CELL_CODE.MINE;
          break;
      }
      return { ...state, tableData };
    }
    case UPDATE_PLAYTIME:
      return { ...state, playTime: action.playTime };
    default:
      return state;
  }
};

// Context for MineSweeper Table
export const TableContext = React.createContext({
  tableData: null, // 2D array storing table data
  halted: true, // Game halted when user win or clicked mine
  playTime: 0, // Play Time of the game. Only updated when the game end
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
      playTime: state.playTime,
      dispatch: dispatch,
    };
  }, [state.tableData, state.halted, state.playTime]);

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
