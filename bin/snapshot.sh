#!/usr/bin/env sh

set -e

node_modules/.bin/tsc -p test/tsconfig.json --noEmit
node_modules/.bin/ts-node -P test/tsconfig.json ./bin/snapshot.js
