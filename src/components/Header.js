import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  display: flex;
  height: 50px;
`;

const Title = styled.h3`
  display: inline-block;
  margin-bottom: ${rhythm(2)};
  font-style: normal;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Link to={`/`}>
          <Title>{this.props.title}</Title>
        </Link>
      </Wrapper>
    );
  }
}

export default Header;
