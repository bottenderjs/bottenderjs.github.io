import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../../utils/typography';

const Wrapper = styled.div`
  display: flex;
  margin: 0 32px;
  flex-basis: 30%;
  flex-direction: column;
`;

const ShowcaseImage = styled.img`
  margin-bottom: ${rhythm(0.25)};
`;

const Title = styled.h2`
  margin-bottom: 0;
  color: #2d2d2d;
  font-size: 21px;
  font-weight: 500
  line-height: 1.14;
`;

const SubTitle = styled.p`
  color: #767676;
  font-size: 18px;
  line-height: 1.33;
`;

class ExhibitionItem extends Component {
  render() {
    const { url, title, subTitle } = this.props;
    return (
      <Wrapper>
        <Link to="/">
          <ShowcaseImage src={url} alt={title} />
        </Link>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Wrapper>
    );
  }
}

export default ExhibitionItem;
