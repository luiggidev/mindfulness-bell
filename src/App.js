
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Timer from './components/Timer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
