import React, { Component } from 'react';
import logo from './logo.svg';
import './less/index.css';
import GameMap from './components/GameMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tilegasm</h1>
        </header>
        <GameMap />
      </div>
    );
  }
}

export default App;
