import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import landscape from '../../assets/landscape.svg';
import landscapeMobile from '../../assets/landscape-mobile.svg';
import media from '../../css/media';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vw;
  background-color: #000;
  background-image: url(${landscape});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (${media.tablet}) {
    height: 155vw;
    background-image: url(${landscapeMobile});
  }
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-family: BebasNeue; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  font-size: 81px;
  letter-spacing: 8.2px;
  text-align: center;

  @media (${media.giant}) {
    font-size: ${81 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${81 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 12vw;
  }
`;

const Slogan = styled.h2`
  margin: 0 1vw 4vw;
  color: #fff;
  font-family: SFUIDisplay; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 3.5px;
  text-align: center;

  @media (${media.giant}) {
    font-size: ${22 * 0.8}px;
  }

  @media (${media.desktop}) {
    font-size: ${22 * 0.6}px;
  }

  @media (${media.tablet}) {
    font-size: 3vw;
  }
`;

const LandscapeSection = () => (
  <Wrapper>
    <img src={logo} alt="logo" />
    <Title>BOTTENDER</Title>
    <Slogan>
      MAKE BOTS YOUR WAY,<br />FAST AND FLEXIBLE
    </Slogan>
    <GetStartedLink to="/docs/GettingStarted">Get Started!</GetStartedLink>
  </Wrapper>
);

export default LandscapeSection;
