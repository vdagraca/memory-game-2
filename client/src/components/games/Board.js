import React, { PureComponent } from 'react'
import Card from "./Card"
import './Board.css'



class Board extends PureComponent {
    render() {
        return (
            this.props.board.map(rowIndex => rowIndex.map(tile =>
                tile = <div className="cards"><Card
                    rowIndex={rowIndex}
                /></div>
            ))
        )
    }
}




export default Board