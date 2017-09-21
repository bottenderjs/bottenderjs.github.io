import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './session.md';

// prettier-ignore
export default withDoc({
  title: 'Session',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
