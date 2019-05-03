import React, { PureComponent } from 'react'
import { Card } from "./Card"
import './Board.css'
import cardsArray from './imagesDatabase';

class Board extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            firstCard: null,
            flippingCards: 0,
        }
    }

    values = {
        checkFunction: () => {

            if (this.state.flippingCards < 2) {
                console.log('can continue...');
                return true;
            }
            else {
                console.log('already has two cards');
                return false;
            }
        },


        flippingCard: (args) => {
            const coupleId = cardsArray.map(card => card.coupleId)
            console.log('coupleId', coupleId)


            let flippingCards = this.state.flippingCards + 1;
            this.setState({ flippingCards });

            if (flippingCards == 1) {
                this.setState({ firstCard: args.card });
            }
            else if (flippingCards == 2) {
                if (this.state.firstCard == args.card) {
                    this.setState({ flippingCards: 0 })
                    console.log('right!', this.state.firstCard);
                } else {
                    console.log('wrong!');

                    // next user
                    // [...]

                    // score
                    // [...]
                }
            }
        }
    }

    render() {
        console.log('board', this.props.board)
        console.log('Board this.props.flipped test:', this.props.flipped)

        return (
            this.props.board.map((row, rowIndex) => {
                return <div className="cards">
                    {
                        row.map((picture, columnIndex) => {
                            const flipped = this.props.flipped[rowIndex][columnIndex]
                            console.log('flipped test:', flipped)
                            
                            return <Card
                                picture={picture}
                                values={this.values}
                                makeMove={this.props.makeMove}
                                flipped={flipped}
                            />
                        })
                    }
                </div>
            })
        )
    }
}

// this.props.board.map(rowIndex =>
//     rowIndex.map(tile => tile =
//         <img key={rowIndex} src="/images/back.png" alt="backtile" className="cards" />))


export default Board