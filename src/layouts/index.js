import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import baseStyles from '../css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { link, meta } from './head';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 60px;
`;

const Container = styled.main`
  display: flex;
  opacity: 1;
  transition: opacity 0.5s;
`;

export default ({ children, data, location }) => {
  baseStyles();
  const title = `${
    data.site.siteMetadata.title
  } | Make Bots Your Way, Fast and Flexible`;
  const { pathname } = location;
  const newestBlogPath = data.allMarkdownRemark.edges[0].node.fields.slug;

  return (
    <Wrapper>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: title,
          },
          ...meta,
        ]}
        link={link}
      >
        <html lang="en" dir="ltr" />
      </Helmet>
      <Header
        title={data.site.siteMetadata.title}
        pathname={pathname}
        newestBlogPath={newestBlogPath}
      />
      <Container id="content" role="main">
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
    allMarkdownRemark(
      limit: 1
      filter: { id: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`;
