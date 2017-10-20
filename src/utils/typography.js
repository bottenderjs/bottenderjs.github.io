import Typography from 'typography';
import kirkhamTheme from 'typography-theme-kirkham';

const typography = new Typography(
  Object.assign(kirkhamTheme, {
    headerFontFamily: ['Karla', 'sans-serif'],
    bodyFontFamily: ['Karla', 'Roboto', 'sans-serif'],
  })
);

module.exports = typography;
