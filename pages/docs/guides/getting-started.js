import markdown from 'markdown-in-js';

import withDoc from '../../../lib/with-doc';

export default withDoc({
  title: 'Getting Started',
  date: '2017/09/19',
  author: 'chentsulin',
})(markdown`
  This is the content written in Markdown.
`);
