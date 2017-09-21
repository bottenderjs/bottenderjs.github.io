import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './messenger-event.md';

// prettier-ignore
export default withDoc({
  title: 'MessengerEvent',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
