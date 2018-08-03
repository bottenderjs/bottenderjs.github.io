import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import TimeAgo from 'react-timeago';
import get from 'lodash/get';

import { rhythm } from '../utils/typography';
import media from '../css/media';
import EditThisPage from '../components/EditThisPage';
import Sidebar from '../components/Sidebar';
import authors from '../../content/authors.yaml';

const globalStyle = `
  h1 {
    margin-top: ${rhythm(1.5)};
    margin-bottom: ${rhythm(0.5)};
    color: #000;
    font-size: 42px;
    font-weight: bold;
  }

  h2, h2 > code {
    margin-top: ${rhythm(2)};
    margin-bottom: ${rhythm(0.75)};
    color: #000;
    font-size: 34px;
    font-weight: bold;
  }

  h2:first-child {
    margin-top: 0;
  }

  h3, h3 > code {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #000;
    font-size: 26px;
    font-weight: bold;
  }

  h4, h4 > code {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    color: #000;
    font-size: 18px;
    line-height: 1.5;
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
  opacity: 1;
  background-image: linear-gradient(0deg, #fafafa, #fafafa);
  background-repeat: no-repeat;
  background-size: 25% 100%;
  transition: opacity 0.5s;
  background-position-x: right;

  @media (${media.desktop}) {
    background-size: 25% 100%;
  }

  @media (${media.tablet}) {
    background: #fff;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(1200px + ${rhythm(0.5)});
  margin: 0 ${rhythm(0.5)};

  @media (${media.giant}) {
    justify-content: center;
    width: calc(100% - ${rhythm(1)});
  }
`;

const Left = styled.main`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 0 30px 100px 0;

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
  width: 25%;
  padding-top: 20px;
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

const Title = styled.h1`
  margin-bottom: 0;
`;

const TitleSection = styled.section`
  margin-bottom: ${rhythm(1)};
`;

const Meta = styled.div`
  margin-top: 0.25em;
  color: rgb(109, 109, 109);
  font-size: 14px;
`;

const ProfilePic = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
  border-radius: 100%;
`;

const AuthorWrapper = styled.div`
  display: inline-block;
  height: 30px;
  margin: 0 30px 10px 0;
  line-height: 30px;
`;

const AuthorDisplayName = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Author = ({ name }) => {
  const meta = get(authors, name);
  const authorUrl = get(meta, 'url');
  const authorName = get(meta, 'name');
  const authorImage = get(meta, 'image');
  const authorAccount = get(meta, 'account');
  return (
    <AuthorWrapper>
      <ProfilePic src={authorImage} alt="" />
      <AuthorDisplayName>
        {authorName}{' '}
        {authorUrl ? (
          <a
            href={authorUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={authorName}
          >
            (@{authorAccount})
          </a>
        ) : (
          <span>(@{authorAccount})</span>
        )}
      </AuthorDisplayName>
    </AuthorWrapper>
  );
};

const PublishDate = styled.div`
  margin-bottom: 15px;
  color: #999;
`;

export default ({ data, location }) => {
  const post = data.markdownRemark;
  const { title, author, date } = post.frontmatter;
  const { pathname } = location;
  return (
    <Main id="content">
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
      <Container>
        <Left role="main">
          <TitleSection>
            <Title>{title}</Title>
            {author && (
              <Meta>
                <PublishDate>
                  {`${date}`} (<TimeAgo date={date} />)
                </PublishDate>
                {author.map(name => <Author name={name} />)}
              </Meta>
            )}
          </TitleSection>
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
        date(formatString: "MMMM DD, YYYY")
        author
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
