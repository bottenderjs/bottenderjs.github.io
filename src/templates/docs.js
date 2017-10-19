import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 100%;
  }

  h1 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #2d2d2d;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: -1px;
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #3c3c3c;
    font-size: 37px;
    font-weight: bold;
    letter-spacing: -1px;
  }

  h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #3c3c3c;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: -0.9px;
  }

  h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    color: #505050;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: -1px;
  }

  p {
    color: #767676;
    font-family: Roboto;
    font-size: 20.5px;
    line-height: 1.71;
  }

  a {
    color: #009ace;
    text-decoration: underline;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Wrapper>
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
  }
`;
