import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 20px;
  margin-top: 40px;
  flex-direction: row-reverse;
`;

const Btn = styled.a`
  color: rgb(109, 109, 109) !important;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: #000 !important;
  }
`;

class EditThisPage extends Component {
  render() {
    const { pathname } = this.props;
    const href = `https://github.com/bottenderjs/bottenderjs.github.io/blob/source/content/${pathname}`;
    return (
      <Wrapper>
        <Btn href={href}>Edit This Page</Btn>
      </Wrapper>
    );
  }
}

export default EditThisPage;
