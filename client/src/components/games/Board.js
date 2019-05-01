import React, { PureComponent } from 'react'
import  {Card}  from "./Card"
import './Board.css'



class Board extends PureComponent {
    render() {
        console.log('this.props.board test:', this.props.board)
        return (
            this.props.board.map(row =>
                <div className="cards">
                    {row.map(picture => <Card picture={picture} />)}
                </div>
            )
        )
    }
}

// this.props.board.map(rowIndex =>
//     rowIndex.map(tile => tile =
//         <img key={rowIndex} src="/images/back.png" alt="backtile" className="cards" />))


export default Board