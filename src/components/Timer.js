import React, { Component } from 'react';
import AdvancedOptions from './AdvancedOptions';
import Buttons from './Buttons';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            title: 'Timer component',
            date: new Date(),
            futureDate: new Date(),
            isBellEnabled: false,
            Remaining: ''
        };
    }

    bell = new Audio("bells/shortBell.mp3");
    bellLong = new Audio("bells/longBell.mp3");

    handleStartClick = () => {
        if(this.props.isDebug) {
            console.log('handleStartClick');
        }

        this.setState({
            isBellEnabled: true
        });
        this.setFutureTime();
        this.bell.volume = 0.005;
    }

    handleEndClick = () => {
        if(this.props.isDebug) {
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
        if(this.props.isDebug) {
            console.log('handleButtonClick');
        }

        if(this.state.isBellEnabled == false){
            this.handleStartClick();
        } else {
            this.handleEndClick();
        }
 
    }

    strikeBell() {
        if(this.props.isDebug) {
            console.log('strikeBell');
        }
        this.bell.play();
        this.setFutureTime();
    }

    setFutureTime() {
        if(this.props.isDebug) {
            console.log('setFutureTime');
        }
        const future = new Date();
        // future.setMinutes( future.getMinutes() + parseInt(this.props.intervalValue, 10) )
        future.setSeconds( future.getSeconds() + parseInt(this.props.intervalValue, 10) )

        this.setState({
            futureDate: future
        });
    }

    minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
    }

    timeRemaining(now, future) {
        if(this.props.isDebug) {
            console.log('timeRemaining');
        }
        var remain = future - now;
        var minutes = Math.floor(remain/(1000*60));
        var seconds = Math.floor((remain/1000) - 60*minutes);

        var remainString = `Next strike: ${this.minTwoDigits(minutes)}:${this.minTwoDigits(seconds)}`;
        this.setState({
            remaining: remainString
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
        if(this.props.isDebug) {
            console.log('tick');
        }
        
        this.setState({
            date: new Date()
        });

        if( this.state.isBellEnabled && this.state.date > this.state.futureDate) {
            this.strikeBell()
        }

        this.timeRemaining(this.state.date, this.state.futureDate)
    }

    render() {
        return(
            <div className="timer-wrapper flex justify-center ">
                <div className="p-6">
                <Buttons buttonState={this.state.isBellEnabled} handleButtonClick={this.handleButtonClick}/>
                    
                    { !this.state.isBellEnabled && 
                        <div className='w-64 mt-3'>
                            <div className='text-xl'>
                                Bell disabled
                            </div> 
                        </div> 
                    }
                    { this.state.isBellEnabled &&  
                        <AdvancedOptions
                            remaining={this.state.remaining}

                            intervalValue={this.props.intervalValue}
                            shortBellValue={this.props.shortBellValue}
                            longBellValue={this.props.longBellValue}

                            handleIntervalChange={this.props.handleIntervalChange}
                            handleShortBellChange={this.props.handleShortBellChange}
                            handleLongBellChange={this.props.handleLongBellChange}

                            handleSubmit={this.props.handleSubmit}
                        />
                    }

                    {   this.props.isDebug &&
                        <div>
                            <strong>Debug mode: {this.state.title} </strong>
                            <div>Current date: {this.state.date.toLocaleTimeString()}</div>
                            { this.state.isBellEnabled && <div>Next Strike at: {this.state.futureDate.toLocaleTimeString()}</div> }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Timer;