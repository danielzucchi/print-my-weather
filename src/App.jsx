import React, { useEffect, useState } from 'react';
import getWeather from './weatherService';
import './App.css';

const App = () => {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, [setLocation]);

  const fetchWeather = () => {
    getWeather({
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
    }).then((todayWeather) => setWeather(todayWeather));
  };

  const icon = weather
    ? `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="App">
      <button type="button" onClick={() => fetchWeather()}>
        Get weather
      </button>
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
