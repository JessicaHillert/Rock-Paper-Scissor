import React from 'react';

class DeckScreen extends React.Component {
    render() {
        return (
            <div id="scoreBoard">
              <div className="score">
                {"Human: " + this.props.humanPoints + " points"}
              </div>
              <div className="score">
                {"Robot: " + this.props.robotPoints + " points"}
              </div>
            </div>
        );
    }
}

export default DeckScreen;