import React from 'react';

class Option extends React.Component {
    choose = () => {
      this.props.onClick(this.props.optionNumber)
    }

    render() {
        return (
            <button className="btn button" onClick={this.choose}>
                {this.props.option}
            </button>
        );
    }
}

export default Option;