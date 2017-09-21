const path = require('path');
const fs = require('fs');

const glob = require('glob-promise');
const decamelize = require('decamelize');
const stringifyObject = require('stringify-object');
const chalk = require('chalk');

const logger = console;

async function main() {
  const docs = [];
  const docsFiles = await glob('docs/**', { ignore: ['docs'] });

  await Promise.all(
    docsFiles.map(async file => {
      const result = file.match(/(.*)\/(.*)-(.*).md/);
      const doc = { name: result[2].replace('API', 'API '), posts: [] };

      const post = {
        name: result[3] === 'GettingStarted' ? 'Getting Started' : result[3],
        href: `/docs/${decamelize(result[2], '-')}/${decamelize(
          result[3],
          '-'
        )}`,
      };

      if (result[3] === 'GettingStarted') {
        post.aliases = ['/docs'];
      }

      doc.posts.push(post);

      docs.push(doc);
    })
  );

  fs.writeFileSync(
    path.resolve(__dirname, `lib/data/docs.js`),
    `// prettier-ignore\nexport default ${stringifyObject(docs, {
      indent: '  ',
    })};\n`
  );

  logger.log(chalk.magenta('overwrite'), 'lib/data/docs.js');
}

main();
