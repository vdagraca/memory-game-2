import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board, Symbol, Row } from './entities'
var _ = require('lodash')

@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    const symbols = ['x', 'o', null]
    return board.length === 7 &&
      board.every(row =>
        row.length === 8 &&
        row.every(symbol => symbols.includes(symbol)))
  }
}

export const isValidTransition = (playerSymbol: Symbol, from: Board, to: Board) => {
  const changes = from
    .map(
      (row, rowIndex) => row.map((symbol, columnIndex) => ({
        from: symbol,
        to: to[rowIndex][columnIndex]
      }))
    )
    .reduce((a, b) => a.concat(b))
    .filter(change => change.from !== change.to)

  return changes.length === 1 &&
    changes[0].to === playerSymbol &&
    changes[0].from === null
}

export const calculateWinner = (board: Board) => {
  return true;
}


/*
export const calculateWinner = (board: Board) : Symbol | null =>
board
.concat(
  // vertical winner
  [0, 1, 2].map(n => board.map(row => row[n])) as Row[]
)
.concat(
  [
    // diagonal winner ltr
    [0, 1, 2].map(n => board[n][n]),
    // diagonal winner rtl
  [0, 1, 2].map(n => board[2 - n][n])
  ] as Row[]
)
.filter(row => row[0] && row.every(symbol => symbol === row[0]))
.map(row => row[0])[0] || null
*/

export const finished = (board: Board): boolean =>
  board
    .reduce((a, b) => a.concat(b) as Row)
    .every(symbol => symbol !== null)

export const randomize = () => {
  return _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
}



