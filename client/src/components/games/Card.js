import React, { PureComponent } from 'react'
import ReactCardFlip from "react-card-flip";
import './Card.css'
import cardsArray from './imagesDatabase'

export class Card extends PureComponent {
    state = {
        isFlipped: false
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
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
