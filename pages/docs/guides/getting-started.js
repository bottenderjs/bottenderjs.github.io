import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import gettingStarted from './getting-started.md';

// prettier-ignore
export default withDoc({
  title: 'Getting Started',
  date: '2017/09/19',
  author: 'chentsulin',
})(<ReactMarkdown source={gettingStarted} />);
