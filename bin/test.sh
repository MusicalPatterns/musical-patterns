#!/usr/bin/env sh

set -e

./node_modules/.bin/tsc -p ./spec/tsconfig.json --noEmit
./node_modules/.bin/ts-node -P ./spec/tsconfig.json ./node_modules/jasmine/bin/jasmine.js
