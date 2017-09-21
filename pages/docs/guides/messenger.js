import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './messenger.md';

// prettier-ignore
export default withDoc({
  title: 'Messenger',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
