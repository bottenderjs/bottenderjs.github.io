const glob = require('glob-promise');

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  exportPathMap: async () => {
    const paths = await glob('pages/**');
    const pages = paths.map(path => {
      path = path.replace(/^pages/, '');
      path = path.replace('index.js', '');
      path = path.replace('.js', '');

      if (path === '/') return path;

      path = path.replace(/\/$/, '');
      return path;
    });

    const pageMap = pages.reduce((map, page) => {
      map[page] = { page };
      return map;
    }, {});

    return pageMap;
  },
};
