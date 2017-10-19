import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

import GetStartedLink from './GetStartedLink';

const Wrapper = styled.section`
  display: flex;
  height: 570px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f9fc;
`;

const Title = styled.h1`
  margin: ${rhythm(1)} ${rhythm(0.5)};
  font-size: 37px;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
`;

class LandscapeSection extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          Make Bots in Your Way,<br />
          Fast and Flexibly
        </Title>
        <GetStartedLink color="#101010" to="/docs/GettingStarted">
          Get Started!
        </GetStartedLink>
      </Wrapper>
    );
  }
}

export default LandscapeSection;
