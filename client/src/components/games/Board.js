import React, { PureComponent } from 'react'
import './Board.css'

// const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn) => {
//   return (
//     <button
//       className="board-tile"
//       disabled={hasTurn}
//       onClick={() => makeMove(rowIndex, cellIndex)}
//       key={`${rowIndex}-${cellIndex}`}
//     >{symbol || '-'}</button>
//   )
// }

// export default ({ board, makeMove }) => board.map((cells, rowIndex) =>
//   <div key={rowIndex}>
//     {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, symbol, false))}
//   </div>
// )


// 

class Board extends PureComponent {
  render() {
    console.log('board', this.props.board)
    return (
      this.props.board.map(rowIndex =>
        rowIndex.map(tile => tile =
          <img key={rowIndex} src="/images/back.png" alt="backtile" className="cards"/>))

      // (hand, rowIndex) => {
      //   if (hand.flipped === true || hand.matched === true) {
      //     return <img key={rowIndex} src={`/images/${hand.id}.png`} onClick={(event) => this.props.makeMove(this.props.game, rowIndex)} className="board-tile" alt="tile" />
      //   } else {
      //     return <img key={rowIndex} src={"/images/back.png"} onClick={(event) => this.props.makeMove(this.props.game, rowIndex)} className="board-tile" alt="tile" />
      //   }
      // })
      // )
    )
  }
}
export default Board