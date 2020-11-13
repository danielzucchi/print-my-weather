import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  margin: -15px auto;
  z-index: -100;
  width: 90%;
  border-radius: 0 0 15px 15px;
  justify-content: center;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: block;
  padding: 20px 33px 22px 27px;
  width: 800px;
  min-height: 160px;
  background-color: white;
`

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const HourlyWeatherCard = ({ hourlyWeather }) => {
  return (
    <CardWrapper>
      <CardInner></CardInner>
    </CardWrapper>
  )
}

export default HourlyWeatherCard
