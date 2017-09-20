import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './console-context.md';

// prettier-ignore
export default withDoc({
  title: 'ConsoleContext',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
