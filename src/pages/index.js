import React from 'react';
import styled from 'styled-components';

import CTASection from '../components/home/CTASection';
import IntroductionSection from '../components/home/IntroductionSection';
import LandscapeSection from '../components/home/LandscapeSection';
import Layout from '../components/layout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default ({ location }) => (
  <Layout location={location}>
    <Wrapper>
      <LandscapeSection />
      <IntroductionSection />
      <CTASection />
    </Wrapper>
  </Layout>
);
