import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>{this.props.date}</div>
                <div>{this.props.futureDate}</div>
            </div>
        );
    }
}

export default Timer;