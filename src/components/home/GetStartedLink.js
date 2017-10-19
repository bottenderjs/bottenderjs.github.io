import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../../utils/typography';

const GetStartedLink = styled(Link)`
  max-width: 320px;
  padding: ${rhythm(0.75)} ${rhythm(3.5)};
  border: solid 2px #fff;
  color: #fff;
  text-align: center;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  word-spacing: -1px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export default GetStartedLink;
