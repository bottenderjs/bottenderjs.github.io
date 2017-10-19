import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../../utils/typography';

import ExhibitionItem from './ExhibitionItem';

const Wrapper = styled.section`
  display: flex;
  height: 990px;
  justify-content: center;
  background-color: #fafafa;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 37px;
  font-weight: bold;
  letter-spacing: -1px;
`;

const SubTitle = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
  color: #767676;
`;

const SubmitLink = styled(Link)`
  color: #101010;
  text-decoration: underline;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;
`;

class ExhibitionSection extends Component {
  render() {
    return (
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
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
            <ExhibitionItem
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
            <ExhibitionItem
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
          </Row>
          <Row>
            <ExhibitionItem
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
            <ExhibitionItem
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
            <ExhibitionItem
              url="http://via.placeholder.com/320x180"
              title="Bot Name"
              subTitle="by Developers Name"
            />
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default ExhibitionSection;
