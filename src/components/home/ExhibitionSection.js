import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import ExhibitionItem from './ExhibitionItem';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  background-color: #fafafa;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  padding: ${rhythm(2)} 0;
`;

const Title = styled.h2`
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (${media.tablet}) {
    font-size: 28px;
  }
`;

const SubTitle = styled.h3`
  color: #767676;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;

  @media (${media.tablet}) {
    font-size: 16px;
    text-align: left;
  }
`;

const SubmitLink = styled(Link)`
  color: #101010;
  text-decoration: underline;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

const ExhibitionSection = () => (
  <Wrapper>
    <Container>
      <Title>Exhibition</Title>
      <SubTitle>
        The following projects are made with Bottender. <br />
        If you are interested in sharing your project, please feel free to{' '}
        <SubmitLink>submit</SubmitLink> your project.
      </SubTitle>
      <Row>
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
      </Row>
      <Row>
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
        <ExhibitionItem
          url="https://via.placeholder.com/320x180"
          title="Bot Name"
          subTitle="by Developers Name"
        />
      </Row>
    </Container>
  </Wrapper>
);

export default ExhibitionSection;
