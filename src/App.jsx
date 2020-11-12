import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getWeather from './services/weatherService'
import TodayWeatherCard from './components/TodayWeatherCard'
import LoaddingSpinner from './components/LoadingSpinner/LoadingSpinner'

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  margin: 10px 10px 20px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 10px;
  display: block;
  outline: none;

  &:hover {
    background-position: right center;
    text-decoration: none;
  }
`

const App = () => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLocation({
      lat: '50.3350',
      lon: '4.6365',
    })
  }, [setLocation])

  const fetchWeather = () => {
    setLoading(true)
    getWeather({
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
    }).then((todayWeather) => {
      setLoading(false)
      setWeather(todayWeather)
    })
  }

  return (
    <AppWrapper>
      <Button type="button" onClick={() => fetchWeather()}>
        Get weather
      </Button>
      <header className="App-header">
        {loading && <LoaddingSpinner />}
        {weather && (
          <>
            <TodayWeatherCard todayWeather={weather.daily[0]} />
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
