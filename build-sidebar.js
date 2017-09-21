const path = require('path');
const fs = require('fs');

const glob = require('glob-promise');
const decamelize = require('decamelize');
const stringifyObject = require('stringify-object');
const chalk = require('chalk');

const logger = console;

function format(str) {
  switch (str) {
    case 'GettingStarted':
      return 'Getting Started';
    default:
      return str.replace('API', 'API ');
  }
}

async function main() {
  const docs = [];
  const docsFiles = await glob('docs/**', { ignore: ['docs'] });

  for (let i = 0; i < docsFiles.length; i++) {
    const result = docsFiles[i].match(/(.*)\/(.*)-(.*).md/);
    const doc = { name: format(result[2]), posts: [] };

    const post = {
      name: format(result[3]),
      href: `/docs/${decamelize(result[2], '-')}/${decamelize(result[3], '-')}`,
    };

    if (result[3] === 'GettingStarted') {
      post.aliases = ['/docs'];
    }

    doc.posts.push(post);
    const index = docs.findIndex(d => d.name === doc.name);

    if (index > -1) {
      // same category
      docs[index].posts.push(post);
    } else {
      docs.push(doc);
    }
  }

  fs.writeFileSync(
    path.resolve(__dirname, `lib/data/docs.js`),
    `// prettier-ignore\nexport default ${stringifyObject(docs, {
      indent: '  ',
    })};\n`
  );

  logger.log(chalk.magenta('overwrite'), 'lib/data/docs.js');
}

main();
