// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates
import { css } from 'styled-components';

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 376,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
