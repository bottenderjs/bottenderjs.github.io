import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

const Wrapper = styled.div`
  display: flex;
  padding-right: ${rhythm(3)};
  flex-basis: 50%;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #3c3c3c;
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SubTitle = styled.p`
  color: #767676;
  font-size: 20px;
  line-height: 1.6;
`;

class IntroductionItem extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Wrapper>
    );
  }
}

export default IntroductionItem;
