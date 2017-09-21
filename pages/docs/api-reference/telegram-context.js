import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './telegram-context.md';

// prettier-ignore
export default withDoc({
  title: 'TelegramContext',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
