import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled(Link)`
  display: flex;
`;

const ListTitle = styled.div`
  display: flex;
`;

class ListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Wrapper to={`/${item.id}`}>
        <ListTitle>{item.title}</ListTitle>
      </Wrapper>
    );
  }
}

export default ListItem;
