import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './errors.md';

// prettier-ignore
export default withDoc({
  title: 'Errors',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
