import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './messenger-context.md';

// prettier-ignore
export default withDoc({
  title: 'MessengerContext',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
