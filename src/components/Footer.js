import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import github from '../assets/github.svg';
import media from '../css/media';

const Wrapper = styled.footer`
  display: flex;
  height: 129px;
  justify-content: center;
  background: #101010;
  opacity: 1;
  transition: opacity 0.5s;
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
  align-items: center;

  @media (${media.tablet}) {
    justify-content: center;
  }
`;

const Copyright = styled.h4`
  margin: 0;
  color: #fff;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 1px;

  @media (${media.tablet}) {
    display: none;
  }
`;

const MobileCopyright = styled.h4`
  display: none;

  @media (${media.tablet}) {
    display: block;
    margin: 0;
    color: #fff;
    font-size: 16px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 1px;
  }
`;

const Link = styled.a`
  display: flex;
`;

const GitHubLogo = styled.img`
  display: block;
  margin: 0;

  @media (${media.tablet}) {
    display: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper id="footer" role="contentinfo">
        <Container>
          <Copyright>
            © 2017 - PRESENT YOCTOL INFO INC. ALL RIGHTS RESERVED
          </Copyright>
          <MobileCopyright>
            © 2017 - PRESENT YOCTOL INFO INC. <br />ALL RIGHTS RESERVED
          </MobileCopyright>
          <Link href="https://github.com/Yoctol/bottender" target="_blank">
            <GitHubLogo src={github} alt="Bottender github link" />
          </Link>
        </Container>
      </Wrapper>
    );
  }
}

export default Footer;
