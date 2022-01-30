import React, { Component } from 'react';
import './AdvancedOptions.css';

class AdvancedOptions extends Component {
      render() {
        return (
        <div className="adv-options"> 
          <div>Advanced Options:</div>
          <form onSubmit={this.props.handleSubmit}>
            <label>
              Minutes Between Bells: <input type="number" value={this.props.intervalValue} onChange={this.props.handleChange} />
            </label>
          </form> 
        </div>
        );
      }
    }

export default AdvancedOptions;