# JavaScript is Not Java

=========================

An illustration of the differences between the two programming languages.

=========================

## Get Started

```bash
git clone https://github.com/kaela/javascriptisnotjava.git
cd javascriptisnotjava
yarn dev
```

## Deploy Script

When originally creating the site, change the end of the deploy command to:
`git subtree push --prefix out origin gh-pages`

Any time after, use:

```
git push origin `git subtree split --prefix out -b gh-pages`:gh-pages --force`
```

## Build

Run `yarn build`

Open up http://localhost:3000

This project uses:

- react
- next.js
- styled-components
- github pages

## Committing Changes

- `git add...`
- `git commit...`
- `yarn deploy`
