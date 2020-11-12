import React from 'react'
import styled from 'styled-components'

const getBackgroundColor = ({ maxTemp }) => {
  if (maxTemp <= 8) {
    return `radial-gradient( 
      circle 465px at -15.1% -25%,  
      rgba(17,130,193,1) 0%, 
      rgba(67,166,238,1) 49%, 
      rgba(126,203,244,1) 90.2% 
      );`
  }

  if (maxTemp > 8 && maxTemp <= 12) {
    return `radial-gradient(
      circle farthest-corner at 14.7% 26.3%,
      rgba(121, 206, 212, 1) 0.2%,
      rgba(101, 167, 191, 1) 89.5%
    );`
  }

  if (maxTemp > 12 && maxTemp <= 20) {
    return `linear-gradient( 
      99deg,  
      rgba(255,166,0,1) 14.7%, 
      rgba(255,99,97,1) 73% 
      );`
  }

  if (maxTemp > 20 && maxTemp <= 25) {
    return `radial-gradient( 
      circle 929px at 0.6% 1.3%,  
      rgba(248,251,10,1) 0%, 
      rgba(248,47,47,1) 82.6% 
      );`
  }

  return `linear-gradient( 
    109.6deg,  
    rgba(234,192,56,1) 11.2%, 
    rgba(215, 45, 45, 1.00) 68.5% 
    );`
}

const CardWrapper = styled.div`
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
  background-image: ${getBackgroundColor};
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
        <p>{Math.floor(maxTemp)}</p>
        <p>{Math.floor(minTemp)}</p>
        <p>{weatherDescription}</p>
      </CardInner>
    </CardWrapper>
  )
}

export default TodayWeatherCard
