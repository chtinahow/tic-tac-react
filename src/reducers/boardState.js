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
  turn: 1,
  winner: 0
}, action) {
  switch(action.type){
    case RESET_BOARD:
      return Object.assign({}, {board: emptyBoard.map((row) => row.slice()), turn: 1, winner: 0});
    case CLAIM:
      const boardCopy = boardState.board.slice();
      boardCopy[action.coord.y].splice(action.coord.x, 1, boardState.turn);

      /* check boardCopy if someone won */
      // check rows
      let p1winner = boardCopy.some((row) => {
        return row.every((space) => (space === 1));
      });
      let p2winner = boardCopy.some((row) => {
        return row.every((space) => (space === 2));
      });

      // check cols
      // transform board so that the cols are in rows
      const mirrorBoard = boardCopy.map((row, y, board) => {
        return row.map((square, x) => {
          return board[x][y];
        });
      });
      // use the same check as 'check rows'
      p1winner = p1winner || mirrorBoard.some((col) => {
        return col.every((space) => (space === 1));
      });
      p2winner = p2winner || mirrorBoard.some((col) => {
        return col.every((space) => (space === 2));
      });

      // check diags
      // make a 2d matrix, where if either row is filled, we have a winner
      const diagonals = [
        [boardCopy[0][0], boardCopy[1][1], boardCopy[2][2]],
        [boardCopy[0][2], boardCopy[1][1], boardCopy[2][0]],
      ]
      // use the same check as 'check rows'
      p1winner = p1winner || diagonals.some((diag) => {
        return diag.every((space) => (space === 1));
      });
      p2winner = p2winner || diagonals.some((diag) => {
        return diag.every((space) => (space === 2));
      });

      // check if p1 or p2 won
      let winner = boardState.winner;
      if (p1winner) {
        winner = 1;
      } else if (p2winner) {
        winner = 2;
      }

      return Object.assign({}, {board: boardCopy, turn: (boardState.turn%2)+1, winner: winner});
    default:
      return boardState;
  }
}
