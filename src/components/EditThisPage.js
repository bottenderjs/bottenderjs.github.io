import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 20px;
  margin-top: 40px;
`;

const Btn = styled.a`
  color: rgb(109, 109, 109) !important;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: #000 !important;
  }
`;

const EditThisPage = ({ pathname }) => (
  <Wrapper>
    <Btn
      href={`https://github.com/bottenderjs/bottenderjs.github.io/blob/source/content/${pathname}`}
    >
      Edit This Page
    </Btn>
  </Wrapper>
);

export default EditThisPage;
