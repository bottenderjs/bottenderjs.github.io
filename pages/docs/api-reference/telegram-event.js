import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './telegram-event.md';

// prettier-ignore
export default withDoc({
  title: 'TelegramEvent',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
