import React, { Component } from 'react';
import styled from 'styled-components';

import DocsList from '../../content/docs/nav.yaml';
import BlogList from '../../content/blog/nav.yaml';

import ListSection from './ListSection';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

class Sidebar extends Component {
  render() {
    const { pathname } = this.props;
    const isBlog = pathname.includes('/blog');
    const List = isBlog ? BlogList : DocsList;
    return (
      <Wrapper>
        {List.map(list => {
          const selectedTitle = pathname
            .replace(
              /(\/bottender-docs)?\/(docs|blog)\/.*?((Guides|APIReference|Platforms)-)?/i,
              ''
            )
            .replace(/\/?[0-9]*/g, '')
            .replace('-', '');

          const selectedItem = list.items.find(
            item =>
              selectedTitle.toLowerCase() ===
              item.title.replace(/ /g, '').toLowerCase()
          );

          return (
            <ListSection
              key={list.title}
              list={list}
              selectedItem={selectedItem}
              reverse={isBlog}
              {...this.props}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default Sidebar;
