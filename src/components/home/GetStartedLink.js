import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../../css/media';

const GetStartedLink = styled(Link)`
  max-width: 320px;
  padding: 1em 3em;
  border: solid 2px #fff;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  word-spacing: -1px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media (${media.giant}) {
    font-size: 14px;
  }

  @media (${media.desktop}) {
    font-size: 10px;
  }

  @media (${media.tablet}) {
    padding: 2vw 5vw;
    font-size: 5vw;
  }
`;

export default GetStartedLink;
