import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        return (
                <div>
                    <button 
                        className="bell-buttons flex justify-center text-4xl"
                        onClick={this.props.handleButtonClick}
                    >
                        {this.props.buttonState ? 
                            <div className="bell-enabled">on</div> : 
                            <div className="bell-disabled">off</div>
                        }
                    </button>
                        
                    <div id="timer"></div>
                </div>
        );
    }
}

export default Buttons;