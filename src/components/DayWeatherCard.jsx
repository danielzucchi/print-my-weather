import React from 'react'
import styled from 'styled-components'
import getBackgroundColor from './getBackgroundColor'
import RainIcon from '../assets/rain.svg'

const CardWrapper = styled.div`
  color: #fff;
  margin: 0 auto;
  border-radius: 15px;
  justify-content: center;
  box-sizing: border-box;
  display: block;
  padding: 10px 20px;
  width: 550px;
  background-image: ${({ maxTemp }) => getBackgroundColor({ maxTemp })};
`

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const DayLabel = styled.p`
  text-align: center;
  font-size: 1.3em;
  margin: 0;
  width: 50px;
`

const MaxTempValue = styled.p`
  font-size: 3.5em;
  margin: 0 10px;
`

const MinTempValue = styled.p`
  font-size: 2.5em;
  margin: 0 10px;
`
const WeatherLabel = styled.p`
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
  margin: 0 10px;
  max-width: 70px;
`

const WeatherDataPoint = styled.div`
  margin: 0;
  margin-left: 15px;
  font-size: 1.2em;
`

const WeatherIcon = styled.img`
  height: 20px;
  width: auto;
  float: left;
  margin: 0 10px;
`

const DayWeatherCard = ({
  date,
  chanceOfRain,
  maxTemp,
  minTemp,
  description,
  icon,
}) => {
  return (
    <CardWrapper maxTemp={maxTemp}>
      <CardInner>
        <DayLabel>{new Date(date * 1000).toUTCString().slice(0, 3)}</DayLabel>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather"
        />
        <WeatherLabel>{description}</WeatherLabel>
        <MaxTempValue>{`${Math.round(maxTemp)}º`}</MaxTempValue>
        <MinTempValue>{`${Math.round(minTemp)}º`}</MinTempValue>
        <WeatherDataPoint>
          <WeatherIcon src={RainIcon} />
          <span>{`${Math.round(chanceOfRain * 100)}%`}</span>
        </WeatherDataPoint>
      </CardInner>
    </CardWrapper>
  )
}

export default DayWeatherCard
