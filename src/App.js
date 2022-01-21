
import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Timer from './components/Timer';
import Footer from './components/Footer';

function App() {

  const [bell, setBell ] = useState(new Audio("bells/shortBell.mp3"))

  return (
    <div className="App">
      <Header />
      <Buttons bell={bell}/>
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
