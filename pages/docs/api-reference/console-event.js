import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './console-event.md';

// prettier-ignore
export default withDoc({
  title: 'ConsoleEvent',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
