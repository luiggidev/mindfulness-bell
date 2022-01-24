import React, { Component } from 'react';
import Timer from './Timer'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            title: 'Timer component',
            futureDate: new Date()
        };
    }

    setFutureTime() {
        const future = new Date();
        // const timeToAddInMinutes = 15;
        // future.setMinutes( future.getMinutes() + timeToAddInMinutes );
        const timeToAddInSeconds = 7;
        future.setSeconds( future.getSeconds() + timeToAddInSeconds )

        this.setState({
            futureDate: future
            // futureDate: future.setMinutes( future.getMinutes() + timeToAddInMinutes )
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        this.setFutureTime()
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div>
                {/* <h3>Clock component</h3> */}
                {/* <p>It is {this.state.date.toLocaleTimeString()}</p> */}
                <Timer
                    futureDate={this.state.futureDate.toLocaleTimeString()}
                    title={this.state.title} 
                    date={this.state.date.toLocaleTimeString()}
                />
            </div>
        );
    }
}

export default Clock;