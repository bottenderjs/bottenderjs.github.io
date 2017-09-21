import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './line-event.md';

// prettier-ignore
export default withDoc({
  title: 'LineEvent',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
