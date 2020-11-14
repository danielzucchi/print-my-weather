import React from 'react'
import styled from 'styled-components'
import RainIcon from '../assets/rain-blue.svg'

const CardWrapper = styled.div`
  margin: 15px auto;
  z-index: -100;
  width: 90%;
  border-radius: 15px;
  justify-content: center;
  box-sizing: border-box;
  display: block;
  padding: 20px 40px;
  width: 700px;
  min-height: 160px;
  background-color: #dfdfdf;
`

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  padding-right: 35px;
  border-right: 1px solid #999999;
`

const DetailsWrapperLast = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  padding: 0;
  border-right: none;
`

const Hour = styled.p`
  text-align: center;
  font-size: 1.3em;
  margin: 0;
`

const Temp = styled.p`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin: 0;
  margin-bottom: -20px;
  color: #2d6b8b;
`

const WeatherDataPoint = styled.div`
  margin: 5px auto;
  font-size: 1.2em;
`

const WeatherIcon = styled.img`
  height: 30px;
  width: auto;
  float: left;
  margin: 0 10px;
`

const HourlyWeatherCard = ({ hourlyWeather }) => {
  return (
    <CardWrapper>
      <CardInner>
        <DetailsWrapper>
          <Hour>
            {new Date(hourlyWeather[1].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[1].temp)}º`}</Temp>
          <img
            src={`http://openweathermap.org/img/wn/${hourlyWeather[1].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[1].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapper>
          <Hour>
            {new Date(hourlyWeather[5].dt * 1000).toUTCString().slice(16, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[5].temp)}º`}</Temp>
          <img
            src={`http://openweathermap.org/img/wn/${hourlyWeather[5].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[5].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapper>
          <Hour>
            {new Date(hourlyWeather[9].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[9].temp)}º`}</Temp>
          <img
            src={`http://openweathermap.org/img/wn/${hourlyWeather[9].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[9].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapperLast>
          <Hour>
            {new Date(hourlyWeather[13].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[13].temp)}º`}</Temp>
          <img
            src={`http://openweathermap.org/img/wn/${hourlyWeather[13].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[13].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapperLast>
      </CardInner>
    </CardWrapper>
  )
}

export default HourlyWeatherCard
