import styled from 'styled-components';
import Link from 'gatsby-link';

import { rhythm } from '../../utils/typography';

const GetStartedLink = styled(Link)`
  max-width: 320px;
  padding: ${rhythm(0.5)} ${rhythm(3.5)};
  border: solid 2px ${props => props.color};
  color: ${props => props.color};
  text-align: center;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  word-spacing: -1px;
`;

export default GetStartedLink;
