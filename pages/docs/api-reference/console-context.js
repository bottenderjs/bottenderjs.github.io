import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import consoleContext from './console-context.md';

// prettier-ignore
export default withDoc({
  title: 'ConsoleContext',
  date: '2017/09/19',
  author: 'chentsulin',
})(<ReactMarkdown source={consoleContext} />);
