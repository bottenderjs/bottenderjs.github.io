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
  render() {
    const href = `https://github.com/Yoctol/bottender-docs/blob/master/content${this
      .props.pathname}.md`;
    return (
      <Wrapper>
        <Btn href={href}>Edit This Page</Btn>
      </Wrapper>
    );
  }
}

export default EditThisPage;
