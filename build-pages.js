const path = require('path');

const fse = require('fs-extra');
const glob = require('glob-promise');
const decamelize = require('decamelize');

const logger = console;

async function main() {
  const removeFiles = await glob('pages/docs/**', {
    ignore: ['pages/docs', '**/index.js'],
  });
  await Promise.all(
    removeFiles.map(async file => {
      await fse.remove(file);
      logger.log(`remove ${file} done`);
    })
  );

  const copyFiles = await glob('docs/**', { ignore: ['docs'] });
  await Promise.all(
    copyFiles.map(async file => {
      const result = file.match(/(.*)\/(.*)-(.*).md/);

      const category = decamelize(result[2], '-');
      const topic = decamelize(result[3], '-');
      await fse.copy(
        file,
        path.resolve(__dirname, `pages/docs/${category}/${topic}.md`)
      );
      logger.log(`copy ${file} successfully`);
    })
  );
}

main();
