import React from 'react';
import styled from 'styled-components';

import logo from '../assets/bottender.svg';
import { rhythm } from '../utils/typography';
import Nav from '../components/Nav';

const Wrapper = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d2d2d2;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
`;

const Logo = styled.img`
  display: block;
  margin: 0;
`;

const LogoLink = styled.a`
  width: 229px;
`;

const Header = ({ title, pathname, newestBlogPath }) => (
  <Wrapper role="banner">
    <Container>
      <LogoLink href={`${__PATH_PREFIX__}/`}>
        <Logo src={logo} alt={title} />
      </LogoLink>
      <Nav pathname={pathname} newestBlogPath={newestBlogPath} />
    </Container>
  </Wrapper>
);

export default Header;
