const path = require('path');

const fse = require('fs-extra');
const glob = require('glob-promise');
const decamelize = require('decamelize');
const chalk = require('chalk');

const logger = console;

async function removeFiles() {
  const files = await glob('pages/docs/**', {
    ignore: ['pages/docs', '**/index.js'],
  });
  await Promise.all(
    files.map(async file => {
      await fse.remove(file);
      logger.log(chalk.red('remove'), `${file}`);
    })
  );
}

async function copyFiles() {
  const files = await glob('docs/**', { ignore: ['docs'] });
  await Promise.all(
    files.map(async file => {
      const result = file.match(/(.*)\/(.*)-(.*).md/);

      const category = decamelize(result[2], '-');
      const topic = decamelize(result[3], '-');
      const destination = `pages/docs/${category}/${topic}.md`;

      await fse.copy(file, path.resolve(__dirname, destination));
      logger.log(
        chalk.yellow('copy'),
        file,
        chalk.bold.yellow('==>'),
        destination
      );

      await fse.writeFile(
        path.resolve(__dirname, `pages/docs/${category}/${topic}.js`),
        `import React from 'react';
import ReactMarkdown from 'react-markdown';

import withDoc from '../../../lib/with-doc';

import markdown from './${topic}.md';

// prettier-ignore
export default withDoc({
  title: '${result[3]}',
  author: 'Yoctol',
})(<ReactMarkdown source={markdown} />);
`
      );
      logger.log(chalk.green('create'), `pages/docs/${category}/${topic}.js`);
    })
  );
}

async function main() {
  await removeFiles();
  await copyFiles();
}

main();
