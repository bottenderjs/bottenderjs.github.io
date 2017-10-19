import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import baseStyles from '../css';
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
  const title = `${data.site.siteMetadata
    .title} | Make Bots in Your Way, Fast and Flexibly`;
  return (
    <Wrapper>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: title,
          },
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <Container>{children()}</Container>
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
