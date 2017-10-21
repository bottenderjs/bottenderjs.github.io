import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism.css'; // eslint-disable-line

import baseStyles from '../css';
import media from '../css/media';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditThisPage from '../components/EditThisPage';
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

  @media (${media.desktop}) {
    background-size: 25% 100%;
  }

  @media (${media.tablet}) {
    background: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: calc(1024px + ${rhythm(0.5)});
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;

  @media (${media.giant}) {
    width: calc(100% - ${rhythm(1)});
    justify-content: center;
  }
`;

const Left = styled.div`
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
`;

const Right = styled.div`
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

export default ({ children, data, location }) => {
  baseStyles();
  const { pathname } = location;
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
      <Header title={data.site.siteMetadata.title} />
      <Main>
        <Container>
          <Left>
            {children()}
            <EditThisPage pathname={pathname} />
          </Left>
          <Right>
            <Sidebar pathname={pathname} />
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
