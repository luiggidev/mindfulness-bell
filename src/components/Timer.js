import React, { Component } from 'react';
import Buttons from './Buttons';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            title: 'Timer component',
            futureDate: new Date()
        };
    }

    isDebug = true;
    bell = new Audio("bells/shortBell.mp3");
    isBellEnabled = false;

    handleStartClick = () => {
        if(this.isDebug) {
            console.log('handleStartClick');
        }

        this.isBellEnabled = true;
        this.setFutureTime();
        this.bell.volume = 0.05;
    }

    handleEndClick = () => {
        if(this.isDebug) {
            console.log('handleEndClick');
        }

        this.isBellEnabled = false;
        console.log("End Bell");
        console.log()
        this.bell.pause();
        this.bell.currentTime = 0;
    }

    strikeBell() {
        if(this.isDebug) {
            console.log('strikeBell');
        }

        this.bell.play();
        this.setFutureTime();
    }

    setFutureTime() {
        if(this.isDebug) {
            console.log('setFutureTime');
        }

        const future = new Date();
        // const timeToAddInMinutes = 15;
        // future.setMinutes( future.getMinutes() + timeToAddInMinutes );
        const timeToAddInSeconds = 6;
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
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        if(this.isDebug) {
            console.log('tick');
        }
        
        this.setState({
            date: new Date()
        });

        if( this.isBellEnabled && this.state.date > this.state.futureDate) {
            this.strikeBell()
        }
    }

    render() {
        return(
            <div>
                <Buttons handleStartClick={this.handleStartClick} handleEndClick={this.handleEndClick}/>
                {this.isDebug &&
                    <div className="font-size-small">
                        <strong>Debug mode: {this.state.title} </strong>
                        <div>Current date: {this.state.date.toLocaleTimeString()}</div>
                        {this.isBellEnabled && <div>Next Strike at: {this.state.futureDate.toLocaleTimeString()}</div> }
                        {!this.isBellEnabled && <div>Bell disabled</div> }
                        
                    </div>
                }
            </div>
        );
    }
}

export default Timer;