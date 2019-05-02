import React, { PureComponent } from 'react'
import ReactCardFlip from "react-card-flip";
import './Card.css'
import cardsArray from './imagesDatabase'

export class Card extends PureComponent {

    constructor(props) {
        super(props);
        
        console.log('constructing test:', this.props.picture, this.props.flipped)

        this.state = {
            isFlipped: false,
            card: this.props.picture
        }
    }

    handleClick = (e) => {
        console.log('e target!!!: ',e.target)
        e.preventDefault();
        // already flipped, can not flip again the same card
        if (this.state.isFlipped) {
            console.log('already flipped');
            return;
        }

        console.log(this.props.picture);
        // can not flip more than 2 cards
        if (this.props.values.checkFunction({ card: this.props.picture })) {
            // flip the card
            this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
            this.props.values.flippingCard({ card: this.props.picture });
        }

        this.props.makeMove(this.props.picture)
    }

    render() {
        const images = cardsArray.map(card => card.img)
        return (

            < ReactCardFlip
                isFlipped={this.state.isFlipped} >
                <div key="front"
                >
                    <img className="cards" key={this.props.picture}
                        // style={this.props.styles.image}
                        src={"/images/back.png"} onClick={this.handleClick}
                    />
                </div>
                <div key="back"
                // style={this.props.styles.card}
                >
                    <img className="cards"
                        // style={this.props.styles.image}
                        src={images[this.props.picture]} onClick={this.handleClick}
                    />
                </div>
            </ReactCardFlip >

        )
    }
}
