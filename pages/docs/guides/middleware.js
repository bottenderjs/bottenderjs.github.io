import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './middleware.md';

// prettier-ignore
export default withDoc({
  title: 'Middleware',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
