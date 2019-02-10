import React from 'react';
import Option from "./option.js";

class DeckScreen extends React.Component {
    render() {
        return (
            <div>
                <p className="game-text">Choose your hand</p>
                <div className="buttons-container">
                    <Option option="Rock" optionNumber={0} onClick={this.props.onClick} />
                    <Option option="Paper" optionNumber={1} onClick={this.props.onClick} />
                    <Option option="Scissor" optionNumber={2} onClick={this.props.onClick} />
                </div>
            </div>
        );
    }
}

export default DeckScreen;