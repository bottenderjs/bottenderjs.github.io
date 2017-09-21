import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './deploy.md';

// prettier-ignore
export default withDoc({
  title: 'Deploy',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
