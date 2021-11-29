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
  player: '', // For 1P Mode
  difficulty: '', // For 1P Mode
};

// Action Types
export const CLICK_CELL = 'CLICK_CELL';
export const SET_RESULT = 'SET_RESULT';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const RESET_GAME_1P = 'RESET_GAME_1P';
export const INIT_1P = 'INIT_1P'; // For 1P Mode Initialization
export const SET_PLAYER = 'SET_PLAYER'; // For 1P Mode
export const SET_DIFFICULTY = 'SET_DIFFICULTY'; // For 1P Mode

/**
 * Reducer Function to change TicTacToe State
 *
 * @param {object} state Current state
 * @param {object} action Includes type of action and payload
 * @return {object} New State
 */
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
    case RESET_GAME_1P: {
      // For 1P Game Reset
      return {
        ...initialData,
        player: action.player,
        difficulty: action.difficulty,
      };
    }
    case INIT_1P: {
      // For 1P Mode Initialization
      return {
        ...state,
        player: 'O',
        difficulty: 'easy',
      };
    }
    case SET_PLAYER: {
      // For 1P Mode
      return {
        ...initialData,
        player: action.player,
        difficulty: state.difficulty,
      };
    }
    case SET_DIFFICULTY: {
      // For 1P Mode
      return {
        ...initialData,
        player: state.player,
        difficulty: action.difficulty,
      };
    }
    default: {
      console.error('Not Defined Action Type');
      return state;
    }
  }
};
