#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
cp ./404.html dist/404.html

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:gareys/hooks-playground.git master:gh-pages

cd -