import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../css/media';

import NavItem from './NavItem';
import MobileMenu from './MobileMenu';

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

class Nav extends Component {
  render() {
    return (
      <Container>
        <DesktopMenu>
          <NavItem title="docs" to="/docs/GettingStarted" hasHover />
          <NavItem title="blog" to="/blog" hasHover />
          <NavItem
            title="github"
            to="https://github.com/Yoctol/bottender"
            hasHover
          />
        </DesktopMenu>
        <MobileMenu {...this.props} />
      </Container>
    );
  }
}

export default Nav;
