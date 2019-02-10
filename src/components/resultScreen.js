import React from 'react';

class ResultScreen extends React.Component {
    choose = () => {
        this.props.onClick(this.props.optionNumber)
    }

    render() {
        var gameText = this.props.result === "draw" ? "It's a draw!" : "You " + this.props.result + "!";

        console.log("props", this.props);
        return (
            <div>
                <p className="game-text">
                    {this.props.humanMove.toUpperCase() + " vs " + this.props.robotMove.toUpperCase()}
                </p>
                <p className="result-text">
                    {gameText}
                </p>
                <div className="buttons-container">
                    <button className="btn button" onClick={this.props.onClick}>
                        Play again
                    </button>
                </div>
            </div>
        );
    }
}

export default ResultScreen;