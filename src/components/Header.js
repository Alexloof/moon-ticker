import React from 'react'
import styled from 'styled-components'

import { desktop_min, mobile_max } from '../helpers/mediaQueries'

const Header = () => {
  return (
    <CenteredHeader>
      <Logo>MOON TICKER</Logo>
    </CenteredHeader>
  )
}

export default Header

const CenteredHeader = styled.header`
  text-align: center;
`

const Logo = styled.h1`
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black,
    4px 4px 0 #5d6e77;

  @media (min-width: ${desktop_min}px) {
    font-size: 120px;
    padding-top: 25px;
  }
  @media (max-width: ${mobile_max}px) {
    font-size: 60px;
    padding-top: 20px;
  }
`
