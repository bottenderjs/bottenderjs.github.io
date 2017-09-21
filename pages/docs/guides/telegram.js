import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './telegram.md';

// prettier-ignore
export default withDoc({
  title: 'Telegram',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
