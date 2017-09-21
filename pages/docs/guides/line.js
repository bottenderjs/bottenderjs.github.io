import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './line.md';

// prettier-ignore
export default withDoc({
  title: 'LINE',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
