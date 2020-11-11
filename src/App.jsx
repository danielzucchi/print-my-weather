import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getWeather from './services/weatherService'

const App = () => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    })
  }, [setLocation])

  const fetchWeather = () => {
    getWeather({
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
    })
      .then((todayWeather) => setWeather(todayWeather))
      .catch(() => console.log('Something went wrong.'))
  }

  const AppWrapper = styled.div`
    margin: 0 auto;
    width: 700px;
    background-color: #c2c2c2;
  `

  return (
    <AppWrapper>
      <button type="button" onClick={() => fetchWeather()}>
        Get weather
      </button>
      <header className="App-header">
        {weather && (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
              alt="weather"
            />
            <p>{Math.floor(weather.current.temp)}</p>
            <p>{weather.current.weather[0].description}</p>
            {weather.daily.map((day) => (
              <div key={day.dt}>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather"
                />
                <p>{Math.floor(day.temp.day)}</p>
                <p>{day.weather[0].description}</p>
              </div>
            ))}
          </>
        )}
      </header>
    </AppWrapper>
  )
}

export default App
