import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  display: flex;
  margin-top: 32px;
  margin-bottom: 12px;
  color: #2b9ac8;
  font-family: Karla;
  font-size: 21px;
  letter-spacing: 1px;
  opacity: 0.6;
`;

class ListSection extends Component {
  render() {
    const { list, pathname } = this.props;
    return (
      <Wrapper>
        <SectionTitle>{list.title}</SectionTitle>
        {list.items.map(item => (
          <ListItem key={item.title} item={item} pathname={pathname} />
        ))}
      </Wrapper>
    );
  }
}

export default ListSection;
