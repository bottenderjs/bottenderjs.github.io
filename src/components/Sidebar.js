import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';
import BlogList from '../../content/blog/nav.yaml';

import ListSection from './ListSection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

class Sidebar extends Component {
  render() {
    const { pathname } = this.props;
    const List = pathname.includes('/blog') ? BlogList : DocsList;
    return (
      <Wrapper>
        {List.map(list => (
          <ListSection key={list.title} list={list} {...this.props} />
        ))}
      </Wrapper>
    );
  }
}

export default Sidebar;
