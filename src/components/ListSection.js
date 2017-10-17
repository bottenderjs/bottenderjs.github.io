import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

import ListItem from './ListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  display: flex;
  margin-top: ${rhythm(1)};
`;

class ListSection extends Component {
  render() {
    const { list } = this.props;
    return (
      <Wrapper>
        <SectionTitle>{list.title}</SectionTitle>
        {list.items.map(item => <ListItem item={item} />)}
      </Wrapper>
    );
  }
}

export default ListSection;
