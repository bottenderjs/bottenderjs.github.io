import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './slack-context.md';

// prettier-ignore
export default withDoc({
  title: 'SlackContext',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
