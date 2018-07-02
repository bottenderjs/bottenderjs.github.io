import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

import media from '../css/media';
import MobileMenuOpenIcon from '../assets/mobile-menu-open.svg';
import MobileMenuCloseIcon from '../assets/mobile-menu-close.svg';

import NavItem from './NavItem';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: none;

  @media (${media.tablet}) {
    display: flex;
    margin: 0;
  }
`;

const MobileMenuButton = styled.a`
  width: 26px;
  height: 26px;
  background-image: url(${prop => prop.image});
  background-repeat: no-repeat;
  background-position: center;
`;

const NavItemWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: solid 1px #d2d2d2;
  text-align: center;
`;

const menuStyle = {
  bmBurgerButton: {
    display: 'none',
  },
  bmCrossButton: {
    display: 'none',
  },
  bmMenu: {
    minHeight: 'calc(100vh - 80px)',
    background: '#fafafa',
  },
  bmMenuWrap: {
    top: 80,
    width: '100%',
    height: 'auto',
    maxHeight: 'calc(100vh - 80px)',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
  },
  bmItemList: {
    display: 'flex',
    padding: 40,
    flexDirection: 'column',
  },
};

class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    document.getElementById('content').style.opacity = this.state.isOpen
      ? 1
      : 0;
    document.getElementById('footer').style.opacity = this.state.isOpen ? 1 : 0;
    document.body.style.backgroundColor = this.state.isOpen
      ? '#fff'
      : '#fafafa';
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { pathname, newestBlogPath } = this.props;
    return (
      <Container>
        <MobileMenuButton
          onClick={this.toggleMenu}
          image={isOpen ? MobileMenuCloseIcon : MobileMenuOpenIcon}
        />
        <Menu isOpen={isOpen} right styles={menuStyle} noOverlay>
          <NavItemWrapper>
            <NavItem
              title="Docs"
              to="/docs/GettingStarted"
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="Blog"
              to={newestBlogPath}
              onClick={this.toggleMenu}
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="Examples"
              to="https://github.com/Yoctol/bottender/tree/master/examples"
              hasHover={false}
              pathname={pathname}
            />
            <NavItem
              title="GitHub"
              to="https://github.com/Yoctol/bottender"
              hasHover={false}
              pathname={pathname}
            />
          </NavItemWrapper>
          <Sidebar {...this.props} toggleMenu={this.toggleMenu} />
        </Menu>
      </Container>
    );
  }
}

export default MobileMenu;
