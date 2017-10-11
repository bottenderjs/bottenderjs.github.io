import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

const Title = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`;

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;
const PostDate = styled.span`
  color: #bbb;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default ({ data }) => (
  <div>
    <Title display={'inline-block'} borderBottom={'1px solid'}>
      Bottender Docs
    </Title>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <StyledLink to={node.fields.slug}>
          <PostTitle marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{' '}
            <PostDate color="#BBB">— {node.frontmatter.date}</PostDate>
          </PostTitle>
          <p>{node.excerpt}</p>
        </StyledLink>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
