import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../../css/media';
import { rhythm } from '../../utils/typography';

const Wrapper = styled.div`
  display: flex;
  flex-basis: 30%;
  flex-direction: column;
  margin: 0 32px;

  @media (${media.tablet}) {
    flex-basis: 100%;
    margin: 10px 0;
  }
`;

const ShowcaseImage = styled.img`
  margin-bottom: ${rhythm(0.25)};

  @media (${media.tablet}) {
    width: 100%;
    margin: 0;
  }
`;

const Title = styled.h4`
  margin-bottom: 0;
  color: #2d2d2d;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.14;
`;

const SubTitle = styled.h5`
  color: #767676;
  font-size: 18px;
  line-height: 1.33;
`;

const ExhibitionItem = ({ url, title, subTitle }) => (
  <Wrapper>
    <Link to="/">
      <ShowcaseImage src={url} alt={title} />
    </Link>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Wrapper>
);

export default ExhibitionItem;
