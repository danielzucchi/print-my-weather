import React, { useEffect, useState } from 'react';
import getWeather from './weatherService';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const todayWeather = await getWeather({
        lat: '-0.013',
        lon: '51.49',
        units: 'metric',
      });

      setWeather(todayWeather);
      console.log(todayWeather);
    }

    fetchWeather();
  }, [setWeather]);

  const icon = weather
    ? `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="App">
      <header className="App-header">
        {weather && (
          <>
            <img src={icon} alt="weather" />
            <p>{weather.current.weather[0].description}</p>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
