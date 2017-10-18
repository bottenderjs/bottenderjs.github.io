import React from 'react';
import styled from 'styled-components';

import baseStyles from '../css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
`;

export default ({ children, data }) => {
  baseStyles();

  return (
    <Wrapper>
      <Header title={data.site.siteMetadata.title} />
      <Container>
        <Sidebar />
        {children()}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
