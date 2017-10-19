import React from 'react';
import styled from 'styled-components';

import baseStyles from '../css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(0deg, #fafafa, #fafafa);
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 33.4% 100%;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  width: 66.6%;
  padding-top: 32px;
  padding-right: 40px;
`;

const Right = styled.div`
  display: flex;
  width: 33.4%;
  padding-top: 32px;
  padding-left: 40px;
  background-color: #fafafa;
`;

export default ({ children, data }) => {
  baseStyles();

  return (
    <Wrapper>
      <Header title={data.site.siteMetadata.title} />
      <Main>
        <Container>
          <Left>{children()}</Left>
          <Right>
            <Sidebar />
          </Right>
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export const query = graphql`
  query DocLayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
