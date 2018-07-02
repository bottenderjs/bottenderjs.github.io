import React from 'react';
import styled from 'styled-components';

import LandscapeSection from '../components/home/LandscapeSection';
import IntroductionSection from '../components/home/IntroductionSection';
import CTASection from '../components/home/CTASection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default () => (
  <Wrapper>
    <LandscapeSection />
    <IntroductionSection />
    <CTASection />
  </Wrapper>
);
