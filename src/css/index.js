import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Karla', 'Roboto'],
  },
});

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
`;
