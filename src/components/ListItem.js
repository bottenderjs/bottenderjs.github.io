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
  border-bottom: 3px solid transparent;
  color: #000;
  font-size: 18px;
  /* stylelint-disable */
  ${props =>
    props.selected === true
      ? 'border-color: #2b9ac8;'
      : `&:hover {
    border-color: #2b9ac8;
  }`};
  /* stylelint-enable */
`;

class ListItem extends Component {
  render() {
    const { item, pathname, toggleMenu } = this.props;
    const selectedTitle = pathname
      .replace(
        /(\/bottender-docs)?\/(docs|blog)\/.*?((Guides|APIReference|Platforms)-)?/i,
        ''
      )
      .replace(/\/?[0-9]*/g, '')
      .replace('-', '');

    return (
      <Wrapper to={`/${item.id}`}>
        <ListTitle
          selected={
            selectedTitle.toLowerCase() ===
            item.title.replace(/ /g, '').toLowerCase()
          }
          onClick={toggleMenu}
        >
          {item.title}
        </ListTitle>
      </Wrapper>
    );
  }
}

export default ListItem;
