import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 209px);
  background-color: #101010;
`;

const Title = styled.h2`
  margin: ${rhythm(1)} ${rhythm(0.5)};
  color: #fff;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;

  @media (${media.tablet}) {
    font-size: 26px;
  }
`;

const CTASection = () => (
  <Wrapper>
    <Title>Build Your Bot Today!</Title>
    <GetStartedLink to="/docs/GettingStarted">Get Started!</GetStartedLink>
  </Wrapper>
);

export default CTASection;
