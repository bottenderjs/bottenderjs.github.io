import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './slack.md';

// prettier-ignore
export default withDoc({
  title: 'Slack',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
