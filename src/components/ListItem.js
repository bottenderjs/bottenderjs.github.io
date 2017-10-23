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
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  color: #24779b;
  font-family: Karla;
  font-size: 21px;
  font-weight: bold;
  opacity: 0.6;
  /* stylelint-disable */
  ${props =>
    props.selected === true
      ? 'border-color: rgba(36, 119, 155, 0.6);'
      : `&:hover {
    border-color: rgba(36, 119, 155, 0.6);
  }`};
  /* stylelint-enable */
`;

class ListItem extends Component {
  render() {
    const { item, pathname, toggleMenu } = this.props;
    const selectedTitle = pathname.replace(
      /\/docs\/((Guides|APIReference)-)?/i,
      ''
    );

    return (
      <Wrapper to={`/${item.id}`}>
        <ListTitle
          selected={selectedTitle === item.title.replace(/ /g, '')}
          onClick={toggleMenu}
        >
          {item.title}
        </ListTitle>
      </Wrapper>
    );
  }
}

export default ListItem;
