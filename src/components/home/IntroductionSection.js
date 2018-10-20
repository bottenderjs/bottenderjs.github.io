import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 50px 0;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

const IntroductionSection = () => (
  <Wrapper>
    <Container>
      <Row>
        <IntroductionItem
          title="Flexible"
          subTitle="Build encapsulated handlers that manage your business logic, then compose them to make complex Bots. Handlers are just JavaScript functions which can achieve whatever you want."
        />
        <IntroductionItem
          title="Modern"
          subTitle="Bottender is written with ES6/ES7 up syntax and it fully supports async await function. We can deal with complex async logic without losing the readability and maintainability of code."
        />
      </Row>
      <Row>
        <IntroductionItem
          title="Modular"
          subTitle="There is a set of interface that defines the core modules provided by Bottender. You can use your own implementation of session store, your HTTP server framework or even connect your bot to any platform."
        />
        <IntroductionItem
          title="Learn Once, Write Anywhere"
          subTitle="Handle multiple platforms with consistent development experience. You can develop bots for different platforms including Messenger, LINE, Slack and Telegram comfortably, with a similar mindset."
        />
      </Row>
    </Container>
  </Wrapper>
);

export default IntroductionSection;
