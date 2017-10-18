import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';

import ListSection from './ListSection';

const Wrapper = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
`;

class Sidebar extends Component {
  render() {
    return (
      <Wrapper>{DocsList.map(list => <ListSection list={list} />)}</Wrapper>
    );
  }
}

export default Sidebar;
