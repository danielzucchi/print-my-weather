import React from 'react'
import styled from 'styled-components'
import RainIcon from '../assets/rain-blue.svg'

const CardWrapper = styled.div`
  margin: 10px auto;
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
  padding-right: 30px;
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
  font-size: 1.2em;
  margin: 0;
`

const Temp = styled.p`
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  margin-bottom: -10px;
  color: #2d6b8b;
`

const WeatherDataPoint = styled.div`
  margin: 0 auto;
  font-size: 1em;
`

const WeatherIcon = styled.img`
  height: 20px;
  width: auto;
  float: left;
  margin: 0 5px 0 0;
`

const WeatherImage = styled.img`
  width: 70px;
  height: 70px;
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
          <WeatherImage
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
            {new Date(hourlyWeather[4].dt * 1000).toUTCString().slice(16, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[4].temp)}º`}</Temp>
          <WeatherImage
            src={`http://openweathermap.org/img/wn/${hourlyWeather[4].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[4].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapper>
          <Hour>
            {new Date(hourlyWeather[7].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[7].temp)}º`}</Temp>
          <WeatherImage
            src={`http://openweathermap.org/img/wn/${hourlyWeather[7].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[7].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapper>
          <Hour>
            {new Date(hourlyWeather[10].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[10].temp)}º`}</Temp>
          <WeatherImage
            src={`http://openweathermap.org/img/wn/${hourlyWeather[10].weather[0].icon}@2x.png`}
            alt="weather"
          />
          <WeatherDataPoint>
            <WeatherIcon src={RainIcon} />
            <span>{`${hourlyWeather[10].pop * 100}%`}</span>
          </WeatherDataPoint>
        </DetailsWrapper>
        <DetailsWrapperLast>
          <Hour>
            {new Date(hourlyWeather[13].dt * 1000).toUTCString().slice(17, 22)}
          </Hour>
          <Temp>{`${Math.floor(hourlyWeather[13].temp)}º`}</Temp>
          <WeatherImage
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
