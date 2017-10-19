// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates

const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 376,
};

export default {
  desktop: `max-width: ${sizes.desktop}px`,
  tablet: `max-width: ${sizes.tablet}px`,
  phone: `max-width: ${sizes.phone}px`,
};
