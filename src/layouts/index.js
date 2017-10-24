import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import baseStyles from '../css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 80px;
`;

const Container = styled.div`
  display: flex;
  opacity: 1;
  transition: opacity 0.5s;
`;

export default ({ children, data, location }) => {
  baseStyles();
  const title = `${data.site.siteMetadata
    .title} | Make Bots in Your Way, Fast and Flexibly`;
  const { pathname } = location;

  return (
    <Wrapper>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: title,
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Bottender',
          },
        ]}
        link={[
          {
            rel: 'icon',
            sizes: '192x192',
            href: `${__PATH_PREFIX__}/favicon-192x192.png`,
          },
          {
            href: `${__PATH_PREFIX__}/favicon-32x32.png`,
            rel: 'shortcut icon',
            type: 'image/x-icon',
          },
          {
            href: `${__PATH_PREFIX__}/apple-touch-icon.png`,
            rel: 'apple-touch-icon',
          },
        ]}
      />
      <Header title={data.site.siteMetadata.title} pathname={pathname} />
      <Container id="content">{children()}</Container>
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
