import React, { useEffect } from 'react';
import getWeather from './weatherService';
import './App.css';

const App = () => {
  useEffect(() => {
    getWeather({
      lat: '-0.013',
      lon: '51.49',
      units: 'metric',
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
