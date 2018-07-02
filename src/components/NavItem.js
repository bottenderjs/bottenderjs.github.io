import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../css/media';

const Item = styled.p`
  margin: 0 0 0 25px;
  padding-top: 10px;
  padding-bottom: 3px;
  border-bottom: 3px solid transparent;
  color: #2d2d2d;
  font-size: 18px;
  transition: border-bottom 0.2s;

  @media (${media.tablet}) {
    margin: 0 0 20px;
    padding-top: 0;
    border-color: transparent;
  }

  /* stylelint-disable */
  ${prop =>
    prop.selected
      ? `
    border-color: #2b9ac8;`
      : ''};
  ${prop =>
    prop.hasHover && !prop.selected
      ? `&:hover {
    border-color: #2b9ac8;
  }`
      : ''};
  /* stylelint-enable */
`;

class NavItem extends Component {
  render() {
    const { to: link, title, onClick, hasHover, pathname } = this.props;
    const isOutsideLink = link.indexOf('http') > -1;
    const selected = pathname.indexOf(`/${title.toLowerCase()}/`) > -1;

    if (isOutsideLink) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Item hasHover={hasHover} selected={selected}>
            {title}
          </Item>
        </a>
      );
    }
    return (
      <Link to={link} onClick={onClick}>
        <Item hasHover={hasHover} selected={selected}>
          {title}
        </Item>
      </Link>
    );
  }
}

export default NavItem;
