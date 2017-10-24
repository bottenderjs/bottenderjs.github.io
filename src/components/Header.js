import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../assets/bottender.svg';
import { rhythm } from '../utils/typography';
import Nav from '../components/Nav';

const Wrapper = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d2d2d2;
  justify-content: center;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  margin: 0;
`;

const LogoLink = styled.a`
  width: 229px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LogoLink href={`${__PATH_PREFIX__}/`}>
            <Logo src={logo} alt={this.props.title} />
          </LogoLink>
          <Nav pathname={this.props.pathname} />
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
