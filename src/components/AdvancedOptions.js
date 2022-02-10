import React, { Component } from 'react';

class AdvancedOptions extends Component {
    render() {
        return (
            <div className="w-64 mt-3">
                <div className="text-xl">Advanced Options:</div>
                <div className='next-bell'>
                    {this.props.remaining}
                </div>
                
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Minutes Between Bells: 
                        <input 
                            type="number" 
                            value={this.props.intervalValue} 
                            onChange={this.props.handleIntervalChange} 
                        />
                    </label>
                </form>

                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Number of Short bells:
                        <input 
                            type="number" 
                            value={this.props.shortBellValue} 
                            onChange={this.props.handleShortBellChange} 
                        />
                    </label>
                </form>

                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Number of Long bells:
                        <input 
                            type="number" 
                            value={this.props.longBellValue} 
                            onChange={this.props.handleLongBellChange} 
                        />
                    </label>
                </form>
                <br/>
                <button className="bg-white p-1">Strike Bell button</button>
            </div>
        );
    }
}

export default AdvancedOptions;