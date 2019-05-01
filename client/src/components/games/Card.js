import React, { PureComponent } from 'react'
import ReactCardFlip from "react-card-flip";
import './Card.css'
import { isNullOrUndefined } from 'util';

class Card extends PureComponent {


    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {

        return (
            <ReactCardFlip
                isFlipped={this.state.isFlipped}>
                <div key="front"
                >
                    <img className="cards" key={this.props.rowIndex}
                        // style={this.props.styles.image}
                        src="/images/back.png" onClick={this.handleClick}
                    />
                </div>
                <div key="back"
                // style={this.props.styles.card}
                >
                    <img className="cards"
                        // style={this.props.styles.image}
                        src="/images/b.png" onClick={this.handleClick}
                    />
                </div>
            </ReactCardFlip>

        )
    }
}

export default Card
