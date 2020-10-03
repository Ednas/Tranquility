import React from 'react';
import logo from './globe.svg';
import Home from './Home';
import Footer from './Footer'
import HistoryFeed from './HistoryFeed';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Learn about NASA's earth history
        </p>
      </header>
      <Home />
      <HistoryFeed />
      <Footer />
    </div>
  );
}

export default App;
