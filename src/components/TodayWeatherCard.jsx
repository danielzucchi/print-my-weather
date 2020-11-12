import React from 'react'
import styled from 'styled-components'
import getBackgroundColor from './getBackgroundColor'

const CardWrapper = styled.div`
  z-index: 100;
  color: #fff;
  margin: 0 auto;
  width: 90%;
  border-radius: 15px;
  justify-content: center;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: block;
  padding: 20px 33px 22px 27px;
  width: 800px;
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

const TodayWeatherCard = ({ todayWeather }) => {
  const {
    weather,
    temp: { max: maxTemp, min: minTemp },
  } = todayWeather

  const weatherDetails = weather[0]
  const { icon: weatherIcon, description: weatherDescription } = weatherDetails

  return (
    <CardWrapper maxTemp={maxTemp}>
      <TodayTitle>Today</TodayTitle>
      <CardInner>
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt="weather"
        />
        <p>{`${Math.floor(maxTemp)}º`}</p>
        <p>{`${Math.floor(minTemp)}º`}</p>
        <p>{weatherDescription}</p>
      </CardInner>
    </CardWrapper>
  )
}

export default TodayWeatherCard
