import React from 'react';
import styled from 'styled-components';

import media from '../css/media';
import icon from '../assets/search.svg';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 239px;
  height: 40px;
  padding-left: 30px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  background: #fff;
  font-size: 21px;
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
    max-width: 100%;
    margin: 20px 0;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 7px;

  @media (${media.tablet}) {
    top: 30px;
  }
`;

const SearchBar = () => (
  <Wrapper>
    <SearchIcon src={icon} />
    <Input placeholder="Search Docs" />
  </Wrapper>
);

export default SearchBar;
