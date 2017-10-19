import React, { Component } from 'react';
import styled from 'styled-components';

import NavItem from '../components/NavItem';

const Container = styled.div`
  display: flex;
`;

class Nav extends Component {
  render() {
    return (
      <Container>
        <NavItem title="docs" to="/docs/GettingStarted" />
        <NavItem title="blog" to="/blog" />
        <NavItem title="github" to="https://github.com/Yoctol/bottender-docs" />
      </Container>
    );
  }
}

export default Nav;
