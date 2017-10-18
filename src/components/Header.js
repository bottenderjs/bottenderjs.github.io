import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from '../images/bottender.svg';
import { rhythm } from '../utils/typography';
import Nav from '../components/Nav';

const Wrapper = styled.div`
  display: flex;
  height: 80px;
  border-bottom: 1px solid #d2d2d2;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: calc(1026px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  margin: 0;
`;

const LogoLink = styled(Link)`
  width: 229px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LogoLink to={'/'}>
            <Logo src={logo} alt={this.props.title} />
          </LogoLink>
          <Nav />
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
