# Bottender

This repo contains the source code and documentation for [Bottender](https://github.com/Yoctol/bottender).

## Getting started

### Installation

1. clone this repo to your local machine
2. `yarn` to install the website's npm dependencies.

### Running locally

1. `yarn run dev` to start the dev server ([powered by Gatsby](https://www.gatsbyjs.org/))
2. `open http://localhost:8000` to open the site

## Contributing

### Create a branch

1. `git checkout source` in your local repo
2. `git pull origin source` to ensure you have the latest main code
3. `git checkout -b the-name-of-my-branch` to create a branch (remember to replace `the-name-of-my-branch` with a suitable name)

### Make the change

1. Changes to React components in `src` will hot-reload
2. Changes to markdown files in `content` will hot-reload
3. If working with plugins, you may need to remove the `.cache` directory and restart the server.

### Test the change

1. Run `yarn run lint` from the project root. Make sure it pass the check.
2. If possible, test any visual changes in all latest version of common browsers, on both desktop and mobile.

### Push it

1. `git add -A && git commit -m "My message"` (replacing `My message` with a commit message, such as `Fixed header logo on Android`) to stage and commit your changes
2. `git push my-fork-name the-name-of-my-branch`
3. Make a pull-request

### Troubleshooting

- `yarn reset` to clear the local cache
- `rm -rf node_modules && yarn` to reinstall the dependencies
