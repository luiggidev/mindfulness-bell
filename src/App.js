
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
      value: '4',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Timer 
          intervalValue={this.state.value} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
        {/* <Quotes /> */}
        <Footer />
      </div>
    );
  }
}

export default App;