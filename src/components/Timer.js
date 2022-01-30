import React, { Component } from 'react';
import Buttons from './Buttons';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            title: 'Timer component',
            date: new Date(),
            futureDate: new Date(),
            isBellEnabled: false
        };
    }
    
    isDebug = true;
    bell = new Audio("bells/shortBell.mp3");

    handleStartClick = () => {
        if(this.isDebug) {
            console.log('handleStartClick');
        }

        this.setState({
            isBellEnabled: true
        });
        this.setFutureTime();
        this.bell.volume = 0.05;
    }

    handleEndClick = () => {
        if(this.isDebug) {
            console.log('handleEndClick');
        }

        this.setState({
            isBellEnabled: false
        });
        console.log("End Bell");
        this.bell.pause();
        this.bell.currentTime = 0;
    }

    handleButtonClick = () => {
        if(this.isDebug) {
            console.log('handleStartClick');
        }

        if(this.state.isBellEnabled == false){
            this.handleStartClick();
        } else {
            this.handleEndClick();
        }
 
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
        // future.setMinutes( future.getMinutes() + parseInt(this.props.intervalValue, 10) )
        future.setSeconds( future.getSeconds() + parseInt(this.props.intervalValue, 10) )

        this.setState({
            futureDate: future
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

        if( this.state.isBellEnabled && this.state.date > this.state.futureDate) {
            this.strikeBell()
        }
    }

    render() {
        return(
            <div>
                <Buttons buttonState={this.state.isBellEnabled} handleButtonClick={this.handleButtonClick}/>
                {this.isDebug &&
                    <div className="font-size-small">
                        <strong>Debug mode: {this.state.title} </strong>
                        <div>Current date: {this.state.date.toLocaleTimeString()}</div>
                        {this.state.isBellEnabled && <div>Next Strike at: {this.state.futureDate.toLocaleTimeString()}</div> }
                        {!this.state.isBellEnabled && <div>Bell disabled</div> }
                        
                    </div>
                }
            </div>
        );
    }
}

export default Timer;