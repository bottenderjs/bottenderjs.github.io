import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const typography = new Typography(
  Object.assign(kirkhamTheme, {
    headerFontFamily: ['Helvetica', 'Lato', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
  })
);

module.exports = typography;
