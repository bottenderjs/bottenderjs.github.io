import React from 'react';
import styled from 'styled-components';

import baseStyles from '../css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

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
