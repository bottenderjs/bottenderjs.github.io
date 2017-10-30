import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 20px;
  margin-top: 40px;
  flex-direction: row-reverse;
`;

const Btn = styled.a`
  color: rgb(109, 109, 109);
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: #000;
  }
`;

class EditThisPage extends Component {
  getPathname() {
    let { pathname } = this.props;
    if (pathname[0] !== '/') {
      pathname = `/${pathname}`;
    }
    if (pathname.indexOf('.md') < 0) {
      pathname = `${pathname}.md`;
    }
    return pathname;
  }

  render() {
    const href = `https://github.com/Yoctol/bottender-docs/blob/master/content${this.getPathname()}`;
    return (
      <Wrapper>
        <Btn href={href}>Edit This Page</Btn>
      </Wrapper>
    );
  }
}

export default EditThisPage;
