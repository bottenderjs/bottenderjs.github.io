import React from 'react';
import styled from 'styled-components';

import media from '../css/media';

import NavItem from './NavItem';
import MobileMenu from './MobileMenu';

const Container = styled.nav`
  display: flex;
  align-items: center;
`;

const DesktopMenu = styled.div`
  display: flex;

  @media (${media.tablet}) {
    display: none;
  }
`;

const Nav = ({ pathname, newestBlogPath }) => (
  <Container role="navigation">
    <DesktopMenu>
      <NavItem
        title="Docs"
        to="/docs/GettingStarted"
        hasHover
        pathname={pathname}
      />
      <NavItem title="Blog" to={newestBlogPath} hasHover pathname={pathname} />
      <NavItem
        title="Examples"
        to="https://github.com/Yoctol/bottender/tree/master/examples"
        hasHover
        pathname={pathname}
      />
      <NavItem
        title="GitHub"
        to="https://github.com/Yoctol/bottender"
        hasHover
        pathname={pathname}
      />
    </DesktopMenu>
    <MobileMenu pathname={pathname} newestBlogPath={newestBlogPath} />
  </Container>
);

export default Nav;
