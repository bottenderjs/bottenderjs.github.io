import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Footer from '../Footer';
import Header from '../Header';
import baseStyles from '../../css';

import { link, meta } from './head';

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 60px;
`;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      filter: { fields: { slug: { regex: "/blog/" } } }
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

export default ({ children, location }) => (
  <StaticQuery
    query={query}
    render={data => {
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

          {children}

          <Footer />
        </Wrapper>
      );
    }}
  />
);
