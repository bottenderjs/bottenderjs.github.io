import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import '../../static/fonts/style.css';

export default () => injectGlobal`
  ${styledNormalize}

  body {
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    text-rendering: unset;
    font-feature-settings: unset;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #2d2d2d;
  }

  p {
    letter-spacing: 0.3px;
    text-size-adjust: 100%;
  }

  p code {
    background-color: #f5f2f0;
  }

  code[class*="language-"] {
    font-family: "source-code-pro", Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 0.85em;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    background: none;
  }

  a {
    text-decoration: none;
  }
`;
