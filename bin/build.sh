#!/usr/bin/env sh

set -e

rm -rf dist/
./node_modules/.bin/webpack --config webpack.prod.js
