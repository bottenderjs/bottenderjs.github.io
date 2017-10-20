// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#media-templates

export const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export default {
  giant: `max-width: ${sizes.giant}px`,
  desktop: `max-width: ${sizes.desktop}px`,
  tablet: `max-width: ${sizes.tablet}px`,
  phone: `max-width: ${sizes.phone}px`,
};
