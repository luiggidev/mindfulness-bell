import React, { Component } from 'react';
import './AdvancedOptions.css';

class AdvancedOptions extends Component {
      render() {
        return (
          <div>
            <div className="row adv-button">
                        <button onClick={this.props.handleButtonClick}>
                            {this.props.buttonState ? 
                                <img src="/images/settings.svg" alt="Bell" className="settings-button" /> : 
                                <img src="/images/settings.svg" alt="Bell slash"className="settings-button-slash"/>
                            }
                        </button>
                    </div>
            <div className="adv-options"> 
              <div>Advanced Options:</div>
              <form onSubmit={this.props.handleSubmit}>
                <label>
                  Minutes Between Bells: <input type="number" value={this.props.intervalValue} onChange={this.props.handleChange} />
                </label>
              </form> 
            </div>
          </div>
        );
      }
    }

export default AdvancedOptions;