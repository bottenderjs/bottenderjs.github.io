import React, { Component } from 'react';
import styled from 'styled-components';

import NavItem from '../components/NavItem';
import MobileMenuIcon from '../images/mobile-menu.svg';
import media from '../css/media';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopMenu = styled.div`
  display: flex;

  @media (${media.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled.img`
  display: none;

  @media (${media.tablet}) {
    display: flex;
    margin: 0;
    cursor: pointer;
  }
`;

class Nav extends Component {
  render() {
    return (
      <Container>
        <DesktopMenu>
          <NavItem title="docs" to="/docs/GettingStarted" />
          <NavItem title="blog" to="/blog" />
          <NavItem
            title="github"
            to="https://github.com/Yoctol/bottender-docs"
          />
        </DesktopMenu>
        <MobileMenu src={MobileMenuIcon} />
      </Container>
    );
  }
}

export default Nav;
