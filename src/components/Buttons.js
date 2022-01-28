import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
            <div>
                <div className="row bell-buttons">
                    <button onClick={this.props.handleButtonClick}>
                        {this.props.buttonState ? 
                            <img src="/images/bell.svg" alt="Bell" className="bell" /> : 
                            <img src="/images/bell-slash.svg" alt="Bell slash"className="bell-slash"/>
                        }
                    </button>
                    
                </div>
                <div id="timer"></div>
            </div>
        );
    }
}

export default Buttons;