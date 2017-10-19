import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Wrapper = styled(Link)`
  display: flex;
  padding-left: 20px;
`;

const ListTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
  color: #24779b;
  font-family: Karla;
  font-size: 21px;
  font-weight: bold;
  opacity: 0.6;

  &:hover {
    text-decoration: underline;
  }
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
