// Initial TicTacToe Data
export const initialData = {
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: { row: -1, col: -1 },
  turn: 'O',
  result: '',
};

// Action Types
export const CLICK_CELL = 'CLICK_CELL';
export const SET_RESULT = 'SET_RESULT';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

// Reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]];
      tableData[action.row][action.col] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: { row: action.row, col: action.col },
      };
    }
    case SET_RESULT: {
      return {
        ...state,
        result: action.result,
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return { ...initialData };
    }
    default: {
      console.error('Not Defined Action Type');
      return state;
    }
  }
};
