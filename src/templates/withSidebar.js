import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import { rhythm } from '../utils/typography';
import media from '../css/media';
import EditThisPage from '../components/EditThisPage';
import Sidebar from '../components/Sidebar';

const globalStyle = `
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
    color: #000;
    font-size: 20px;
    line-height: 1.7;
  }

  a {
    color: #2b9ac8;
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

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(0deg, #fafafa, #fafafa);
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: 33.4% 100%;
  opacity: 1;
  transition: opacity 0.5s;

  @media (${media.desktop}) {
    background-size: 25% 100%;
  }

  @media (${media.tablet}) {
    background: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;

  @media (${media.giant}) {
    width: calc(100% - ${rhythm(1)});
    justify-content: center;
  }
`;

const Left = styled.main`
  display: flex;
  width: 66.6%;
  padding: 32px 40px 100px 0;
  flex-direction: column;

  @media (${media.desktop}) {
    width: 75%;
  }

  @media (${media.tablet}) {
    width: calc(100% - ${rhythm(0.5)});
    padding: 16px 0 32px;
  }

  ${globalStyle};
`;

const Right = styled.aside`
  display: flex;
  width: 33.4%;

  /* add half of H1 font-size for alignment */
  padding-top: calc(32px + 30px);
  padding-left: 40px;
  background-color: #fafafa;

  @media (${media.desktop}) {
    width: 25%;
    padding-left: 25px;
  }

  @media (${media.tablet}) {
    display: none;
  }
`;

export default ({ data, location }) => {
  const post = data.markdownRemark;
  const { pathname } = location;
  return (
    <Main id="content">
      <Helmet
        title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`}
      />
      <Container>
        <Left role="main">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <EditThisPage pathname={post.fields.path} />
        </Left>
        <Right>
          <Sidebar pathname={pathname} />
        </Right>
      </Container>
    </Main>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        path
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
