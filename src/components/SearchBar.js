import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../css/media';
import icon from '../assets/search.svg';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 239px;
  height: 40px;
  padding-left: 30px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  font-family: Karla;
  font-size: 21px;
  border-radius: 4px;
  transition: border-color ease-in-out 0.15s;

  &:focus {
    /* bootstrap blue */
    border-color: #5cb3fd;
    outline: none;
  }

  &::placeholder {
    color: #d2d2d2;
  }

  @media (${media.tablet}) {
    padding-left: 0;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 7px;
`;

class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchIcon src={icon} />
        <Input placeholder="Search Docs" />
      </Wrapper>
    );
  }
}

export default SearchBar;
