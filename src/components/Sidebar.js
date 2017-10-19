import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';

import ListSection from './ListSection';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Sidebar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchBar />
        {DocsList.map(list => <ListSection list={list} />)}
      </Wrapper>
    );
  }
}

export default Sidebar;
