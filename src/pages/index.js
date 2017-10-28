import React from 'react';
import styled from 'styled-components';

import LandscapeSection from '../components/home/LandscapeSection';
import IntroductionSection from '../components/home/IntroductionSection';
import CTASection from '../components/home/CTASection';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default () => (
  <Wrapper>
    <LandscapeSection />
    <IntroductionSection />
    <CTASection />
  </Wrapper>
);
