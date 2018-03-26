import React, { Component } from 'react';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import github from '../assets/github.svg';
import media from '../css/media';

const Wrapper = styled.footer`
  display: flex;
  height: 80px;
  justify-content: center;
  background: #101010;
  opacity: 1;
  transition: opacity 0.5s;
`;

const Container = styled.div`
  display: flex;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  justify-content: space-between;
  align-items: center;

  @media (${media.tablet}) {
    justify-content: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 1px;

  @media (${media.tablet}) {
    display: none;
  }
`;

const MobileCopyright = styled.p`
  display: none;

  @media (${media.tablet}) {
    display: block;
    margin: 0;
    color: #fff;
    font-size: 14px;
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
            © 2017-Present Yoctol Info., Inc. All Rights Reserved.
          </Copyright>
          <MobileCopyright>
            © 2017-Present Yoctol Info., Inc. <br />All Rights Reserved.
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
