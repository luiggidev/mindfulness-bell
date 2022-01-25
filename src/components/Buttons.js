import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="row bell-buttons">
            <button onClick={this.props.handleStartClick}>
            <img src="/images/bell.svg" alt="Bell" className="bell" />
            </button>
            <button onClick={this.props.handleEndClick}>
            <img
                src="/images/bell-slash.svg"
                alt="Bell slash"
                className="bell-slash"
            />
            </button>
            <div id="timer"></div>
        </div>
        );
    }
}

export default Buttons;