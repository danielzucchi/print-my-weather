import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getBackgroundColor from './getBackgroundColor'
import WindIcon from '../assets/wind.svg'
import HumidityIcon from '../assets/humidity.svg'
import CloudCoverIcon from '../assets/cloud.svg'
import RainIcon from '../assets/rain.svg'
import SunriseIcon from '../assets/sunrise.svg'
import SunsetIcon from '../assets/sunset.svg'
import UVIcon from '../assets/uv.svg'

const CardWrapper = styled.div`
  z-index: 100;
  color: #fff;
  margin: 0 auto;
  border-radius: 15px;
  justify-content: center;
  box-sizing: border-box;
  display: block;
  padding: 20px 30px;
  width: 700px;
  background-image: ${({ maxTemp }) => getBackgroundColor({ maxTemp })};
`

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TodayTitle = styled.h1`
  margin: 0 20px;
`

const MaxTempValue = styled.p`
  font-size: 3.5em;
  margin: 0;
`

const MinTempValue = styled.p`
  font-size: 2.5em;
  margin: 0;
`

const WeatherLabel = styled.p`
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  margin-top: -20px;
`

const TempWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  flex-direction: column;
  text-align: right;
  justify-content: center;
`

const DetailsWrapper = styled.div`
  display: flex;
  margin-left: 70px;
  flex-direction: column;
  align-content: right;
  width: 100%;
`

const WeatherDataPoint = styled.div`
  margin: 5px 0;
`

const WeatherIcon = styled.img`
  height: 20px;
  width: auto;
  float: left;
  margin: 0 10px;
`

const TodayWeatherCard = ({ todayWeather }) => {
  const {
    weather,
    temp: { max: maxTemp, min: minTemp },
    wind_speed: windSpeed,
    wind_deg: windDirection,
    humidity,
    clouds: cloudCover,
    pop: chanceOfRain,
    rain,
    sunrise,
    sunset,
    uvi,
  } = todayWeather

  const weatherDetails = weather[0]
  const { icon: weatherIcon, description: weatherDescription } = weatherDetails

  return (
    <CardWrapper maxTemp={maxTemp}>
      <TodayTitle>Today</TodayTitle>
      <CardInner>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
            alt="weather"
          />
          <WeatherLabel>{weatherDescription}</WeatherLabel>
        </div>
        <TempWrapper>
          <MaxTempValue>{`${Math.round(maxTemp)}º`}</MaxTempValue>
          <MinTempValue>{`${Math.round(minTemp)}º`}</MinTempValue>
        </TempWrapper>
        <DetailsWrapper>
          <WeatherDataPoint>
            <WeatherIcon src={WindIcon} />
            <span>
              {`Wind: ${Math.round(windSpeed * 3.6)} km/h | 
            ${windDirection}º`}
            </span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={CloudCoverIcon} />
            <span>{`Cloudiness: ${Math.round(cloudCover)}%`}</span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>
              {`Rain: ${Math.round(chanceOfRain * 100)}% chance`}
              {rain ? ` | ${rain} mm` : null}
            </span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={HumidityIcon} />
            <span>{`Humidity: ${Math.round(humidity)}%`}</span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={UVIcon} />
            <span>{`UV Index: ${uvi}`}</span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={SunriseIcon} />
            <span>
              {`Sunrise: ${new Date(sunrise * 1000)
                .toUTCString()
                .slice(17, 22)}`}
            </span>
          </WeatherDataPoint>
          <WeatherDataPoint>
            <WeatherIcon src={SunsetIcon} />
            <span>
              {`Sunset: ${new Date(sunset * 1000).toUTCString().slice(17, 22)}`}
            </span>
          </WeatherDataPoint>
        </DetailsWrapper>
      </CardInner>
    </CardWrapper>
  )
}

TodayWeatherCard.propTypes = {
  todayWeather: PropTypes.shape({
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    temp: PropTypes.shape({ max: PropTypes.number, min: PropTypes.number }),
    wind_speed: PropTypes.number,
    wind_deg: PropTypes.number,
    humidity: PropTypes.number,
    clouds: PropTypes.number,
    pop: PropTypes.number,
    rain: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    uvi: PropTypes.number,
  }).isRequired,
}

export default TodayWeatherCard
