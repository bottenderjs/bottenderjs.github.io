import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './intents.md';

// prettier-ignore
export default withDoc({
  title: 'Intents',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
