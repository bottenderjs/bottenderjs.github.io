import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Item = styled.div`
  padding-left: 50px;
  color: #2d2d2d;
  font-family: Karla;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

class NavItem extends Component {
  render() {
    const link = this.props.to;
    const isOutsideLink = link.indexOf('http') > -1;
    if (isOutsideLink) {
      return (
        <a href={this.props.to} target="_blank">
          <Item>{this.props.title}</Item>
        </a>
      );
    }
    return (
      <Link to={this.props.to}>
        <Item>{this.props.title}</Item>
      </Link>
    );
  }
}

export default NavItem;
