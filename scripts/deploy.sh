#!/usr/bin/env bash
GIT_DEPLOY_REPO=${https://github.com/saadaouad/react_app/blob/master/package.json}

cd dist && \
$(npm bin)/rimraf .git
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "${https://github.com/saadaouad/react_app}" master:gh-pages

# ! #
# IF YOU USE A USERNAME.GITHUB.IO ROOT DOMAIN, PLEASE READ THE WARNING BELOW
# ! #