import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import landscape from '../../assets/landscape.svg';
import { rhythm } from '../../utils/typography';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  height: 40vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${landscape});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #000;
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-family: BebasNeue;
  font-size: 81px;
  text-align: center;
  letter-spacing: 8.2px;
`;

const Slogan = styled.h2`
  margin: 0 ${rhythm(0.5)} ${rhythm(1.5)};
  color: #fff;
  font-family: SFUIDisplay;
  font-size: 22px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 3.5px;
`;

class LandscapeSection extends Component {
  render() {
    return (
      <Wrapper>
        <img src={logo} alt="logo" />
        <Title>BOTTENDER</Title>
        <Slogan>
          MAKE BOTS IN YOUR WAY,<br />FAST AND FLEXIBLY
        </Slogan>
        <GetStartedLink to="/docs/GettingStarted">Get Started!</GetStartedLink>
      </Wrapper>
    );
  }
}

export default LandscapeSection;
