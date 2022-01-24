
import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';

function App() {

  const [bell] = useState(new Audio("bells/shortBell.mp3"))

  return (
    <div className="App">
      <Header />
      <Buttons bell={bell}/>
      <Clock />
      <Footer />
    </div>
  );
}

export default App;
