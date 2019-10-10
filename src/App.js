import React from 'react';
import './App.css';
import Game from './components/game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Math Racer
        </h1>
      </header>
      <Game />
    </div>
  );
}

export default App;
