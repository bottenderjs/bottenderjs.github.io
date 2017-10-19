import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 100%;
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
