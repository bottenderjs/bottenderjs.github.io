import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';

import ListSection from './ListSection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

class Sidebar extends Component {
  render() {
    return (
      <Wrapper>{DocsList.map(list => <ListSection list={list} />)}</Wrapper>
    );
  }
}

export default Sidebar;
