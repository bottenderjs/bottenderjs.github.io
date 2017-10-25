import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import media from '../css/media';

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  button {
    font-family: Karla, sans-serif;
  }

  h1 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: #2d2d2d;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: -1px;

    @media (${media.tablet}) {
      font-size: ${60 * 0.8}px;
    }
  }

  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #3c3c3c;
    font-size: 37px;
    font-weight: bold;
    letter-spacing: -1px;

    @media (${media.tablet}) {
      font-size: ${37 * 0.8}px;
    }
  }

  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -0.9px;

    @media (${media.tablet}) {
      font-size: ${30 * 0.8}px;
    }
  }

  h4 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #505050;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: -1px;

    @media (${media.tablet}) {
      font-size: ${26 * 0.8}px;
    }
  }

  p {
    color: #767676;
    font-family: Roboto, sans-serif;
    font-size: 20.5px;
    line-height: 1.71;
  }

  a {
    color: #009ace;
    text-decoration: underline;
  }

  table {
    display: block;
    overflow: auto;

    td,
    th {
      padding: 0.6em;
      border: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Wrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;