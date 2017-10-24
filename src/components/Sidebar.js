import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';
import BlogList from '../../content/blog/nav.yaml';

import ListSection from './ListSection';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

class Sidebar extends Component {
  render() {
    const { pathname } = this.props;
    const List = pathname.includes('/docs/') ? DocsList : BlogList;
    return (
      <Wrapper>
        <SearchBar />
        {List.map(list => (
          <ListSection key={list.title} list={list} {...this.props} />
        ))}
      </Wrapper>
    );
  }
}

export default Sidebar;
