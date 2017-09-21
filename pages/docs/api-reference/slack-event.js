import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './slack-event.md';

// prettier-ignore
export default withDoc({
  title: 'SlackEvent',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
