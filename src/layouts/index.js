import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(2)};
  display: inline-block;
  font-style: normal;
`;

const NavLink = styled(Link)`
  float: right;
`;

export default ({ children, data }) => (
  <Wrapper>
    <Link to={`/`}>
      <Title>{data.site.siteMetadata.title}</Title>
    </Link>
    <NavLink to={`/about/`}>About</NavLink>
    {children()}
  </Wrapper>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
