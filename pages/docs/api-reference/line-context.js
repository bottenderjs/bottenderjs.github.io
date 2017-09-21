import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './line-context.md';

// prettier-ignore
export default withDoc({
  title: 'LineContext',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
