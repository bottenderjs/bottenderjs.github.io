import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../../css/media';

const GetStartedLink = styled(Link)`
  max-width: 320px;
  padding: 1em 3em;
  border: solid 2px #fff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: transparent;
  font-weight: bold;
  transition: color 0.3s ease, background-color 0.3s ease;
  word-spacing: -1px;

  &:hover {
    color: #000;
    background-color: #fff;
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
