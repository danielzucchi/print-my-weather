import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import exclamationIcon from '../assets/exclamation.svg'

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #fdecea;
  min-height: 32px;
  border: none;
  margin: 10px auto;
  padding: 6px 10px;
  border-radius: 5px;
`

const Image = styled.img`
  float: left;
  width: 16px;
  height: 16px;
  margin-right: 10px;
`

const ContentText = styled.span`
  font-size: 13px;
`

const ErrorMessage = ({ error }) => (
  <ErrorWrapper>
    <Image src={exclamationIcon} alt="error" />
    <ContentText>{error}</ContentText>
  </ErrorWrapper>
)

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
}

export default ErrorMessage
