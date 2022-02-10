
import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalValue: '6',
      shortBellValue: '1',
      longBellValue: '3',
      isDebug: true
    };

    this.handleIntervalChange = this.handleIntervalChange.bind(this);
    this.handleShortBellChange = this.handleShortBellChange.bind(this);
    this.handleLongBellChange = this.handleLongBellChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIntervalChange(event) {
    if(this.state.isDebug) {
      console.log('handleIntervalChange: ', this.state.intervalValue);
    }
    this.setState({intervalValue: event.target.value});
  }

  handleShortBellChange(event) {
    if(this.state.isDebug) {
      console.log('handleShortBellChange: ', this.state.shortBellValue);
    }
    this.setState({shortBellValue: event.target.value});
  }

  handleLongBellChange(event) {
    if(this.state.isDebug) {
      console.log('handleLongBellChange: ', this.state.longBellValue);
    }
    this.setState({longBellValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Timer 
          intervalValue={this.state.intervalValue}
          shortBellValue={this.state.shortBellValue}
          longBellValue={this.state.longBellValue}

          handleIntervalChange={this.handleIntervalChange} 
          handleShortBellChange={this.handleShortBellChange} 
          handleLongBellChange={this.handleLongBellChange} 

          handleSubmit={this.handleSubmit}
          isDebug={this.state.isDebug}
        />
        {/* <Quotes /> */}

        <Footer />
      </div>
    );
  }
}

export default App;