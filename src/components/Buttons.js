import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div className="row bell-buttons">
            <button onClick={() => {
                console.log("Start");
                console.log()
                this.props.bell.volume = 0.05;
                this.props.bell.play();
            }}>
            <img src="/images/bell.svg" alt="Bell" className="bell" />
            </button>
            <button onClick={() => {
                console.log("Pause");
                this.props.bell.pause();
                this.props.bell.currentTime = 0;
            }}>
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