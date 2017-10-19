import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import '../../static/fonts/style.css';

let WebFont;

if (typeof window !== 'undefined') {
  WebFont = require('webfontloader'); // eslint-disable-line global-require
  WebFont.load({
    google: {
      families: ['Karla', 'Roboto'],
    },
  });
}

export default () => injectGlobal`
  ${styledNormalize}

  body {
    font-family: Karla, Roboto, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  button {
    font-family: Karla;
  }

  p {
    font-family: Roboto;
  }

  a {
    text-decoration: none;
  }
`;
