import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './server.md';

// prettier-ignore
export default withDoc({
  title: 'Server',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
