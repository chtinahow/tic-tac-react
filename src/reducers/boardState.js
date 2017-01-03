/* Action Types */
export const RESET_BOARD = 'RESET_BOARD';
export const CLAIM = 'CLAIM';

/* Action Creators */
export function resetBoard() {
  return {
    type: RESET_BOARD
  }
}

export function claim(coord) {
  return {
    type: CLAIM,
    coord
  }
}

const emptyBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

/* reducer */
export default function boardState(boardState = {
  board: emptyBoard.map((row) => row.slice()),
  turn: 1
}, action) {
  switch(action.type){
    case RESET_BOARD:
      return Object.assign({}, {board: emptyBoard.map((row) => row.slice()), turn: 1});
    case CLAIM:
      const boardCopy = boardState.board.slice();
      boardCopy[action.coord.y].splice(action.coord.x, 1, boardState.turn);

      /* check boardCopy if someone won */
      

      return Object.assign({}, {board: boardCopy, turn: (boardState.turn%2)+1});
    default:
      return boardState;
  }
}
