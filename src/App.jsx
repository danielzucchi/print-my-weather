import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getWeather from './services/weatherService'
import TodayWeatherCard from './components/TodayWeatherCard'
import HourlyWeatherCard from './components/HourlyWeatherCard'
import DayWeatherCard from './components/DayWeatherCard'
import LoaddingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import HotelLogo from './assets/hotelLogo.jpeg'

const AppWrapper = styled.div`
  margin: 0 auto;

  @media print {
    margin-top: -60px;
    margin-bottom: 0;
    zoom: 0.7;
    -webkit-print-color-adjust: exact;
  }

  @page {
    size: A4;
  }
`

const Button = styled.button`
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  margin: 10px auto;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  border-radius: 10px;
  display: block;
  outline: none;
  border: none;

  &:hover {
    background-position: right center;
    text-decoration: none;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`

const Logo = styled.img`
  height: 200px;
  width: auto;
  margin: 40px auto 20px auto;
`

const DailyWeatherCard = styled.li`
  list-style: none;
  margin: 10px 0;
`

const App = () => {
  const [location, setLocation] = useState({})
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLocation({
      lat: '50.3350',
      lon: '4.6365',
    })
  }, [setLocation])

  const fetchWeather = () => {
    setError(null)
    setLoading(true)
    getWeather({
      lat: location.lat,
      lon: location.lon,
      units: 'metric',
    })
      .then((todayWeather) => {
        setLoading(false)
        setWeather(todayWeather)
      })
      .catch(() => {
        setError(
          'An error has occurred. Try refreshing the page and clicking to get weather again.',
        )
        setLoading(false)
      })
  }

  const printToPdf = () => {
    window.print()
  }

  return (
    <AppWrapper>
      <ButtonWrapper>
        <Button type="button" onClick={() => fetchWeather()}>
          Get weather
        </Button>
        <Button type="button" onClick={() => printToPdf()}>
          Print Weather
        </Button>
      </ButtonWrapper>
      <div style={{ textAlign: 'center' }}>
        <Logo src={HotelLogo} />
      </div>
      {error && <ErrorMessage error={error} />}
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <LoaddingSpinner />
        </div>
      )}
      {weather && (
        <>
          <TodayWeatherCard todayWeather={weather.daily[0]} />
          <HourlyWeatherCard hourlyWeather={weather.hourly} />
          {weather.daily
            .filter((item, index) => index !== 0)
            .slice(0, -2)
            .map((day) => {
              const {
                dt: date,
                pop: chanceOfRain,
                temp: { max: maxTemp, min: minTemp },
                weather: weatherDetails,
              } = day
              const weatherDetailsPoint = weatherDetails[0]
              const { icon, description } = weatherDetailsPoint
              return (
                <DailyWeatherCard key={date}>
                  <DayWeatherCard
                    date={date}
                    chanceOfRain={chanceOfRain}
                    maxTemp={maxTemp}
                    minTemp={minTemp}
                    icon={icon}
                    description={description}
                  />
                </DailyWeatherCard>
              )
            })}
        </>
      )}
    </AppWrapper>
  )
}

export default App
